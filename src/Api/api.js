// api.js

import axios from 'axios';
import {
  USER_LIST_URL,
  CREATE_ADMIN,CREATE_VENDOR, CREATE_CUSTOMER,
  GET_ADMIN,GET_VENDOR,GET_CUSTOMER,  
  UPDATE_ADMIN,UPDATE_VENDOR,UPDATE_CUSTOMER,  
  DELETE_ADMIN,DELETE_VENDOR,  DELETE_CUSTOMER,
  LOGIN_URL,LOGOUT_URL,
  GET_USER,CHANGE_PASSWORD_URL,SUBSCRIBE_NEWSLETTER,
  CREATE_PRODUCT_URL,EDIT_PRODUCT_URL,GET_PRODUCT_URL,
  CREATE_COUPON_URL,EDIT_COUPON_URL,GET_COUPON_URL,
  CREATE_COLLECTION_URL,EDIT_COLLECTION_URL,GET_COLLECTION_URL,
  CREATE_ORDER_URL,EDIT_ORDER_URL,GET_ORDER_URL,
  CREATE_WISHLIST_URL,EDIT_WISHLIST_URL,GET_WISHLIST_URL,
  CREATE_ORDER_CANCELLETION_URL,EDIT_ORDER_CANCELLETION_URL,GET_ORDER_CANCELLETION_URL,
  CREATE_ORDER_RETURN_URL,EDIT_ORDER_RETURN_URL,GET_ORDER_RETURN_URL,
  CREATE_ORDER_DOWNLOAD_URL,EDIT_ORDER_DOWNLOAD_URL,GET_ORDER_DOWNLOAD_URL,
  GET_DOCUMENT_TYPES_URL,CREATE_DOCUMENT_TYPE_URL,
  GET_PRINTING_REQUESTS_URL,CREATE_PRINTING_REQUEST_URL,
  GET_CANCELLATION_REQUESTS_URL,CREATE_CANCELLATION_REQUEST_URL,
  GET_RETURN_REQUESTS_URL,CREATE_RETURN_REQUEST_URL,
  GET_DOWNLOADS_URL,CREATE_DOWNLOAD_URL,
  CREATE_STRIPE_PAYMENT_INTENT_URL,COMPLETE_STRIPE_PAYMENT_URL,CREATE_MPESA_PAYMENT_INTENT_URL,
  MPESA_CALLBACK_URL,REFUND_PAYMENT_URL,MPESA_B2C_RESULT_URL,MPESA_B2C_TIMEOUT_URL,
} from './apiConfig';

// Set up axios instance
const apiClient = axios.create();

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export const getUserList = async () => {
  const response = await apiClient.get(USER_LIST_URL);
  return response.data;
};
// User Management
export const createAdmin = async (adminData) => {
  localStorage.removeItem('token')
  const response = await apiClient.post(CREATE_ADMIN, adminData);
  return response.data;
};

export const createVendor = async (vendorData) => {
  localStorage.removeItem('token')
  const response = await apiClient.post(CREATE_VENDOR, vendorData);
  return response.data;
};

export const createCustomer = async (customerData) => {
  localStorage.removeItem('token')
  const response = await apiClient.post(CREATE_CUSTOMER, customerData);
  return response.data;
};
export const getAdmin = async (adminData) => {
  const response = await apiClient.post(GET_ADMIN, adminData);
  return response.data;
};

export const getVendor = async (vendorData) => {
  const response = await apiClient.post(GET_VENDOR, vendorData);
  return response.data;
};

export const getCustomer = async (customerData) => {
  const response = await apiClient.post(GET_CUSTOMER, customerData);
  return response.data;
};

export const updateAdmin = async (adminData) => {
  const response = await apiClient.patch(UPDATE_ADMIN, adminData);
  return response.data;
};

export const updateVendor = async (vendorData) => {
  const response = await apiClient.patch(UPDATE_VENDOR, vendorData);
  return response.data;
};

export const updateCustomer = async (customerData) => {
  const response = await apiClient.patch(UPDATE_CUSTOMER, customerData);
  return response.data;
};
export const deleteAdmin = async (adminData) => {
  const response = await apiClient.post(DELETE_ADMIN, adminData);
  return response.data;
};

export const deleteVendor = async (vendorData) => {
  const response = await apiClient.post(DELETE_VENDOR, vendorData);
  return response.data;
};

export const deleteCustomer = async (customerData) => {
  const response = await apiClient.post(DELETE_CUSTOMER, customerData);
  return response.data;
};

export const login = async (loginData) => {
  const response = await axios.post(LOGIN_URL, loginData);
  const { key } = response.data;
  console.log(key);
  if (key) {
    await localStorage.setItem('token', key);
  }
  return response.data;
};

export const logout = async () => {
  const response = await apiClient.post(LOGOUT_URL);
  localStorage.removeItem('token');
  return response.data;
};

export const getUserProfile = async () => {
  const response = await apiClient.get(GET_USER);
  return response.data;
};

