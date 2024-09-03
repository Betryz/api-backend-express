import { createAccount } from "../../models/accountModel.js"

const create = (req, res) => {
    const {service, username, logo_image, pass, user_id} = req.body

    const account = createAccount( service, username, logo_image, pass, user_id); 







    res.json({
        message: "Rota de POST Account"
    })
}
export default create 