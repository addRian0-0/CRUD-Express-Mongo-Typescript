import { Router } from "express";
import { check } from "express-validator";
import { deleteUsuario, getUsuario, getUsuarios, postUsuario } from "../controllers/user";
import { existeCorreo, existeUserID, validarRol } from "../helpers/validarUsuario";
import { validarDatos } from "../middlewares/validarDatos";

const userRouter = Router();

//Conseguir todos los usuarios
userRouter.get('/', getUsuarios);

//Conseguir un usuario por su id
userRouter.get('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUserID),
    validarDatos
], getUsuario);

//Agregar usuario
userRouter.post('/', [
    check('name', 'Campo obligatorio').notEmpty().isLength({ min: 4 }),
    check('correo', 'Formato de correo invalido').isEmail(),
    check('correo').custom(existeCorreo),
    check('rol').custom(validarRol),
    validarDatos
], postUsuario);

//Borrar un usuario por su id
userRouter.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUserID),
    validarDatos
], deleteUsuario);

export default userRouter;