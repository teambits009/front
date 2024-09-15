// apiConfig.js

const BASE_URL = 'http://192.241.153.105'; // Replace with your actual API base URL
// const BASE_URL = 'https://calm-deadly-kit.ngrok-free.app';
// const BASE_URL = ' https://calm-deadly-kit.ngrok-free.app';
export const USER_LIST_URL = `${BASE_URL}/api/users/`;

export const CREATE_ADMIN = `${BASE_URL}/api/auth/registration/`;
export const CREATE_VENDOR = `${BASE_URL}/api/auth/registration/`;
export const CREATE_CUSTOMER = `${BASE_URL}/api/registration/`;

export const GET_ADMIN = `${BASE_URL}/api/admins/pk/`;
export const GET_VENDOR = `${BASE_URL}/api/vendors/pk/`;
export const GET_CUSTOMER = `${BASE_URL}/api/customers/pk/`;

export const UPDATE_ADMIN = `${BASE_URL}/api/admins/pk/`;
export const UPDATE_VENDOR = `${BASE_URL}/api/vendors/pk/`;
export const UPDATE_CUSTOMER = `${BASE_URL}/api/customers/pk/`;

export const DELETE_ADMIN = `${BASE_URL}/api/admins/pk/`;
export const DELETE_VENDOR = `${BASE_URL}/api/vendors/pk/`;
export const DELETE_CUSTOMER = `${BASE_URL}/api/customers/pk/`;

export const LOGIN_URL = `${BASE_URL}/api/login/`;
export const LOGOUT_URL = `${BASE_URL}/api/logout/`;
export const GET_USER = `${BASE_URL}/api/users/pk/`;
export const SUBSCRIBE_NEWSLETTER = `${BASE_URL}/api/newsletter/`;

export const CHANGE_PASSWORD_URL = `${BASE_URL}/api/password/change/`;

export const CREATE_PRODUCT_URL = `${BASE_URL}/api/item/`;
export const EDIT_PRODUCT_URL = `${BASE_URL}/api/item/`;
export const GET_PRODUCT_URL = `${BASE_URL}/api/item/`;

export const CREATE_COUPON_URL = `${BASE_URL}/api/coupon/`;
export const EDIT_COUPON_URL = `${BASE_URL}/api/coupon/`;
export const GET_COUPON_URL = `${BASE_URL}/api/coupon/`;

export const CREATE_COLLECTION_URL = `${BASE_URL}/api/collections/`;
export const EDIT_COLLECTION_URL = `${BASE_URL}/api/collections/`;
export const GET_COLLECTION_URL = `${BASE_URL}/api/collections/`

export const CREATE_ORDER_URL = `${BASE_URL}/api/orders/`;
export const EDIT_ORDER_URL = `${BASE_URL}/api/orders/`;
export const GET_ORDER_URL = `${BASE_URL}/api/orders/`

export const CREATE_WISHLIST_URL = `${BASE_URL}/api/password/change/`;
export const EDIT_WISHLIST_URL = `${BASE_URL}/api/password/change/`;
export const GET_WISHLIST_URL = `${BASE_URL}/api/password/change/`

export const CREATE_ORDER_CANCELLETION_URL = `${BASE_URL}/api/password/change/`;
export const EDIT_ORDER_CANCELLETION_URL = `${BASE_URL}/api/password/change/`;
export const GET_ORDER_CANCELLETION_URL = `${BASE_URL}/api/password/change/`


export const CREATE_ORDER_RETURN_URL = `${BASE_URL}/api/password/change/`;
export const EDIT_ORDER_RETURN_URL = `${BASE_URL}/api/password/change/`;
export const GET_ORDER_RETURN_URL = `${BASE_URL}/api/password/change/`

export const CREATE_ORDER_DOWNLOAD_URL = `${BASE_URL}/api/password/change/`;
export const EDIT_ORDER_DOWNLOAD_URL = `${BASE_URL}/api/password/change/`;
export const GET_ORDER_DOWNLOAD_URL = `${BASE_URL}/api/password/change/`


export const GET_DOCUMENT_TYPES_URL = `${BASE_URL}/document-types/`;
export const CREATE_DOCUMENT_TYPE_URL = `${BASE_URL}/document-types/`;

export const GET_PRINTING_REQUESTS_URL = `${BASE_URL}/printing-service-requests/`;
export const CREATE_PRINTING_REQUEST_URL = `${BASE_URL}/printing-service-requests/`;

export const GET_CANCELLATION_REQUESTS_URL = `${BASE_URL}/cancellation-requests/`;
export const CREATE_CANCELLATION_REQUEST_URL = `${BASE_URL}/cancellation-requests/`;

export const GET_RETURN_REQUESTS_URL = `${BASE_URL}/return-requests/`;
export const CREATE_RETURN_REQUEST_URL = `${BASE_URL}/return-requests/`;

export const GET_DOWNLOADS_URL = `${BASE_URL}/downloads/`;
export const CREATE_DOWNLOAD_URL = `${BASE_URL}/downloads/`;

export const CREATE_STRIPE_PAYMENT_INTENT_URL = `${BASE_URL}/payments/stripe/create-intent/`;
export const COMPLETE_STRIPE_PAYMENT_URL = `${BASE_URL}/payments/stripe/complete/`;
export const CREATE_MPESA_PAYMENT_INTENT_URL = `${BASE_URL}/payments/mpesa/create-intent/`;
export const MPESA_CALLBACK_URL = `${BASE_URL}/payments/mpesa/callback/`;
export const REFUND_PAYMENT_URL = `${BASE_URL}/payments/refund/`;
export const MPESA_B2C_RESULT_URL = `${BASE_URL}/payments/mpesa/result/`;
export const MPESA_B2C_TIMEOUT_URL = `${BASE_URL}/payments/mpesa/timeout/`;

export { BASE_URL };
