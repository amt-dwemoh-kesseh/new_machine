import express from 'express'
import { createUser } from '../controllers/user'

export const userRoute = express.Router()

userRoute.post('/api/adduser',createUser)