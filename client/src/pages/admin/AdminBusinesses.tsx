import React, { useState } from 'react';
import { FaPlus, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import { 
  useGetAllBusinessesQuery, 
  useCreateBusinessMutation, 
  useUpdateBusinessMutation, 
  Business 
} from '../../redux/api/business.api';
import { toast } from 'react-toastify';

const AdminBusinesses: React.FC = () => {
  const { data, isLoading, refetch } = useGetAllBusinessesQuery();
  const [createBusiness] = useCreateBusinessMutation();
  const [updateBusiness] = useUpdateBusinessMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBusiness, setEditingBusiness] = useState<Partial<Business> | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBusiness?.name || !editingBusiness?.slug) {
      return toast.error('Name and Slug are required');
    }

    try {
      if (editingBusiness.id) {
        // Update
        const { id, ...body } = editingBusiness;
        const res = await updateBusiness({ id, body }).unwrap();
        if (res.success) toast.success('Business updated successfully');
      } else {
        // Create
        const res = await createBusiness(editingBusiness).unwrap();
        if (res.success) toast.success('Business created successfully');
      }
      setIsModalOpen(false);
      setEditingBusiness(null);
      refetch();
    } catch (err: any) {
      toast.error(err.message || 'Error saving business');
    }
  };

  const handleEdit = (business: Business) => {
    setEditingBusiness(business);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingBusiness({ is_active: true });
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#1a2e1d]">ALCA Businesses</h1>
          <p className="text-sm text-gray-500">Manage multi-tenant businesses on the platform</p>
        </div>
        <button
          onClick={handleAddNew}
          className="bg-[#C79A56] hover:bg-[#b38543] text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg transition-colors"
        >
          <FaPlus /> Add Business
        </button>
      </div>

      {isLoading ? (
        <p>Loading businesses...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.businesses?.map((b) => (
            <div key={b.id} className="bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{b.name}</h3>
                  <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md inline-block mt-1">/{b.slug}</p>
                </div>
                <button onClick={() => handleEdit(b)} className="text-gray-400 hover:text-[#C79A56]">
                  <FaEdit size={18} />
                </button>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Status: {b.is_active ? <span className="text-green-600 font-bold"><FaCheck className="inline mr-1" />Active</span> : <span className="text-red-500 font-bold"><FaTimes className="inline mr-1"/>Inactive</span>}</p>
                {b.contact_email && <p>Email: {b.contact_email}</p>}
                {b.contact_phone && <p>Phone: {b.contact_phone}</p>}
              </div>
              <div className="mt-4 pt-4 border-t flex items-center justify-between">
                 <div className="flex gap-2">
                   {b.primary_color && (
                     <div className="w-6 h-6 rounded-full shadow-sm border" style={{ backgroundColor: b.primary_color }} title="Primary Color"></div>
                   )}
                   {b.secondary_color && (
                     <div className="w-6 h-6 rounded-full shadow-sm border" style={{ backgroundColor: b.secondary_color }} title="Secondary Color"></div>
                   )}
                 </div>
                 <a href={`/${b.slug}`} target="_blank" rel="noreferrer" className="text-xs font-bold text-[#C79A56] hover:underline">View Page &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{editingBusiness?.id ? 'Edit Business' : 'Create Business'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500">
                <FaTimes size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                  <input type="text" required value={editingBusiness?.name || ''} onChange={(e) => setEditingBusiness({...editingBusiness, name: e.target.value})} className="w-full border rounded-lg p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
                  <input type="text" required value={editingBusiness?.slug || ''} onChange={(e) => setEditingBusiness({...editingBusiness, slug: e.target.value})} className="w-full border rounded-lg p-2" placeholder="e.g. catering" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea rows={3} value={editingBusiness?.description || ''} onChange={(e) => setEditingBusiness({...editingBusiness, description: e.target.value})} className="w-full border rounded-lg p-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                  <input type="color" value={editingBusiness?.primary_color || '#000000'} onChange={(e) => setEditingBusiness({...editingBusiness, primary_color: e.target.value})} className="w-full border rounded-lg p-1 h-10" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
                  <input type="color" value={editingBusiness?.secondary_color || '#ffffff'} onChange={(e) => setEditingBusiness({...editingBusiness, secondary_color: e.target.value})} className="w-full border rounded-lg p-1 h-10" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                  <input type="email" value={editingBusiness?.contact_email || ''} onChange={(e) => setEditingBusiness({...editingBusiness, contact_email: e.target.value})} className="w-full border rounded-lg p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                  <input type="text" value={editingBusiness?.contact_phone || ''} onChange={(e) => setEditingBusiness({...editingBusiness, contact_phone: e.target.value})} className="w-full border rounded-lg p-2" />
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-4">
                <input type="checkbox" id="isActive" checked={editingBusiness?.is_active ?? true} onChange={(e) => setEditingBusiness({...editingBusiness, is_active: e.target.checked})} className="w-4 h-4 text-[#C79A56] rounded focus:ring-[#C79A56]" />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Business is Active (Visible to public)</label>
              </div>

              <div className="mt-8 flex justify-end gap-3 border-t pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-6 py-2 bg-[#C79A56] text-white rounded-lg hover:bg-[#b38543] font-medium shadow-md">Save Business</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBusinesses;
