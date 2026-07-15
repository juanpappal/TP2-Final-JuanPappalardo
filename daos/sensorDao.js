const sensors = new Map();
const alerts = [];

export function saveSensor(sensor) {
  sensors.set(sensor.id, sensor);
  return sensor;
}

export function getSensorById(id) {
  return sensors.get(id) ?? null;
}

export function getAllSensors() {
  return Array.from(sensors.values()).map(sensor => ({ ...sensor }));
}

export function saveAlert(alert) {
  alerts.push(alert);
  return alert;
}

export function getAllAlerts() {
  return alerts.map(alert => ({ ...alert }));
}
