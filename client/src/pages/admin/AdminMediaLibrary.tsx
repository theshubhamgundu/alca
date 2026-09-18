import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetAllMediaQuery, useDeleteMediaMutation } from '../../redux/api/mediaLibrary.api';
import { FaTrash, FaImage, FaCopy } from 'react-icons/fa';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const AdminMediaLibrary: React.FC = () => {
  const selectedBusinessId = useSelector((state: RootState) => state.adminBusiness.selectedBusinessId);
  const { data, isLoading, refetch } = useGetAllMediaQuery(selectedBusinessId || undefined);
  const [deleteMedia] = useDeleteMediaMutation();

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this media item?')) return;
    try {
      await deleteMedia(id).unwrap();
      toast.success('Media deleted');
      refetch();
    } catch (err: any) {
      toast.error(err.message || 'Failed to delete media');
    }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('URL copied to clipboard');
  };

  if (isLoading) return <p className="p-6">Loading media library...</p>;

  const media = data?.media || [];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#1a2e1d]">Media Library</h1>
          <p className="text-sm text-gray-500">Browse and manage uploaded images and files</p>
        </div>
      </div>

      {media.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border p-8 text-center text-gray-500">
          <FaImage className="mx-auto text-5xl mb-3 text-gray-300" />
          <p className="text-lg font-semibold mb-1">No media files</p>
          <p className="text-sm">Media uploaded through products and CMS sections will appear here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {media.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={item.url}
                  alt={item.alt_text || 'Media item'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjE0Ij5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => handleCopyUrl(item.url)}
                    className="p-2 bg-white rounded-lg shadow-md text-gray-700 hover:text-[#C79A56] transition"
                    title="Copy URL"
                  >
                    <FaCopy />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 bg-white rounded-lg shadow-md text-gray-700 hover:text-red-600 transition"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-gray-800 truncate">{item.alt_text || item.public_id}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  {item.file_type || 'image'} • {dayjs(item.created_at).format('DD MMM YYYY')}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMediaLibrary;
