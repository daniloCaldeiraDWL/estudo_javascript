# Executando arquivos JS

Existem algumas formas, uma delas é: 

- Acesso via CMD:
1. Acesse a pasta via cd. Exemplo: 
    'cd C:\Users\RGLONGANA\Desktop\JavaScript'

2. Ao acessar a pasta, digite code + 'arquivo.js'. Exemplo: 
    'node hello_world.js'

- Instalando uma extenção no VSCode chamada **Code Runner**


- No consolde de um navegador, precione F12, digite o comando/código e precione enter. 

- Crie index.html com <script src="meu.js"></script>. Assim, teremos no console (apertando F12) os resultados do processamento. 


# Variáveis em JavaScript
As declarações de variáveis são feitas com três palavras-chave principais: var, let e const. 
- var → forma antiga (pré-ES6), evite usar em código novo.
- let → moderna, permite reatribuição (mudar o valor depois).
- const → moderna, não permite reatribuição (valor fixo), mas objetos/arrays dentro dela ainda podem ser modificados internamente.

## Outras observações:
- Como boa prática, em variáveis utiliza-se o padrão: camelCase
- Evitar ao máximo o uso de var em escopos de novos códigos. 
- Use const como padrão. let para onde realmente precisar reatribuir valor. 
- Em resumo: A principal diferença entre const e let em JavaScript está na possibilidade de reatribuição do valor da variável: let permite que você mude o valor da variável quantas vezes quiser depois da declaração (ex: let x = 10; x = 20;), enquanto const proíbe qualquer reatribuição posterior (tentar const y = 10; y = 20; gera erro "Assignment to constant variable").