import api from './api';

export const artistAPI = {
  // Register artist via WhatsApp
  whatsappRegister: async (data: any) => {
    const response = await api.post('/artists/whatsapp_register/', data);
    return response.data;
  },

  // Verify OTP
  verifyOTP: async (phoneNumber: string, otp: string) => {
    const response = await api.post('/artists/verify_otp/', {
      phone_number: phoneNumber,
      otp,
    });
    return response.data;
  },

  // Get artist profile
  getProfile: async (artistId: string) => {
    const response = await api.get(`/artists/${artistId}/`);
    return response.data;
  },

  // List all artists
  listArtists: async (params?: any) => {
    const response = await api.get('/artists/', { params });
    return response.data;
  },

  // Update artist profile
  updateProfile: async (artistId: string, data: any) => {
    const response = await api.patch(`/artists/${artistId}/`, data);
    return response.data;
  },
};

export const productAPI = {
  // List products
  listProducts: async (params?: any) => {
    const response = await api.get('/products/', { params });
    return response.data;
  },

  // Get product details
  getProduct: async (productId: string) => {
    const response = await api.get(`/products/${productId}/`);
    return response.data;
  },

  // Create product
  createProduct: async (data: any) => {
    const response = await api.post('/products/', data);
    return response.data;
  },

  // Update product
  updateProduct: async (productId: string, data: any) => {
    const response = await api.patch(`/products/${productId}/`, data);
    return response.data;
  },

  // Get trending products
  getTrending: async () => {
    const response = await api.get('/products/trending/');
    return response.data;
  },
};

export const orderAPI = {
  // Create order
  createOrder: async (data: any) => {
    const response = await api.post('/orders/create_order/', data);
    return response.data;
  },

  // Get order details
  getOrder: async (orderId: string) => {
    const response = await api.get(`/orders/${orderId}/`);
    return response.data;
  },

  // List user orders
  listOrders: async (params?: any) => {
    const response = await api.get('/orders/', { params });
    return response.data;
  },

  // Update order status
  updateStatus: async (orderId: string, status: string) => {
    const response = await api.patch(`/orders/${orderId}/update_status/`, { status });
    return response.data;
  },
};

export const paymentAPI = {
  // Initiate payment
  initiatePayment: async (data: any) => {
    const response = await api.post('/payments/initiate_payment/', data);
    return response.data;
  },

  // Confirm payment
  confirmPayment: async (paymentId: string, data: any) => {
    const response = await api.post(`/payments/${paymentId}/confirm_payment/`, data);
    return response.data;
  },
};

export const shippingAPI = {
  // Create shipment
  createShipment: async (data: any) => {
    const response = await api.post('/shipping/create_shipment/', data);
    return response.data;
  },

  // Get tracking info
  track: async (shipmentId: string) => {
    const response = await api.get(`/shipping/${shipmentId}/track/`);
    return response.data;
  },

  // Update tracking
  updateTracking: async (shipmentId: string, data: any) => {
    const response = await api.post(`/shipping/${shipmentId}/update_tracking/`, data);
    return response.data;
  },
};

export const insuranceAPI = {
  // Create policy
  createPolicy: async (data: any) => {
    const response = await api.post('/insurance/create_policy/', data);
    return response.data;
  },

  // File claim
  fileClaim: async (insuranceId: string, data: any) => {
    const response = await api.post(`/insurance/${insuranceId}/file_claim/`, data);
    return response.data;
  },
};

export const aiAPI = {
  // Generate product description
  generateDescription: async (data: any) => {
    const response = await api.post('/ai/generate_product_description/', data);
    return response.data;
  },

  // Generate artist story
  generateStory: async (data: any) => {
    const response = await api.post('/ai/generate_artist_story/', data);
    return response.data;
  },

  // Auto-categorize
  autoCategorize: async (data: any) => {
    const response = await api.post('/ai/auto_categorize/', data);
    return response.data;
  },
};

export const analyticsAPI = {
  // Get dashboard
  getDashboard: async () => {
    const response = await api.get('/analytics/sales/dashboard/');
    return response.data;
  },

  // Get trending artists
  getTrendingArtists: async () => {
    const response = await api.get('/analytics/sales/trending_artists/');
    return response.data;
  },

  // Get trending products
  getTrendingProducts: async () => {
    const response = await api.get('/analytics/sales/trending_products/');
    return response.data;
  },
};
