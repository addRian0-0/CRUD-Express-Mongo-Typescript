import { Request, Response } from "express";
import { User } from "../models/User";
import { cifrarPass } from "../helpers/cifrado-descifrado";

export const getUsuarios = async (req: Request, res: Response) => {

    const [total, usuarios] = await Promise.all([
        User.countDocuments(),
        User.find()
    ])

    res.json({
        total,
        usuarios
    });

}

export const getUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const usuario = await User.findById(id);

    res.json({
        usuario
    })

}

export const postUsuario = async (req: Request, res: Response) => {

    const { name, correo, password, rol = 'Empleado' } = req.body;

    //Cifrar la contrasena
    const pass = cifrarPass(password);

    const user = new User({
        name,
        correo,
        password: pass,
        rol
    });

    await user.save();

    res.json({
        msg: 'Usuario creado',
        user
    })

}

export const deleteUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.json({
        msg: 'Usuario eliminado'
    })

}