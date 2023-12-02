import AuthenticationService from '../services/AuthenticationService'
import { Navigate } from 'react-router-dom';


type PrivateRouterProps = {
    children : React.ReactNode
}

const PrivateRouter = ({children}: PrivateRouterProps) => {
    const isLoggedIn = AuthenticationService.isAuthenticated();

    return(
        <>
            {isLoggedIn
                ? children
                : <Navigate to={'/auth/login'} />
            }
        </>
    );

}

export default PrivateRouter;