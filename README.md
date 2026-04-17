# Calculador-de-horas-extras

Uma calculadora para calcular horas trabalhadas e separar as horas extras, acumulando múltiplos dias e calculando totais no final, baseada nas regras trabalhistas brasileiras, com interface web em HTML, CSS e JavaScript.

## Funcionalidades

- Adicione múltiplos dias trabalhados com data e horas trabalhadas
- Calcula automaticamente horas normais (8h/dia) e horas extras
- Mostra tabela com detalhes por dia
- Calcula totais: horas normais, horas extras, valores
- Regras de cálculo:
  - Jornada normal de 8 horas por dia
  - Primeiras 2 horas extras: 50% a mais
  - Horas extras acima de 2 horas: 100% a mais
- Interface web responsiva e fácil de usar

## Como usar

1. Abra o arquivo `index.html` em um navegador web.
2. Digite o salário por hora (fixo para todos os dias).
3. Adicione dias: selecione a data e digite as horas trabalhadas, clique em "Adicionar Dia".
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
- Dia 1: 10 horas → 8 normais, 2 extras (R$ 45,00)
- Dia 2: 9 horas → 8 normais, 1 extra (R$ 22,50)
- Totais: 16 normais, 3 extras, R$ 67,50 extras, R$ 240,00 normal, R$ 307,50 total

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, etc.)