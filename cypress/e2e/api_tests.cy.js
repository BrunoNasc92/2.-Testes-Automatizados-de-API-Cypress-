describe('Testes de API com Cypress', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com';

  it('GET /posts/1 - Deve retornar o post com ID 1', () => {
    cy.request(`${apiUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
    });
  });

  it('POST /posts - Deve criar um novo post', () => {
    cy.request('POST', `${apiUrl}/posts`, {
      title: 'Novo Post',
      body: 'Conteúdo do novo post',
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });

  it('PUT /posts/1 - Deve atualizar o post com ID 1', () => {
    cy.request('PUT', `${apiUrl}/posts/1`, {
      id: 1,
      title: 'Post Atualizado',
      body: 'Conteúdo atualizado',
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'Post Atualizado');
    });
  });

  it('DELETE /posts/1 - Deve deletar o post com ID 1', () => {
    cy.request('DELETE', `${apiUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
