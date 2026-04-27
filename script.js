let dias = [];

function obterJornadaNormal(turno) {
    if (turno === 'primeiro') {
        return 8.8; // Ajustado de 8.88 para 8.8 (8h 48min)
    } else {
        return 7.92;
    }
}

// Mantendo sua função de cálculo intacta com o novo valor
function calcularHorasExtras(horasTrabalhadas, salarioHora, turno, feriado) {
    const horasNormaisPorDia = obterJornadaNormal(turno);

    if (feriado) {
        const valorTotal = horasTrabalhadas * salarioHora * 2;
        return {
            horasNormais: 0,
            horasExtras: horasTrabalhadas,
            valorExtras: valorTotal,
            totalReceber: valorTotal
        };
    }

    if (horasTrabalhadas <= horasNormaisPorDia) {
        return {
            horasNormais: horasTrabalhadas,
            horasExtras: 0,
            valorExtras: 0,
            totalReceber: horasTrabalhadas * salarioHora
        };
    }

    const horasExtras = horasTrabalhadas - horasNormaisPorDia;
    const valorExtras = horasExtras * salarioHora * 1.5;
    const totalReceber = (horasNormaisPorDia * salarioHora) + valorExtras;

    return {
        horasNormais: horasNormaisPorDia,
        horasExtras: horasExtras,
        valorExtras: valorExtras,
        totalReceber: totalReceber
    };
}

// A função de atualizar tabela usa o retorno acima para preencher o seu HTML
function atualizarTabela() {
    const tbody = document.getElementById('dias-body');
    tbody.innerHTML = '';

    dias.forEach((dia, index) => {
        const resultado = calcularHorasExtras(dia.horasTrabalhadas, dia.salarioHora, dia.turno, dia.feriado);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatarData(dia.data)}</td>
            <td>${dia.horasTrabalhadas.toFixed(2)}</td>
            <td>${dia.turno === 'primeiro' ? '1º' : '2º'}</td>
            <td>${dia.feriado ? 'Sim' : 'Não'}</td>
            <td>${resultado.horasNormais.toFixed(2)}</td>
            <td>${resultado.horasExtras.toFixed(2)}</td>
            <td>R$ ${resultado.valorExtras.toFixed(2)}</td>
            <td>R$ ${resultado.totalReceber.toFixed(2)}</td>
            <td><button class="delete-btn" onclick="removerDia(${index})">Remover</button></td>
        `;
        tbody.appendChild(row);
    });
}