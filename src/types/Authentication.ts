export type LoginData = {
    email: string,
    password: string
}


export type RegisterData = {
    fullName: string,
    email: string,
    password: string
}

export type AuthenticationResponse = {
    id: string,
    name: string,
    email: string,
    phone: string,
    token: string
}

export type UserInfo = {
    id: string,
    name: string,
    email: string,
    phone: string,
    token: string
}