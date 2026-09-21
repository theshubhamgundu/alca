import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  useGetPageSectionsQuery,
  useCreatePageSectionMutation,
  useUpdatePageSectionMutation,
  useDeletePageSectionMutation,
  PageSection,
} from '../../redux/api/pageSection.api';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaArrowUp, FaArrowDown, FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SECTION_TYPES = ['Hero', 'About', 'Services', 'Gallery', 'Testimonials', 'FAQ', 'CTA', 'Contact', 'Team', 'Pricing', 'Features', 'Stats'];

const AdminPageSections: React.FC = () => {
  const selectedBusinessId = useSelector((state: RootState) => state.adminBusiness.selectedBusinessId);
  const { data, isLoading, refetch } = useGetPageSectionsQuery(selectedBusinessId || undefined);
  const [createSection] = useCreatePageSectionMutation();
  const [updateSection] = useUpdatePageSectionMutation();
  const [deleteSection] = useDeletePageSectionMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<Partial<PageSection> | null>(null);
  const [jsonContent, setJsonContent] = useState('{}');

  const selectedBusiness = businessesData?.businesses?.find(b => b.id === selectedBusinessId);

  const handleAddNew = () => {
    if (!selectedBusinessId) {
      toast.warning('Please select a business from the sidebar first');
      return;
    }
    setEditingSection({ business_id: selectedBusinessId, section_type: 'Hero', sort_order: (data?.sections?.length || 0) + 1, is_active: true, content: {} });
    setJsonContent('{\n  "title": "",\n  "subtitle": "",\n  "image_url": "",\n  "cta_text": "",\n  "cta_link": ""\n}');
    setIsModalOpen(true);
  };

  const handleEdit = (section: PageSection) => {
    setEditingSection(section);
    setJsonContent(JSON.stringify(section.content, null, 2));
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this section permanently?')) return;
    try {
      await deleteSection(id).unwrap();
      toast.success('Section deleted');
      refetch();
    } catch (err: any) {
      toast.error(err.message || 'Failed to delete');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSection?.section_type) {
      return toast.error('Section type is required');
    }

    let parsedContent: any;
    try {
      parsedContent = JSON.parse(jsonContent);
    } catch {
      return toast.error('Invalid JSON in content field');
    }

    const payload = { ...editingSection, content: parsedContent };

    try {
      if (editingSection?.id) {
        const { id, created_at, updated_at, ...body } = payload as any;
        await updateSection({ id, body }).unwrap();
        toast.success('Section updated');
      } else {
        await createSection(payload).unwrap();
        toast.success('Section created');
      }
      setIsModalOpen(false);
      setEditingSection(null);
      refetch();
    } catch (err: any) {
      toast.error(err.message || 'Error saving section');
    }
  };

  const handleToggleActive = async (section: PageSection) => {
    try {
      await updateSection({ id: section.id, body: { is_active: !section.is_active } }).unwrap();
      toast.success(`Section ${section.is_active ? 'hidden' : 'shown'}`);
      refetch();
    } catch (err: any) {
      toast.error('Failed to toggle visibility');
    }
  };

  if (isLoading) return <p className="p-6">Loading page sections...</p>;

  const sections = data?.sections || [];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#1a2e1d]">CMS Page Builder</h1>
          <p className="text-sm text-gray-500">
            {selectedBusiness ? `Editing landing page for "${selectedBusiness.name}"` : 'Select a business to manage its landing page sections'}
          </p>
        </div>
        <button
          onClick={handleAddNew}
          disabled={!selectedBusinessId}
          className="bg-[#C79A56] hover:bg-[#b38543] disabled:bg-gray-300 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg transition-colors"
        >
          <FaPlus /> Add Section
        </button>
      </div>

      {!selectedBusinessId ? (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 p-6 rounded-xl text-center">
          <p className="font-semibold">⚠️ No business selected</p>
          <p className="text-sm mt-1">Use the "Active Business" dropdown in the sidebar to select a business before editing page sections.</p>
        </div>
      ) : sections.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border p-8 text-center text-gray-500">
          <p className="text-lg font-semibold mb-2">No sections yet</p>
          <p className="text-sm">Click "Add Section" to start building the landing page for this business.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {sections.map((section, index) => (
            <div key={section.id} className={`bg-white rounded-xl border shadow-sm p-5 flex items-start gap-4 ${!section.is_active ? 'opacity-50' : ''}`}>
              <div className="flex flex-col items-center gap-1 text-gray-400 pt-1">
                <span className="text-lg font-bold text-gray-300">#{index + 1}</span>
                <button onClick={() => { /* reorder logic */ }} className="hover:text-gray-600"><FaArrowUp size={12} /></button>
                <button onClick={() => { /* reorder logic */ }} className="hover:text-gray-600"><FaArrowDown size={12} /></button>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#C79A56]/10 text-[#C79A56] border border-[#C79A56]/20">
                    {section.section_type}
                  </span>
                  {!section.is_active && (
                    <span className="text-xs text-gray-500 font-medium">Hidden</span>
                  )}
                </div>
                <pre className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border max-h-24 overflow-y-auto">
                  {JSON.stringify(section.content, null, 2).slice(0, 300)}
                </pre>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button onClick={() => handleEdit(section)} className="p-2 rounded-lg text-gray-400 hover:text-[#C79A56] hover:bg-[#C79A56]/10">
                  <FaEdit />
                </button>
                <button onClick={() => handleToggleActive(section)} className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                  {section.is_active ? <FaEye /> : <FaEyeSlash />}
                </button>
                <button onClick={() => handleDelete(section.id)} className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{editingSection?.id ? 'Edit Section' : 'Add Section'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500"><FaTimes size={20} /></button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Section Type *</label>
                <select
                  value={editingSection?.section_type || ''}
                  onChange={(e) => setEditingSection({ ...editingSection, section_type: e.target.value })}
                  className="w-full border rounded-lg p-2"
                >
                  {SECTION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
                <input
                  type="number"
                  value={editingSection?.sort_order || 0}
                  onChange={(e) => setEditingSection({ ...editingSection, sort_order: parseInt(e.target.value) })}
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content (JSON) *</label>
                <textarea
                  rows={12}
                  value={jsonContent}
                  onChange={(e) => setJsonContent(e.target.value)}
                  className="w-full border rounded-lg p-3 font-mono text-sm bg-gray-50"
                  placeholder='{"title": "Welcome", "subtitle": "..."}'
                />
                <p className="text-xs text-gray-400 mt-1">Must be valid JSON. Structure depends on section type.</p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="sectionActive"
                  checked={editingSection?.is_active ?? true}
                  onChange={(e) => setEditingSection({ ...editingSection, is_active: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="sectionActive" className="text-sm font-medium text-gray-700">Section is Active</label>
              </div>

              <div className="mt-6 flex justify-end gap-3 border-t pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-6 py-2 bg-[#C79A56] text-white rounded-lg hover:bg-[#b38543] font-medium shadow-md">Save Section</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPageSections;
