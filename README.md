documentar cada componente e rota, ou criando arquivos readme 
separados para cada componente ou inserindo informações em linhas 
comentadas ao final do componente

**melhorar a soma dos valores de dinheiro**

*adicionar a opção de colocar como recebido em mãos e no app*

***adicionar a pasta utils para separas as lógicas de fetch e futuramente usar axios***


IMPORTANTE, eu estou documentando e refatorando o componente, AddValues
na linha 108 eu marquei um trecho de código para lembrar que devo criar um compopnente para
exibir o sucesso ou a falha das operações para o client

config01 na linha 17 renderizar o nome de usuário

DENTRO DE CONFIG 02 preciso implementar funções para transformar os valores
no formato de dinheiro e de horas

em config 03 preciso melhorar o fetch para que retorne mensagens de sucesso ou falha
ao front end, para isto, devo tambem alterar a funcionalidade na api para que envie
os estatus da solicitação ao front end

na rota Register na linha 59 remover o then e subistituir por versão moderna do async await