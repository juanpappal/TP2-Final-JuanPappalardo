import { makeSensorControllerDependencies } from '../factories/sensorFactory.js';

const { registerReading, listSensors, listAlerts } = makeSensorControllerDependencies();

export function createReadingController(req, res) {
  try {
    const sensor = registerReading(req.body);
    res.status(200).json({
      ...sensor,
      alerta: sensor.alerta ?? null,
    });
  } catch (error) {
    res.status(error.statusCode ?? 500).json({
      errorMsg: error.message,
      details: error.details ?? [],
    });
  }
}

export function listSensorsController(req, res) {
  res.status(200).json(listSensors());
}

export function listAlertsController(req, res) {
  res.status(200).json(listAlerts());
}
