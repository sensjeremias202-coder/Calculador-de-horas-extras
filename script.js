let dias = [];

document.getElementById('add-day-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = document.getElementById('data').value;
    const horasTrabalhadas = parseFloat(document.getElementById('horas-trabalhadas').value);
    const salarioHora = parseFloat(document.getElementById('salario-hora').value);

    if (!data || isNaN(horasTrabalhadas) || isNaN(salarioHora) || horasTrabalhadas < 0 || salarioHora < 0) {
        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }

    const dia = {
        data: data,
        horasTrabalhadas: horasTrabalhadas,
        salarioHora: salarioHora
    };

    dias.push(dia);
    atualizarTabela();
    atualizarTotais();

    // Limpar formulário
    document.getElementById('data').value = '';
    document.getElementById('horas-trabalhadas').value = '';
});

function atualizarTabela() {
    const tbody = document.getElementById('dias-body');
    tbody.innerHTML = '';

    dias.forEach((dia, index) => {
        const resultado = calcularHorasExtras(dia.horasTrabalhadas, dia.salarioHora);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatarData(dia.data)}</td>
            <td>${dia.horasTrabalhadas.toFixed(2)}</td>
            <td>${resultado.horasNormais.toFixed(2)}</td>
            <td>${resultado.horasExtras.toFixed(2)}</td>
            <td>${resultado.valorExtras.toFixed(2)}</td>
            <td><button class="delete-btn" onclick="removerDia(${index})">Remover</button></td>
        `;
        tbody.appendChild(row);
    });
}

function atualizarTotais() {
    if (dias.length === 0) {
        document.getElementById('totais').style.display = 'none';
        return;
    }

    let totalHorasNormais = 0;
    let totalHorasExtras = 0;
    let totalValorExtras = 0;
    let totalSalarioNormal = 0;

    dias.forEach(dia => {
        const resultado = calcularHorasExtras(dia.horasTrabalhadas, dia.salarioHora);
        totalHorasNormais += resultado.horasNormais;
        totalHorasExtras += resultado.horasExtras;
        totalValorExtras += resultado.valorExtras;
        totalSalarioNormal += resultado.horasNormais * dia.salarioHora;
    });

    const totalReceber = totalSalarioNormal + totalValorExtras;

    document.getElementById('total-horas-normais').textContent = `Total horas normais: ${totalHorasNormais.toFixed(2)}`;
    document.getElementById('total-horas-extras').textContent = `Total horas extras: ${totalHorasExtras.toFixed(2)}`;
    document.getElementById('total-valor-extras').textContent = `Total valor extras: R$ ${totalValorExtras.toFixed(2)}`;
    document.getElementById('total-salario-normal').textContent = `Total salário normal: R$ ${totalSalarioNormal.toFixed(2)}`;
    document.getElementById('total-receber').textContent = `Total a receber: R$ ${totalReceber.toFixed(2)}`;

    document.getElementById('totais').style.display = 'block';
}

function removerDia(index) {
    dias.splice(index, 1);
    atualizarTabela();
    atualizarTotais();
}

function calcularHorasExtras(horasTrabalhadas, salarioHora) {
    const horasNormaisPorDia = 8.0;

    if (horasTrabalhadas <= horasNormaisPorDia) {
        return {
            horasNormais: horasTrabalhadas,
            horasExtras: 0,
            valorExtras: 0
        };
    }

    const horasExtras = horasTrabalhadas - horasNormaisPorDia;
    let valorExtras = 0;

    if (horasExtras <= 2.0) {
        valorExtras = horasExtras * salarioHora * 1.5;
    } else {
        const valorPrimeiras = 2.0 * salarioHora * 1.5;
        const valorRestantes = (horasExtras - 2.0) * salarioHora * 2.0;
        valorExtras = valorPrimeiras + valorRestantes;
    }

    return {
        horasNormais: horasNormaisPorDia,
        horasExtras: horasExtras,
        valorExtras: valorExtras
    };
}

function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
}