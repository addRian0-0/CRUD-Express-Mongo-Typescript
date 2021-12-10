import { User } from "../models/User";

export const existeCorreo = async (correo: string) => {

    const exist = await User.findOne({ correo });
    if (exist) {
        throw new Error(`El correo: ${correo} ya esta registrado`);
    }

}

export const validarRol = async (rol: string) => {

    const roles = ['Administrador', 'Profesor', 'Alumno'];
    if(!roles.includes(rol)){
        throw new Error(`El rol: ${rol} no existe`);
    }

}

export const existeUserID = async(id: string) => {

    const exist = await User.findById(id);
    if(!exist){
        throw new Error(`El usuario con el ID: ${id} no existe`);
    }

}