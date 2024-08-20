import express from 'express';
import { getSingleUser,getAllUser,updateUser,deleteUser } from '../controllers/userController.js';
import { authorization,restrict } from '../middelwares/authorization.js';

const userControlRouter=express.Router();

// api endpoints
userControlRouter.get('/:id',authorization,restrict('patient'),getSingleUser);
userControlRouter.get('/',authorization,restrict('admin'),getAllUser);
userControlRouter.put('/:id',authorization,restrict('patient'),updateUser);
userControlRouter.delete('/:id',authorization,restrict('patient'),deleteUser);

export default userControlRouter;