#!/usr/bin/env python3
"""
Calculadora de Horas Extras
Calcula horas extras trabalhadas com base nas regras brasileiras.
"""

def calcular_horas_extras(horas_trabalhadas, salario_hora):
    """
    Calcula o valor das horas extras.

    Parâmetros:
    - horas_trabalhadas: total de horas trabalhadas no dia (float)
    - salario_hora: salário por hora (float)

    Retorna:
    - valor_horas_extras: valor total das horas extras (float)
    """
    horas_normais = 8.0  # Jornada normal de 8 horas

    if horas_trabalhadas <= horas_normais:
        return 0.0

    horas_extras = horas_trabalhadas - horas_normais

    # Primeiras 2 horas extras: 50% a mais
    if horas_extras <= 2.0:
        valor = horas_extras * salario_hora * 1.5
    else:
        # Primeiras 2 horas: 50%
        valor_primeiras = 2.0 * salario_hora * 1.5
        # Restantes: 100%
        valor_restantes = (horas_extras - 2.0) * salario_hora * 2.0
        valor = valor_primeiras + valor_restantes

    return valor

def main():
    print("Calculadora de Horas Extras")
    print("=" * 30)

    try:
        horas_trabalhadas = float(input("Digite o total de horas trabalhadas no dia: "))
        salario_hora = float(input("Digite o salário por hora: "))

        if horas_trabalhadas < 0 or salario_hora < 0:
            print("Valores não podem ser negativos.")
            return

        valor_extras = calcular_horas_extras(horas_trabalhadas, salario_hora)

        print(f"Valor das horas extras: R$ {valor_extras:.2f}")
        salario_normal = 8 * salario_hora
        print(f"Total a receber (salário + extras): R$ {salario_normal + valor_extras:.2f}")

    except ValueError:
        print("Por favor, digite valores numéricos válidos.")

if __name__ == "__main__":
    main()