import express from 'express';
import { getSingleDoctor,getAllDoctor,updateDoctor,deleteDoctor } from '../controllers/doctorController.js';
import { authorization,restrict } from '../middelwares/authorization.js';
const doctorControlRouter=express.Router();

// api endpoints
doctorControlRouter.get('/:id',authorization,restrict('doctor'),getSingleDoctor);
doctorControlRouter.get('/',authorization,restrict('admin'),getAllDoctor);
doctorControlRouter.put('/:id',authorization,restrict('doctor'),updateDoctor);
doctorControlRouter.delete('/:id',authorization,restrict('doctor'),deleteDoctor);

export default doctorControlRouter;