class Caminhao {
    constructor(placa, modelo, km) {
        this.placa = placa.toUpperCase();
        this.modelo = modelo;
        this.km = parseFloat(km);
    }

    // Método para definir se precisa de manutenção
    avaliarManutencao() {
        return this.km >= 10000 ? "URGENTE" : "REGULAR";
    }

    // Método para construir o layout do card
    gerarCard() {
        const status = this.avaliarManutencao();
        const classeCard = status === "URGENTE" ? "card urgente" : "card";
        const classeBadge = status === "URGENTE" ? "status-badge badge-urgente" : "status-badge badge-ok";

        return `
            <div class="${classeCard}">
                <h3>Placa: ${this.placa}</h3>
                <p><strong>Modelo:</strong> ${this.modelo}</p>
                <p><strong>Rodagem:</strong> ${this.km.toLocaleString('pt-BR')} km</p>
                <span class="${classeBadge}">Status: ${status}</span>
            </div>
        `;
    }
}

// Controle do formulário e injeção no HTML
const formFrota = document.getElementById('form-frota');
const listaCaminhoes = document.getElementById('lista-caminhoes');

formFrota.addEventListener('submit', (e) => {
    e.preventDefault();

    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const km = document.getElementById('km').value;

    const novoCaminhao = new Caminhao(placa, modelo, km);
    listaCaminhoes.innerHTML += novoCaminhao.gerarCard();

    formFrota.reset();
    document.getElementById('placa').focus();
});