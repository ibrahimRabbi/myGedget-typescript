import express, { Request, Response } from 'express'
import {  postDataController } from "./controller";

export const routes = express.Router()

routes.post('/post-data', postDataController)


