// const express = require('express');

import express from 'express'
import authRouter from './routers/authRouter.js'
import accountRouter from './routers/accountRouter.js'
import welcome from './welcome.js';
import handler from './middlewares/errorHandler.js';
import { ENVIRONMENT, PORT, HOST } from './config.js';
import logger from './middlewares/logger.js';
import cors from 'cors';

const app = express();

app.use(logger);
app.use(cors({}))

app.use(express.json());



app.get('/', welcome )
app.use('/auth', authRouter)

app.use('/account', accountRouter)

app.use(handler)


app.listen(PORT, () => {

    console.log(`Servidor Rodando no Ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST + ':' + PORT}`)

})


