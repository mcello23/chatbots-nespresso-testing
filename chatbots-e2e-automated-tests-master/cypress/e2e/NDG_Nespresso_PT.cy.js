describe('Visit Nespresso PT page', function() {
  // Run this before each test case
  beforeEach(function() {
    // Handle uncaught exceptions
    cy.on("uncaught:exception", (e, runnable) => {
      console.log("error", e);
      console.log("runnable", runnable);
      return false;
    });

    // Visits the page and click accept button
    cy.visit('https://www.dolce-gusto.pt/');
    cy.get('#onetrust-accept-btn-handler').click();
  });

  // Test case to verify the title of the webpage 
  it('Verifies the title of the Webpage', function() {
    it('Verifies the title of the Webpage', function() {
      cy.title().should('be.equal', 'Máquinas de Café em Cápsulas  - NESCAFÉ® Dolce Gusto®', { timeout: 10000 });
      cy.wait(3000);
    });
  });
  it('Opens the chatbot window and fills the input fields', function() {
    cy.get('button.webchat-toggle-button.cognigy-webchat-1970mn3').click();
    cy.get('[placeholder="Primeiro nome"]').type('Mister', {delay: 100});
    cy.get('[placeholder="Sobrenome"]').type('Tester', {delay: 100});
    cy.get('[aria-label="Declaro que li e aceito a [polítca de privacidade da Nestlé](https://www.dolce-gusto.pt/politica-privacidade)"]').click();
    cy.get('[title="Vamos começar?"]').click();
    cy.contains('Como posso ajudar (ainda estou a aprender, opte por frases curtas e diretas)?').should('be.visible')
    cy.wait(2000);
  });
  it('Opens the chatbot window and I click the first option', function() {
    cy.get('button.webchat-toggle-button.cognigy-webchat-1970mn3').click();
    cy.get('[placeholder="Primeiro nome"]').type('Mister', {delay: 100});
    cy.get('[placeholder="Sobrenome"]').type('Tester', {delay: 100});
    cy.get('[aria-label="Declaro que li e aceito a [polítca de privacidade da Nestlé](https://www.dolce-gusto.pt/politica-privacidade)"]').click();
    cy.get('[title="Vamos começar?"]').click();
    cy.wait(3000).get('[aria-label="Item 1 of 7: Encomendas e Entregas"]').click();
    cy.contains('Quer saber sobre a entrega de um artigo PREMIO ou de uma encomenda da LOJA ONLINE?').should('be.visible')
    cy.wait(2000);
  });
  it('Opens the chatbot window and I click the second option', function() {
    cy.get('button.webchat-toggle-button.cognigy-webchat-1970mn3').click();
    cy.get('[placeholder="Primeiro nome"]').type('Mister', {delay: 100});
    cy.get('[placeholder="Sobrenome"]').type('Tester', {delay: 100});
    cy.get('[aria-label="Declaro que li e aceito a [polítca de privacidade da Nestlé](https://www.dolce-gusto.pt/politica-privacidade)"]').click();
    cy.get('[title="Vamos começar?"]').click();
    cy.wait(3000).get('[aria-label="Item 2 of 7: Programa PREMIO"]').click();
    cy.contains('O Programa PREMIO é feito a pensar em si! Cada embalagem que adquirir dá pontos que pode acumular e trocar por ofertas!').should('be.visible')
    cy.wait(2000);
  });
    it('Opens the chatbot window and I click the third option', function() {
    cy.get('button.webchat-toggle-button.cognigy-webchat-1970mn3').click();
    cy.get('[placeholder="Primeiro nome"]').type('Mister', {delay: 100});
    cy.get('[placeholder="Sobrenome"]').type('Tester', {delay: 100});
    cy.get('[aria-label="Declaro que li e aceito a [polítca de privacidade da Nestlé](https://www.dolce-gusto.pt/politica-privacidade)"]').click();
    cy.get('[title="Vamos começar?"]').click();
    cy.wait(3000).get('[aria-label="Item 3 of 7: Promoções e Ofertas"]').click();
    cy.contains('Descubra as nossas campanhas para cápsulas e máquinas').should('be.visible')
    cy.wait(2000);
  });
    it('Opens the chatbot window and I click the fourth option', function() {
    cy.get('button.webchat-toggle-button.cognigy-webchat-1970mn3').click();
    cy.get('[placeholder="Primeiro nome"]').type('Mister', {delay: 100});
    cy.get('[placeholder="Sobrenome"]').type('Tester', {delay: 100});
    cy.get('[aria-label="Declaro que li e aceito a [polítca de privacidade da Nestlé](https://www.dolce-gusto.pt/politica-privacidade)"]').click();
    cy.get('[title="Vamos começar?"]').click();
    cy.wait(4000).get('[aria-label="Item 4 of 7: Máquinas e suporte"]').click();
    cy.contains('Tenho imensa informação relativa às máquinas NESCAFÉ® Dolce Gusto®. ✨ O que procura?').should('be.visible')
    cy.wait(2000);
  });
    it('Opens the chatbot window and I click the fifth option', function() {
    cy.get('button.webchat-toggle-button.cognigy-webchat-1970mn3').click();
    cy.get('[placeholder="Primeiro nome"]').type('Mister', {delay: 100});
    cy.get('[placeholder="Sobrenome"]').type('Tester', {delay: 100});
    cy.get('[aria-label="Declaro que li e aceito a [polítca de privacidade da Nestlé](https://www.dolce-gusto.pt/politica-privacidade)"]').click();
    cy.get('[title="Vamos começar?"]').click();
    cy.wait(3000).get('[aria-label="Item 5 of 7: Cápsulas e bebidas"]').click();
    cy.contains('Para conseguir dar-lhe uma resposta mais eficaz, pode especificar o que pretende saber sobre as bebidas?').should('be.visible')
    cy.wait(2000);
  });
    it('Opens the chatbot window and I click the sixth option', function() {
    cy.get('button.webchat-toggle-button.cognigy-webchat-1970mn3').click();
    cy.get('[placeholder="Primeiro nome"]').type('Mister', {delay: 100});
    cy.get('[placeholder="Sobrenome"]').type('Tester', {delay: 100});
    cy.get('[aria-label="Declaro que li e aceito a [polítca de privacidade da Nestlé](https://www.dolce-gusto.pt/politica-privacidade)"]').click();
    cy.get('[title="Vamos começar?"]').click();
    cy.wait(3000).get('[aria-label="Item 6 of 7: A minha conta"]').click();
    cy.get('.webchat-quick-reply-template-header-message.cognigy-webchat-1d7syn4').should('be.visible');
    cy.wait(2000);
});
    it('Opens the chatbot window and I click the seventh option', function() {
    cy.get('button.webchat-toggle-button.cognigy-webchat-1970mn3').click();
    cy.get('[placeholder="Primeiro nome"]').type('Mister', {delay: 100});
    cy.get('[placeholder="Sobrenome"]').type('Tester', {delay: 100});
    cy.get('[aria-label="Declaro que li e aceito a [polítca de privacidade da Nestlé](https://www.dolce-gusto.pt/politica-privacidade)"]').click();
    cy.get('[title="Vamos começar?"]').click();
    cy.wait(5000).get('[aria-label="Item 7 of 7: Ajuda"]').click();
    cy.contains('Para esse tema, é mesmo melhor falar com um humano. Os nossos operadores são muito simpáticos! 😉 Confirme a transferência clicando no botão "Passar ao operador". Depois deixe a sua mensagem e o seu EMAIL (Sem email a transferência não é feita) Se preferir pode voltar ao menu principal e continuar a falar comigo.').should('be.visible')
    cy.wait(2000);
  });
});