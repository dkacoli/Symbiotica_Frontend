// API Configuration
const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:8001";

export const API_ENDPOINTS = {

  AUTH: {
    LOGIN: `${API_BASE}/auth/login`,
    REGISTER: `${API_BASE}/auth/register`,
  },
 
};

export const API_BASE_URL = API_BASE;
