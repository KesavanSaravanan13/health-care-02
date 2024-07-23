
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const token = () => {
        return !!localStorage.getItem('token');
    };
    
    return(
        token() ? <Outlet/> : <Navigate to={'/'}/>
    );
}

export default PrivateRoutes;