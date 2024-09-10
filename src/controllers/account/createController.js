import { createAccount } from "../../models/accountModel.js"

const create = async (req, res, next) => {
    const account = req.body


    try {

        const result = await createAccount(account);

        if (!result) {
            return res.status(401).json({
                error: "Erro ao criar conta!"
            })
        }

        return res.json({
            success: "Conta criada com sucesso!",
            account: result
        })

    } catch (error) {
        next(error)

    }


}
export default create 