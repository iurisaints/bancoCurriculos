# Currículos com GitHub Cards

Este projeto exibe uma lista de currículos com informações básicas e cartões do GitHub para cada currículo. Os dados são exibidos em um layout responsivo, com até três currículos por linha. Os cartões do GitHub são renderizados dinamicamente para cada currículo usando o widget do GitHub.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização da página e layout responsivo.
- **JavaScript**: Manipulação dinâmica dos dados e renderização dos cartões do GitHub.
- **GitHub Cards Widget**: Exibe os cartões do GitHub.

## Instalação e Execução

Para executar o projeto localmente, siga estes passos:

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/iurisaints/bancoCurriculos.git
   cd bancoCurriculos
   ```

2. **Abra o Arquivo HTML**

   Abra o arquivo `index.html` em um navegador web para visualizar o projeto.

## Estrutura dos Arquivos

- `index.html`: Página principal do projeto.
- `styles.css`: Arquivo de estilo para a página.
- `script.js`: Código JavaScript para manipulação de dados e renderização.
- `README.md`: Este arquivo de documentação.

## Exemplo de Dados

Os currículos são definidos em um array de objetos JavaScript. Cada objeto contém:

- `nome`: Nome do candidato ou título do currículo.
- `curso`: Curso ou empresa associada.
- `cidade`: Localização do candidato.
- `link`: Link para o currículo ou vaga.
- `githubLink`: Nome de usuário do GitHub para exibir o cartão do GitHub.

Exemplo:

```javascript
let curriculos = [
  {
    nome: "Joaozinho",
    curso: "Frontend",
    cidade: "São Leopoldo",
    link: "https://www.linkedin.com/jobs/view/3980879296/?alternateChannel=search&refId=wS4WPQStU4K5ptnvbsEQYQ%3D%3D&trackingId=3wte%2BNXFPrp9JllRXT2NRQ%3D%3D",
    githubLink: "iurisaints"
  }
];
```

## Layout e Responsividade

O layout é baseado em um sistema de grades que exibe até três currículos por linha. Em telas menores, o layout se ajusta automaticamente para exibir dois currículos por linha e, em telas muito pequenas, um currículo por linha.

## Instruções para Desenvolvimento

1. **Adicionar Novos Currículos**

   Adicione novos objetos ao array `curriculos` no arquivo `script.js`.

2. **Customizar Estilos**

   Modifique o arquivo `styles.css` para ajustar a aparência e o layout conforme necessário.

3. **Atualizar Widget do GitHub**

   Caso o widget do GitHub seja atualizado, verifique a documentação oficial e atualize o link do script se necessário.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork do repositório e enviar um pull request com suas melhorias.
