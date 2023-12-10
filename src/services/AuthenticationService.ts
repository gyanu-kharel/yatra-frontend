import http from '../http-common'
import { LoginData, RegisterData } from '../types/Authentication'


const register = (data: RegisterData) => {
    return http.post<RegisterData>('/auth/register', data)
};

const login = (data: LoginData) => {
    return http.post<LoginData>('/auth/login', data)
};

const logout = () => {
    clearCookies();
}

const isAuthenticated = (): boolean => {
    var user = localStorage.getItem("appUser");
    if (user && user != null) {
        return true;
    }
    return false;
};

const clearCookies = () => {
    localStorage.removeItem("appUser");
};

const AuthenticationService = {
    register,
    login,
    logout,
    isAuthenticated,
}

export default AuthenticationService;