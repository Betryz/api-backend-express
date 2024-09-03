import express from 'express'
import createController from '../controllers/account/createController.js'
import listController from '../controllers/account/listController.js'
import idController from '../controllers/account/getIdController.js'
import updateController from '../controllers/account/updateController.js'
import deleteController from '../controllers/account/deleteController.js'


const router = express.Router()

router.post('/', createController )

router.get('/list', listController)

router.get('/:id', idController)

router.put('/:id', updateController )

router.delete('/:id', deleteController)

export default router