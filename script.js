// ... seu código inicial (variável dias)

function obterJornadaNormal(turno) {
    if (turno === 'primeiro') {
        // 48 minutos / 60 = 0.8. Portanto, 8h 48min = 8.8
        return 8.8; 
    } else {
        return 7.92; 
    }
}

// ... resto do seu código (event listeners e tabelas permanecem iguais)

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