export const changePassword = async (passwordData) => {
  const response = await apiClient.post(CHANGE_PASSWORD_URL, passwordData);
  return response.data;
};
export const subscribeToNewsletter = async (email) => {
  const response = await apiClient.post(SUBSCRIBE_NEWSLETTER, email);
  return response.data;
};

export const createProduct = async (details) => {
  const response = await apiClient.post(CREATE_PRODUCT_URL,details);
  return response.data;
};
export const editProduct = async (id) => {
  const response = await apiClient.patch(`${EDIT_PRODUCT_URL}/${id}`);
  return response.data;
};
export const getProduct = async (id) => {
  const response = await apiClient.get(`${GET_PRODUCT_URL}/${id}`);
  return response.data;
};
export const getProducts = async () => {
  const response = await apiClient.get(GET_PRODUCT_URL);
  return response.data;
};

export const createCoupon = async (details) => {
  const response = await apiClient.post(CREATE_COUPON_URL,details);
  return response.data;
};
export const editCoupon = async (id) => {
  const response = await apiClient.patch(`${EDIT_COUPON_URL}/${id}`);
  return response.data;
};
export const getCoupon = async (id) => {
  const response = await apiClient.get(`${GET_COUPON_URL}/${id}`);
  return response.data;
};
export const getCoupons = async () => {
  const response = await apiClient.get(GET_COUPON_URL);
  return response.data;
};

export const createCollection = async (details) => {
  const response = await apiClient.post(CREATE_COLLECTION_URL,details);
  return response.data;
};
export const editCollection = async (id) => {
  const response = await apiClient.patch(`${EDIT_COLLECTION_URL}/${id}`);
  return response.data;
};
export const getCollection = async (id) => {
  const response = await apiClient.get(`${GET_COLLECTION_URL}/${id}`);
  return response.data;
};
export const getCollections = async () => {
  const response = await apiClient.get(GET_COLLECTION_URL);
  return response.data;
};

export const createOrder= async (details) => {
  const response = await apiClient.post(CREATE_ORDER_URL,details);
  return response.data;
};
export const editOrder = async (id) => {
  const response = await apiClient.patch(`${EDIT_ORDER_URL}/${id}`);
  return response.data;
};
export const getOrder= async (id) => {
  const response = await apiClient.get(`${GET_ORDER_URL}/${id}`);
  return response.data;
};
export const getOrders = async () => {
  const response = await apiClient.get(GET_ORDER_URL);
  return response.data;
};
// Document Types
export const getDocumentTypes = async () => {
  const response = await apiClient.get(GET_DOCUMENT_TYPES_URL);
  return response.data;
};

export const createDocumentType = async (documentType) => {
  const response = await apiClient.post(CREATE_DOCUMENT_TYPE_URL, documentType);
  return response.data;
};

// Printing Service Requests
export const getPrintingServiceRequests = async () => {
  const response = await apiClient.get(GET_PRINTING_REQUESTS_URL);
  return response.data;
};

export const createPrintingServiceRequest = async (request) => {
  const response = await apiClient.post(CREATE_PRINTING_REQUEST_URL, request);
  return response.data;
};

// Cancellation Requests
export const getCancellationRequests = async () => {
  const response = await apiClient.get(GET_CANCELLATION_REQUESTS_URL);
  return response.data;
};

export const createCancellationRequest = async (request) => {
  const response = await apiClient.post(CREATE_CANCELLATION_REQUEST_URL, request);
  return response.data;
};

// Return Requests
export const getReturnRequests = async () => {
  const response = await apiClient.get(GET_RETURN_REQUESTS_URL);
  return response.data;
};

export const createReturnRequest = async (request) => {
  const response = await apiClient.post(CREATE_RETURN_REQUEST_URL, request);
  return response.data;
};

// Downloads
export const getDownloads = async () => {
  const response = await apiClient.get(GET_DOWNLOADS_URL);
  return response.data;
};

export const createDownload = async (download) => {
  const response = await apiClient.post(CREATE_DOWNLOAD_URL, download);
  return response.data;
};

// Payments
export const createStripePaymentIntent = async (data) => {
  const response = await apiClient.post(CREATE_STRIPE_PAYMENT_INTENT_URL, data);
  return response.data;
};

export const completeStripePayment = async (data) => {
  const response = await apiClient.post(COMPLETE_STRIPE_PAYMENT_URL, data);
  return response.data;
};

export const createMpesaPaymentIntent = async (data) => {
  const response = await apiClient.post(CREATE_MPESA_PAYMENT_INTENT_URL, data);
  return response.data;
};

export const mpesaCallback = async (data) => {
  const response = await apiClient.post(MPESA_CALLBACK_URL, data);
  return response.data;
};

export const refundPayment = async (data) => {
  const response = await apiClient.post(REFUND_PAYMENT_URL, data);
  return response.data;
};

export const mpesaB2CResult = async (data) => {
  const response = await apiClient.post(MPESA_B2C_RESULT_URL, data);
  return response.data;
};

export const mpesaB2CTimeout = async (data) => {
  const response = await apiClient.post(MPESA_B2C_TIMEOUT_URL, data);
  return response.data;
};
