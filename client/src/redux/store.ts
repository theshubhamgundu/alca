import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/user.api";
import { productApi } from "./api/product.api";
import { orderApi } from "./api/order.api";
import userReducer from "./reducers/user.reducer";
import cartReducer from "./reducers/cart.reducer";
import adminBusinessReducer from "./reducers/adminBusiness.reducer";
import { couponApi } from "./api/coupon.api";
import { paymentApi } from "./api/payment.api";
import { statsApi } from "./api/stats.api";
import { adminApi } from "./api/admin.api";
import { razorpayApi } from "./api/razorpay.api";
import { businessApi } from "./api/business.api";
import { enquiryApi } from "./api/enquiry.api";
import { bookingApi } from "./api/booking.api";
import { pageSectionApi } from "./api/pageSection.api";
import { mediaLibraryApi } from "./api/mediaLibrary.api";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        adminBusiness: adminBusinessReducer,
        [userApi.reducerPath]: userApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [couponApi.reducerPath]: couponApi.reducer,
        [paymentApi.reducerPath]: paymentApi.reducer,
        [statsApi.reducerPath]: statsApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [razorpayApi.reducerPath]: razorpayApi.reducer,
        [businessApi.reducerPath]: businessApi.reducer,
        [enquiryApi.reducerPath]: enquiryApi.reducer,
        [bookingApi.reducerPath]: bookingApi.reducer,
        [pageSectionApi.reducerPath]: pageSectionApi.reducer,
        [mediaLibraryApi.reducerPath]: mediaLibraryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            productApi.middleware,
            orderApi.middleware,
            couponApi.middleware,
            paymentApi.middleware,
            statsApi.middleware,
            adminApi.middleware,
            razorpayApi.middleware,
            businessApi.middleware,
            enquiryApi.middleware,
            bookingApi.middleware,
            pageSectionApi.middleware,
            mediaLibraryApi.middleware
        )
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


