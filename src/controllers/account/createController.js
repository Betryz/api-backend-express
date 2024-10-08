import { createAccount, accountValidateToCreate } from "../../models/accountModel.js"

const create = async (req, res, next) => {
    const account = req.body


    try {


        const accountValidated = accountValidateToCreate(account)

        console.log(accountValidated)

        if(!accountValidated.success){
            return res.status(401).json({
                error: "Erro ao criar conta!",
                fieldErrors: accountValidated.error.flatten().fieldErrors
            })

        }

        const result = await createAccount(accountValidated.data);

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