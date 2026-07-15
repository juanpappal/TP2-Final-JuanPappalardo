import { saveAlert, saveSensor, getAllAlerts, getAllSensors, getSensorById } from '../daos/sensorDao.js';
import { buildSensorRecord, inferAlert, isValidNumber, isValidSensorId, isValidSensorType } from '../models/sensorModel.js';

export function registerReadingUseCase(reading) {
  const errors = [];

  if (!isValidSensorId(reading?.id)) {
    errors.push('id: debe tener exactamente 8 caracteres alfanuméricos');
  }

  if (!isValidSensorType(reading?.tipo)) {
    errors.push('tipo: debe ser TEMPERATURA, HUMEDAD o CO2');
  }

  if (!isValidNumber(reading?.valor)) {
    errors.push('valor: debe ser numérico');
  }

  if (typeof reading?.timestamp !== 'string' || reading.timestamp.trim() === '') {
    errors.push('timestamp: debe ser un string');
  }

  if (errors.length > 0) {
    const error = new Error('Datos inválidos');
    error.statusCode = 400;
    error.details = errors;
    throw error;
  }

  const numericValue = Number(reading.valor);
  const alerta = inferAlert(reading.tipo, numericValue);
  const record = buildSensorRecord({ ...reading, valor: numericValue, alerta });

  const existing = getSensorById(reading.id);
  if (existing) {
    Object.assign(existing, record);
    saveSensor(existing);
  } else {
    saveSensor(record);
  }

  if (alerta) {
    saveAlert({
      id: reading.id,
      tipo: reading.tipo,
      valor: numericValue,
      timestamp: reading.timestamp,
      alerta,
    });
  }

  return record;
}

export function listSensorsUseCase() {
  return getAllSensors();
}

export function listAlertsUseCase() {
  return getAllAlerts();
}
