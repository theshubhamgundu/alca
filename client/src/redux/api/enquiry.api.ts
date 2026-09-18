import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_SERVER || 'https://alca.in';

export interface Enquiry {
  id: string;
  business_id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: string; // new, read, replied, archived
  metadata?: any;
  created_at: string;
}

export interface EnquiryResponse {
  success: boolean;
  enquiries: Enquiry[];
  enquiry?: Enquiry;
  message?: string;
}

export const enquiryApi = createApi({
  reducerPath: 'enquiryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/v1/enquiries`,
    prepareHeaders: (headers) => {
      const adminToken = localStorage.getItem('adminToken');
      if (adminToken) {
        headers.set('Authorization', `Bearer ${adminToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Enquiry'],
  endpoints: (builder) => ({
    getAllEnquiries: builder.query<EnquiryResponse, string | void | null>({
      query: (businessId) => (businessId ? `/?businessId=${businessId}` : `/`),
      providesTags: ['Enquiry'],
    }),
    createEnquiry: builder.mutation<EnquiryResponse, Partial<Enquiry>>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Enquiry'],
    }),
    updateEnquiryStatus: builder.mutation<EnquiryResponse, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Enquiry'],
    }),
  }),
});

export const {
  useGetAllEnquiriesQuery,
  useCreateEnquiryMutation,
  useUpdateEnquiryStatusMutation,
} = enquiryApi;
