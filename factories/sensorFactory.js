import { registerReadingUseCase, listAlertsUseCase, listSensorsUseCase } from '../usecases/sensorUseCases.js';

export function makeSensorControllerDependencies() {
  return {
    registerReading: registerReadingUseCase,
    listSensors: listSensorsUseCase,
    listAlerts: listAlertsUseCase,
  };
}
