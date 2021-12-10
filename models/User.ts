import { Document, model, Schema } from "mongoose";

/*  IUser se define como interfaz para especificar los tipos de entrada 
por parte del usuario */
export interface IUser {
    name: string;
    correo: string;
    password: string;
    rol: string;
}

/* UserDocument sera los tipos de datos despues de ser creado el documento como 
las propiedades que genera 'timestamp' */
interface UserDocument extends Document {
    name: string;
    correo: string;
    password: string;
    rol: string;
    createAt: string;
    updateAt: string;
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        default: 'Alumno',
        enum: ['Administrador', 'Profesor']
    }
}, {
    timestamps: true
})

export const User = model<UserDocument>('User', UserSchema);