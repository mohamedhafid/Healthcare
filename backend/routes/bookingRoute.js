import express from "express";

import { getCheckOutSession } from "../controllers/bookingController.js";

const bookingRouter=express.Router();


bookingRouter.post('/checkout/:doctorId',getCheckOutSession);

export default bookingRouter;