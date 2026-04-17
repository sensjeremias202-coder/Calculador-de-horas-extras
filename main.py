#!/usr/bin/env python3
"""
Calculadora de Horas Extras
Calcula horas extras trabalhadas com base nas regras brasileiras.
"""

def calcular_horas_extras(horas_trabalhadas, salario_hora, feriado=False):
    """
    Calcula o valor das horas extras.

    Parâmetros:
    - horas_trabalhadas: total de horas trabalhadas no dia (float)
    - salario_hora: salário por hora (float)
    - feriado: se o dia é feriado (bool)

    Retorna:
    - valor_total: valor total a receber (float)
    """
    horas_normais = 8.88  # Jornada normal de 8,88 horas

    if feriado:
        # Em feriados, paga 100% adicional pelas horas trabalhadas
        return horas_trabalhadas * salario_hora * 2.0

    if horas_trabalhadas <= horas_normais:
        return horas_trabalhadas * salario_hora

    horas_extras = horas_trabalhadas - horas_normais
    # Horas extras sempre 50%, independente da quantidade
    valor_extras = horas_extras * salario_hora * 1.5
    return (horas_normais * salario_hora) + valor_extras

def main():
    print("Calculadora de Horas Extras")
    print("=" * 30)

    try:
        horas_trabalhadas = float(input("Digite o total de horas trabalhadas no dia: "))
        salario_hora = float(input("Digite o salário por hora: "))
        feriado_input = input("É feriado? (s/n): ").strip().lower()
        feriado = feriado_input == 's'

        if horas_trabalhadas < 0 or salario_hora < 0:
            print("Valores não podem ser negativos.")
            return

        valor_total = calcular_horas_extras(horas_trabalhadas, salario_hora, feriado)

        print(f"Valor total a receber: R$ {valor_total:.2f}")
        if feriado:
            print("Dia de feriado - 100% adicional aplicado.")
        else:
            horas_normais = 8.88
            if horas_trabalhadas > horas_normais:
                horas_extras = horas_trabalhadas - horas_normais
                print(f"Horas extras trabalhadas: {horas_extras:.2f}")
                print(f"Valor das horas extras: R$ {(horas_extras * salario_hora * 1.5):.2f}")
            else:
                print("Nenhuma hora extra.")

    except ValueError:
        print("Por favor, digite valores numéricos válidos.")

if __name__ == "__main__":
    main()