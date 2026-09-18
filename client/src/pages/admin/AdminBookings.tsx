import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetAllBookingsQuery, useUpdateBookingStatusMutation } from '../../redux/api/booking.api';
import { FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const AdminBookings: React.FC = () => {
  const selectedBusinessId = useSelector((state: RootState) => state.adminBusiness.selectedBusinessId);
  const { data, isLoading, refetch } = useGetAllBookingsQuery(selectedBusinessId || undefined);
  const [updateStatus] = useUpdateBookingStatusMutation();

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const res = await updateStatus({ id, status }).unwrap();
      if (res.success) toast.success(`Booking marked as ${status}`);
      refetch();
    } catch (err: any) {
      toast.error(err.message || 'Failed to update status');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) return <p className="p-6">Loading bookings...</p>;

  const bookings = data?.bookings || [];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#1a2e1d]">Bookings</h1>
          <p className="text-sm text-gray-500">Manage event catering, styling, and makeup bookings</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {bookings.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <FaCalendarAlt className="mx-auto text-4xl mb-3 text-gray-300" />
            <p>No bookings found for this business.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 font-semibold text-gray-600">Event Date</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Customer</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Details</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-3 text-right font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-800">{dayjs(booking.booking_date).format('DD MMM YYYY')}</div>
                      {booking.booking_time && <div className="text-xs text-gray-500">{booking.booking_time}</div>}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold">{booking.customer_name}</div>
                      <div className="text-xs text-gray-500">
                        <a href={`mailto:${booking.customer_email}`} className="hover:underline">{booking.customer_email}</a>
                        {booking.customer_phone && <span className="block">{booking.customer_phone}</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {booking.service_requested && <div className="font-medium text-[#C79A56]">{booking.service_requested}</div>}
                      {booking.number_of_guests && (
                        <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                          <FaUsers /> {booking.number_of_guests} guests
                        </div>
                      )}
                      {booking.total_amount && <div className="text-xs font-bold text-green-700 mt-1">₹{booking.total_amount}</div>}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <select 
                        value={booking.status}
                        onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                        className="text-xs border rounded p-1.5 focus:ring-[#C79A56] outline-none"
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBookings;
