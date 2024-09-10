import { getIdAccount } from "../../models/accountModel.js"

const id = async (req, res, next) => {
    
    try {
        const { id } = req.params
        const account = await getIdAccount(+id)


        if (!account)

            return res.status(404).json({
                error: `Conta com o id ${id}, não encontrado!`
            })



        return res.json({
            success: "Conta achada com sucesso",
            account


        })

    } catch (error) {
        next(error)

    }
}

export default id