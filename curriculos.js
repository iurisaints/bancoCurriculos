let curriculos = [
  {
    nome: "Joaozinho",
    curso: "Frontend",
    cidade: "São Leopoldo",
    link: "https://www.linkedin.com/jobs/view/3980879296/?alternateChannel=search&refId=wS4WPQStU4K5ptnvbsEQYQ%3D%3D&trackingId=3wte%2BNXFPrp9JllRXT2NRQ%3D%3D",
    githubLink: "iurisaints"
  },
  {
    nome: "Estágio em TI - Suporte Técnico",
    curso: "Dell Technologies",
    cidade: "São Leopoldo",
    link: "https://www.linkedin.com/jobs/view/3980879296/?alternateChannel=search&refId=wS4WPQStU4K5ptnvbsEQYQ%3D%3D&trackingId=3wte%2BNXFPrp9JllRXT2NRQ%3D%3D",
    githubLink: "mikaelazzarotto"
  },
  {
    nome: "Estágio em TI - Suporte Técnico",
    curso: "Dell Technologies",
    cidade: "São Leopoldo",
    link: "https://www.linkedin.com/jobs/view/3980879296/?alternateChannel=search&refId=wS4WPQStU4K5ptnvbsEQYQ%3D%3D&trackingId=3wte%2BNXFPrp9JllRXT2NRQ%3D%3D",
    githubLink: "iurisaints"
  },
  {
    nome: "Joaozinho",
    curso: "Frontend",
    cidade: "São Leopoldo",
    link: "https://www.linkedin.com/jobs/view/3980879296/?alternateChannel=search&refId=wS4WPQStU4K5ptnvbsEQYQ%3D%3D&trackingId=3wte%2BNXFPrp9JllRXT2NRQ%3D%3D",
    githubLink: "iurisaints"
  },
  {
    nome: "Estágio em TI - Suporte Técnico",
    curso: "Dell Technologies",
    cidade: "São Leopoldo",
    link: "https://www.linkedin.com/jobs/view/3980879296/?alternateChannel=search&refId=wS4WPQStU4K5ptnvbsEQYQ%3D%3D&trackingId=3wte%2BNXFPrp9JllRXT2NRQ%3D%3D",
    githubLink: "iurisaints"
  },
  {
    nome: "Estágio em TI - Suporte Técnico",
    curso: "Dell Technologies",
    cidade: "São Leopoldo",
    link: "https://www.linkedin.com/jobs/view/3980879296/?alternateChannel=search&refId=wS4WPQStU4K5ptnvbsEQYQ%3D%3D&trackingId=3wte%2BNXFPrp9JllRXT2NRQ%3D%3D",
    githubLink: "iurisaints"
  },
  {
    nome: "Estágio em TI - Suporte Técnico",
    curso: "Dell Technologies",
    cidade: "São Leopoldo",
    link: "https://www.linkedin.com/jobs/view/3980879296/?alternateChannel=search&refId=wS4WPQStU4K5ptnvbsEQYQ%3D%3D&trackingId=3wte%2BNXFPrp9JllRXT2NRQ%3D%3D",
    githubLink: "iurisaints"
  }
];

document.addEventListener('DOMContentLoaded', function () {
  loadCurriculos();
});

function loadCurriculos() {
  displayCurriculos(curriculos);
}

function displayCurriculos(data) {
  const curriculoContainer = document.getElementById('curriculoContainer');
  curriculoContainer.innerHTML = '';

  // Agrupa currículos em filas de 3
  for (let i = 0; i < data.length; i += 3) {
    const row = document.createElement('div');
    row.classList.add('curriculo-row');
    curriculoContainer.appendChild(row);

    for (let j = i; j < i + 3 && j < data.length; j++) {
      const curriculo = data[j];

      const curriculoItem = document.createElement('div');
      curriculoItem.classList.add('curriculo-item');

      const nomeElement = document.createElement('h3');
      nomeElement.textContent = curriculo.nome;

      const cursoElement = document.createElement('p');
      cursoElement.textContent = `Curso: ${curriculo.curso}`;

      const cidadeElement = document.createElement('p');
      cidadeElement.textContent = `Cidade: ${curriculo.cidade}`;

      const curriculoLink = document.createElement('p');
      const curriculoAnchor = document.createElement('a');
      curriculoAnchor.href = curriculo.link;
      curriculoAnchor.textContent = 'Link para o Currículo';
      curriculoAnchor.target = '_blank';  // Abre o link em uma nova aba
      curriculoLink.appendChild(curriculoAnchor);

      const githubCard = document.createElement('div');
      githubCard.classList.add('github-card');
      githubCard.setAttribute('data-github', curriculo.githubLink);
      githubCard.setAttribute('data-width', '350');
      githubCard.setAttribute('data-height', '150');
      githubCard.setAttribute('data-theme', 'default');

      curriculoItem.appendChild(nomeElement);
      curriculoItem.appendChild(cursoElement);
      curriculoItem.appendChild(cidadeElement);
      curriculoItem.appendChild(curriculoLink);
      curriculoItem.appendChild(githubCard);

      row.appendChild(curriculoItem);

      // Adiciona o script dinamicamente para que o GitHub Card seja renderizado corretamente
      const script = document.createElement('script');
      script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
      curriculoItem.appendChild(script);
    }
  }
}
