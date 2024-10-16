import { lazy } from 'react';

const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/Auth/Register'));
const VerifyOtp = lazy(() => import('../pages/auth/verify-otp'));
const ResetPassword = lazy(() => import('../pages/auth/resetPassword'));
const RoleSelection = lazy(() => import('../pages/auth/roleSelection'));
const NotFound = lazy(() => import('../pages/404'));
const VerifyEmail = lazy(() => import('../pages/auth/VerifyEmail'));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'));
const Home = lazy(() => import('../pages/Home'));
const routes = [
    
    {
        path: '/auth/login',
        element: <Login />
    },
    {
        path: '/auth/register',
        element: <Register />
    },
    {
        path: '/auth/verify-otp',
        element: <VerifyOtp />
    },
    {
        path: '/auth/reset-password',
        element: <ResetPassword />
    },
    {
        path: '/auth/role-selection',
        element: <RoleSelection />
    },
    {
        path: '/auth/verify-email/:token',
        element: <VerifyEmail />
    },
    {
        path: '/auth/forgot-password',
        element: <ForgotPassword />
    },
    {
        path: '/auth/reset-password/:token',
        element: <ResetPassword />
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound />
    },
];

export { routes };
