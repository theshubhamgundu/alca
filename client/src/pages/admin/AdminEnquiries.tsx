import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetAllEnquiriesQuery, useUpdateEnquiryStatusMutation } from '../../redux/api/enquiry.api';
import { FaEnvelope, FaCheck, FaArchive } from 'react-icons/fa';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const AdminEnquiries: React.FC = () => {
  const selectedBusinessId = useSelector((state: RootState) => state.adminBusiness.selectedBusinessId);
  const { data, isLoading, refetch } = useGetAllEnquiriesQuery(selectedBusinessId || undefined);
  const [updateStatus] = useUpdateEnquiryStatusMutation();

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const res = await updateStatus({ id, status }).unwrap();
      if (res.success) toast.success(`Enquiry marked as ${status}`);
      refetch();
    } catch (err: any) {
      toast.error(err.message || 'Failed to update status');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'read': return 'bg-yellow-100 text-yellow-800';
      case 'replied': return 'bg-green-100 text-green-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) return <p className="p-6">Loading enquiries...</p>;

  const enquiries = data?.enquiries || [];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#1a2e1d]">Enquiries</h1>
          <p className="text-sm text-gray-500">Manage customer messages and leads</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {enquiries.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <FaEnvelope className="mx-auto text-4xl mb-3 text-gray-300" />
            <p>No enquiries found for this business.</p>
          </div>
        ) : (
          <div className="divide-y">
            {enquiries.map((enq) => (
              <div key={enq.id} className="p-5 flex flex-col md:flex-row gap-4 items-start hover:bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-gray-900">{enq.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(enq.status)}`}>
                      {enq.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">
                    <a href={`mailto:${enq.email}`} className="text-[#C79A56] hover:underline">{enq.email}</a>
                    {enq.phone && <span className="ml-3 border-l pl-3">{enq.phone}</span>}
                    <span className="ml-3 border-l pl-3">{dayjs(enq.created_at).format('DD MMM YYYY, hh:mm A')}</span>
                  </p>
                  {enq.subject && <h4 className="font-semibold text-sm text-gray-800 mb-1">Subject: {enq.subject}</h4>}
                  <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border">{enq.message}</p>
                </div>
                <div className="flex flex-row md:flex-col gap-2 shrink-0">
                  {enq.status === 'new' && (
                    <button onClick={() => handleStatusChange(enq.id, 'read')} className="text-xs px-3 py-1.5 border rounded hover:bg-gray-100 flex items-center gap-1">
                      <FaEnvelope /> Mark Read
                    </button>
                  )}
                  {enq.status !== 'replied' && (
                    <button onClick={() => handleStatusChange(enq.id, 'replied')} className="text-xs px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded hover:bg-green-100 flex items-center gap-1">
                      <FaCheck /> Mark Replied
                    </button>
                  )}
                  {enq.status !== 'archived' && (
                    <button onClick={() => handleStatusChange(enq.id, 'archived')} className="text-xs px-3 py-1.5 text-gray-500 border rounded hover:bg-gray-100 flex items-center gap-1">
                      <FaArchive /> Archive
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminEnquiries;
