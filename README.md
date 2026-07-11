
# Moto Saldo App

## Visão Geral
Aplicação web para gerenciamento de lucros, despesas, distâncias e horas trabalhadas por motoboys autônomos, centralizando informações de múltiplas plataformas (Uber, 99, iFood, etc) em um só lugar.

## Objetivo
Facilitar o controle financeiro e operacional do motoboy, permitindo análise detalhada de ganhos, produtividade e tomada de decisão baseada em dados.

## Tecnologias Utilizadas
- **Frontend:** React 18, Vite, React Router, React Icons
- **Backend:** Express.js (API REST, não incluso neste repositório ver em [ver em](https://github.com/huanfs/moto-saldo-api))
- **Banco de Dados:** PostgreSQL
- **Outros:** Context API, CSS Modules

## Arquitetura
- Estrutura modular com separação clara entre rotas, componentes, serviços e utilitários
- Gerenciamento global de estado via Context API
- Comunicação com backend via fetch/REST
- Organização de assets e estilos por domínio

## Funcionalidades
- Cadastro e login de usuários
- Seleção de plataformas de trabalho
- Registro e acompanhamento de ganhos, distâncias e horas
- Estatísticas mensais, semanais e diárias
- Geração de relatórios detalhados (PDF)
- Recuperação de conta (em desenvolvimento)

## Como Executar Localmente
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente (`.env`), incluindo a URL da API backend
4. Inicie o frontend: `npm run dev`
5. Certifique-se de que o backend Express e o banco PostgreSQL estejam rodando

## Decisões Técnicas
- Vite para build rápido e DX moderna
- Context API para simplicidade no gerenciamento de estado
- CSS Modules para isolamento de estilos
- Estrutura de aliases para imports limpos
- Separação de responsabilidades entre frontend e backend

## Possíveis Melhorias
- Implementar testes automatizados (unitários e integração)
- Melhorar cobertura de autenticação e segurança
- Adicionar PWA e suporte offline
- Internacionalização (i18n)
- Dashboard analítico avançado
- Integração direta com APIs das plataformas de entrega

---




