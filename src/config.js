export const config = {
  api: {
    urlForList: String(import.meta.env.VITE_API_URL_LIST),
    url: String(import.meta.env.VITE_API_URL),
    imageUrl: String(import.meta.env.VITE_API_IMAGE_URL),
    videoBaseUrl: String(import.meta.env.VITE_VIDEO_URL),
    key: String(import.meta.env.VITE_API_KEY),
    token: String(import.meta.env.VITE_BEARER_TOKEN),
  },
};
