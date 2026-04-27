def obter_jornada_normal(turno):
    if turno == 'primeiro':
        return 8.8  # Ajustado
    else:
        return 7.92

def main():
    # ... (parte dos inputs)
    
    valor_total = calcular_horas_extras(horas_trabalhadas, salario_hora, turno, feriado)

    print(f"Valor total a receber: R$ {valor_total:.2f}")
    print(f"Turno: {turno}")
    
    if feriado:
        print("Dia de feriado - 100% adicional aplicado.")
    else:
        horas_normais = obter_jornada_normal(turno)
        if horas_trabalhadas > horas_normais:
            horas_extras = horas_trabalhadas - horas_normais
            print(f"Horas extras trabalhadas: {horas_extras:.2f}")
            print(f"Valor das horas extras: R$ {(horas_extras * salario_hora * 1.5):.2f}")
        else:
            print("Nenhuma hora extra.")