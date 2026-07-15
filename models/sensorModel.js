export function buildSensorRecord(sensor) {
  return {
    id: sensor.id,
    tipo: sensor.tipo,
    valor: sensor.valor,
    timestamp: sensor.timestamp,
    alerta: sensor.alerta ?? null,
  };
}

export function isValidSensorId(id) {
  return typeof id === 'string' && /^[A-Za-z0-9]{8}$/.test(id);
}

export function isValidSensorType(tipo) {
  return ['TEMPERATURA', 'HUMEDAD', 'CO2'].includes(tipo);
}

export function isValidNumber(value) {
  if (typeof value === 'number') {
    return Number.isFinite(value);
  }

  if (typeof value === 'string') {
    const parsed = Number(value);
    return Number.isFinite(parsed);
  }

  return false;
}

export function inferAlert(tipo, valor) {
  if (tipo === 'TEMPERATURA' && valor > 35) {
    return 'TEMPERATURA alta';
  }

  if (tipo === 'HUMEDAD' && valor < 20) {
    return 'HUMEDAD baja';
  }

  if (tipo === 'CO2' && valor > 1000) {
    return 'CO2 alto';
  }

  return null;
}
