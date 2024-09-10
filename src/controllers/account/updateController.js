import { updateAccount } from "../../models/accountModel.js";

const update = async (req, res, next) => {

    const { id } = req.params

    


    try {
        const account = req.body

        account.id = +id


        const result = await updateAccount(account);

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