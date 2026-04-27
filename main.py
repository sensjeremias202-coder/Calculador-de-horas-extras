# ... imports e docstrings

def obter_jornada_normal(turno):
    if turno == 'primeiro':
        return 8.8  # Ajustado para 8.8 (8h 48min)
    else:
        return 7.92

def calcular_horas_extras(horas_trabalhadas, salario_hora, turno, feriado=False):
    horas_normais = obter_jornada_normal(turno)

    if feriado:
        return horas_trabalhadas * salario_hora * 2.0

    if horas_trabalhadas <= horas_normais:
        return horas_trabalhadas * salario_hora

    horas_extras = horas_trabalhadas - horas_normais
    valor_extras = horas_extras * salario_hora * 1.5
    return (horas_normais * salario_hora) + valor_extras

def main():
    # ... (código de input igual ao seu)
    
    # Dentro do bloco try, a lógica de exibição usará o novo valor:
    horas_normais = obter_jornada_normal(turno)
    if horas_trabalhadas > horas_normais:
        horas_extras = horas_trabalhadas - horas_normais
        # ... resto do seu print