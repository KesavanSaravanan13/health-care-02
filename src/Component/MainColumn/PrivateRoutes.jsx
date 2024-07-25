
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const token = () => {
        return !!sessionStorage.getItem('token');
    };

    return (
        token() ? <Outlet /> : <Navigate to={'/'} />
    );
}

export const LoginPrivateRoutes = () => {
    const token = () => {
        return !!sessionStorage.getItem('token');
    };

    return (
        !token() ? <Outlet /> : <Navigate to={'/profile'} />
    );
}

export default PrivateRoutes;