import { signup } from "../../models/authModel.js"

const signupAccount = async (req, res, next) => {
    const user = req.body

    try {
        const result = await signup(user);

        if (!result) {
            return res.status(401).json({
                error: "Erro ao criar conta!"
            })
        }

        return res.json({
            success: "Conta criada com sucesso!",
            user: result
        })
    } catch (error) {

       next(error)


    }
}
export default signupAccount