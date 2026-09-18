import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_SERVER || 'https://alca.in';

export interface MediaItem {
  id: string;
  business_id?: string;
  url: string;
  public_id: string;
  file_type?: string;
  alt_text?: string;
  created_at: string;
}

export interface MediaLibraryResponse {
  success: boolean;
  media: MediaItem[];
  item?: MediaItem;
  message?: string;
}

export const mediaLibraryApi = createApi({
  reducerPath: 'mediaLibraryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/v1/media`,
    prepareHeaders: (headers) => {
      const adminToken = localStorage.getItem('adminToken');
      if (adminToken) {
        headers.set('Authorization', `Bearer ${adminToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Media'],
  endpoints: (builder) => ({
    getAllMedia: builder.query<MediaLibraryResponse, string | void | null>({
      query: (businessId) => (businessId ? `/?businessId=${businessId}` : `/`),
      providesTags: ['Media'],
    }),
    uploadMedia: builder.mutation<MediaLibraryResponse, Partial<MediaItem>>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Media'],
    }),
    deleteMedia: builder.mutation<MediaLibraryResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Media'],
    }),
  }),
});

export const {
  useGetAllMediaQuery,
  useUploadMediaMutation,
  useDeleteMediaMutation,
} = mediaLibraryApi;
