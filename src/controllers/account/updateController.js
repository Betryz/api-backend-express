import { updateAccount, accountValidateToUpdate } from "../../models/accountModel.js";

const update = async (req, res, next) => {

    const { id } = req.params

    


    try {
        const account = req.body

        account.id = +id



        const accountValidated = accountValidateToUpdate(account)

        console.log(accountValidated)

        if(!accountValidated.success){
            return res.status(401).json({
                error: "Erro ao modificar conta!",
                fieldErrors: accountValidated.error.flatten().fieldErrors
            })

        }


        const result = await updateAccount(accountValidated.data);

        if (!result) {
            return res.status(401).json({
                error: "Erro ao modificar conta!"
            })
        }

        return res.json({
            success: "Conta modificada com sucesso!",
            account: result
        })
    } catch (error) {
      

        if (error?.code === 'P2025')
            return res.status(404).json({
                error: `Conta com o id ${id}, não encontrado!`
            })
            next(error)

    }
}

export default update