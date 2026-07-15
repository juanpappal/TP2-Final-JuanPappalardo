import express from 'express';
import { createReadingController, listAlertsController, listSensorsController } from '../controllers/sensorController.js';

const router = express.Router();

router.get('/sensores', listSensorsController);
router.post('/lecturas', createReadingController);
router.get('/alertas', listAlertsController);

export default router;
