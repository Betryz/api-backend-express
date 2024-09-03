import { createAccount } from "../../models/accountModel.js"

const create = async  (req, res) => {
    const account = req.body

    const result = await createAccount( account); 

    if(!result){
        return res.status(401).json({
            error: "Erro ao criar conta!"
        })
    }

   return res.json({
        success: "Conta criada com sucesso!",
        account: result
    })
}
export default create 