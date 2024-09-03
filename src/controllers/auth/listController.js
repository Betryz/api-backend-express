import { listAuth } from "../../models/authModel.js" 

const list = async (req, res) => {

    const user = await listAuth()
    
    
   return res.json({
        message: "Contas listadas com sucesso!",
        user
    })
}

export default list