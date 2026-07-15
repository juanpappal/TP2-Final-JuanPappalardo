class Sensor {
    constructor(id, tipo, valor, timestamp) {
        this.id = id;
        this.tipo = tipo;
        this.valor = valor;
        this.timestamp = timestamp;
    }

    actualizarLectura(tipo, valor, timestamp) {
        this.tipo = tipo;
        this.valor = valor;
        this.timestamp = timestamp;
    }
}

module.exports = Sensor;