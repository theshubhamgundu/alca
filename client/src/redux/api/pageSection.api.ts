import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_SERVER || 'https://alca.in';

export interface PageSection {
  id: string;
  business_id: string;
  section_type: string; // Hero, About, Services, Gallery, Testimonials, FAQ, CTA
  content: any; // JSONB
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PageSectionResponse {
  success: boolean;
  sections: PageSection[];
  section?: PageSection;
  message?: string;
}

export const pageSectionApi = createApi({
  reducerPath: 'pageSectionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/v1/page-sections`,
    prepareHeaders: (headers) => {
      const adminToken = localStorage.getItem('adminToken');
      if (adminToken) {
        headers.set('Authorization', `Bearer ${adminToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['PageSection'],
  endpoints: (builder) => ({
    getPageSections: builder.query<PageSectionResponse, string | void | null>({
      query: (businessId) => (businessId ? `/?businessId=${businessId}` : `/`),
      providesTags: ['PageSection'],
    }),
    createPageSection: builder.mutation<PageSectionResponse, Partial<PageSection>>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['PageSection'],
    }),
    updatePageSection: builder.mutation<PageSectionResponse, { id: string; body: Partial<PageSection> }>({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['PageSection'],
    }),
    deletePageSection: builder.mutation<PageSectionResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['PageSection'],
    }),
  }),
});

export const {
  useGetPageSectionsQuery,
  useCreatePageSectionMutation,
  useUpdatePageSectionMutation,
  useDeletePageSectionMutation,
} = pageSectionApi;
