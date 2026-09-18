import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_SERVER || 'https://alca.in';

export interface Business {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logo_url?: string;
  favicon_url?: string;
  primary_color?: string;
  secondary_color?: string;
  contact_email?: string;
  contact_phone?: string;
  social_links?: any;
  seo_metadata?: any;
  is_active: boolean;
  created_at: string;
}

export interface BusinessResponse {
  success: boolean;
  businesses: Business[];
  business?: Business;
  message?: string;
}

export const businessApi = createApi({
  reducerPath: 'businessApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/v1/businesses`,
    prepareHeaders: (headers) => {
      const adminToken = localStorage.getItem('adminToken');
      if (adminToken) {
        headers.set('Authorization', `Bearer ${adminToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Business'],
  endpoints: (builder) => ({
    getAllBusinesses: builder.query<BusinessResponse, void>({
      query: () => '/',
      providesTags: ['Business'],
    }),
    createBusiness: builder.mutation<BusinessResponse, Partial<Business>>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Business'],
    }),
    updateBusiness: builder.mutation<BusinessResponse, { id: string; body: Partial<Business> }>({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Business'],
    }),
  }),
});

export const {
  useGetAllBusinessesQuery,
  useCreateBusinessMutation,
  useUpdateBusinessMutation,
} = businessApi;
