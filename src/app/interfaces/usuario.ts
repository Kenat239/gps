export interface Usuario {
    _id: string;
    nombre: string;
    apellidoP: string;
    apellidoM: string;
    email: string;
    password: string;
    role: string;
    status: string;
    img?: string;
    uIngreso?: string;
    socketid?: string;
}
