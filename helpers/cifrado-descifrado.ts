import bcryptjs from "bcryptjs";

export const cifrarPass = (password: string) => {

    const salt = bcryptjs.genSaltSync(15);
    return bcryptjs.hashSync(password, salt);

}