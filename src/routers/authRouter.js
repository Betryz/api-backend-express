import express from 'express'
import signupController from '../controllers/auth/signupController.js';
import loginController from '../controllers/auth/loginController.js';
import logoutController from '../controllers/auth/logoutController.js';
import listAuth from '../controllers/auth/listController.js';

const router = express.Router();

router.post('/signup' , signupController)

router.get('/' , listAuth)

router.post('/login', loginController) 

router.post('/logout', logoutController )

export default router
