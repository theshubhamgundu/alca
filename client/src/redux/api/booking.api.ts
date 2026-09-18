import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_SERVER || 'https://julinacandles.in';

export interface Booking {
  id: string;
  business_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  booking_date: string; // timestamp
  booking_time?: string;
  status: string; // pending, confirmed, cancelled, completed
  service_requested?: string;
  number_of_guests?: number;
  total_amount?: number;
  notes?: string;
  created_at: string;
}

export interface BookingResponse {
  success: boolean;
  bookings: Booking[];
  booking?: Booking;
  message?: string;
}

export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/v1/bookings`,
    prepareHeaders: (headers) => {
      const adminToken = localStorage.getItem('adminToken');
      if (adminToken) {
        headers.set('Authorization', `Bearer ${adminToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Booking'],
  endpoints: (builder) => ({
    getAllBookings: builder.query<BookingResponse, string | void | null>({
      query: (businessId) => (businessId ? `/?businessId=${businessId}` : `/`),
      providesTags: ['Booking'],
    }),
    createBooking: builder.mutation<BookingResponse, Partial<Booking>>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Booking'],
    }),
    updateBookingStatus: builder.mutation<BookingResponse, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Booking'],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useCreateBookingMutation,
  useUpdateBookingStatusMutation,
} = bookingApi;
