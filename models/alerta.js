class Alerta {
    constructor(id, tipo, valor, timestamp, alerta) {
        this.id = id;
        this.tipo = tipo;
        this.valor = valor;
        this.timestamp = timestamp;
        this.alerta = alerta;
    }
}

module.exports = Alerta;