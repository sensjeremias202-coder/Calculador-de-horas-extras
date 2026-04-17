# Calculador-de-horas-extras

Uma calculadora para calcular horas trabalhadas e separar as horas extras, acumulando múltiplos dias e calculando totais no final, baseada em regras específicas, com interface web em HTML, CSS e JavaScript.

## Funcionalidades

- Adicione múltiplos dias trabalhados com data, horas trabalhadas e se é feriado
- Calcula automaticamente horas normais (8,88h/dia) e horas extras
- Mostra tabela com detalhes por dia
- Calcula totais: horas normais, horas extras, valores
- Regras de cálculo:
  - Jornada normal de 8,88 horas por dia
  - Horas extras sempre 50% a mais, independente da quantidade
  - Em feriados: paga 100% adicional pelas horas trabalhadas
  - Jornada mensal: 220 horas
- Interface web responsiva e fácil de usar

## Como usar

1. Abra o arquivo `index.html` em um navegador web.
2. Digite o salário por hora (fixo para todos os dias).
3. Adicione dias: selecione a data, digite as horas trabalhadas, marque se é feriado, clique em "Adicionar Dia".
4. A tabela será atualizada automaticamente com os cálculos por dia.
5. Veja os totais no final.

## Arquivos

- `index.html`: Página principal da aplicação
- `styles.css`: Estilos CSS para a interface
- `script.js`: Lógica JavaScript para os cálculos e gerenciamento de dias
- `main.py`: Versão original em Python (CLI)
- `requirements.txt`: Dependências (nenhuma)

## Exemplo

Para um salário de R$ 15,00/hora:
- Dia normal: 10 horas → 8,88 normais, 1,12 extras (R$ 25,20)
- Dia feriado: 8,88 horas → R$ 266,40 (100% adicional)
- Totais: conforme adicionado

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, etc.)