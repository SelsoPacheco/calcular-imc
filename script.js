document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso && altura) {
        const imc = peso / (altura * altura);
        const categoria = calcularCategoria(imc);

        document.getElementById('imcValue').innerText = `IMC: ${imc.toFixed(2)}`;
        document.getElementById('categoria').innerText = categoria;
        document.getElementById('resultado').style.display = 'block';

        // Atualizar gráfico
        atualizarGrafico(imc);

    } else {
        alert("Por favor, preencha os campos corretamente.");
    }
});

function calcularCategoria(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

// Função para atualizar o gráfico
function atualizarGrafico(imc) {
    const ctx = document.getElementById('imcChart').getContext('2d');
    const imcChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['IMC'],
            datasets: [{
                label: 'Seu IMC',
                data: [imc],
                backgroundColor: ['#007bff'],
                borderColor: ['#0056b3'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 40
                }
            },
            responsive: true
        }
    });
}
