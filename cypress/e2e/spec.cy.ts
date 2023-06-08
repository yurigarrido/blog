/// <reference types="cypress" />

import { wait } from '@testing-library/user-event/dist/types/utils'

describe('E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Header', () => {
    it('verifica se o header está na página', () => {
      cy.get('[data-cy="header"]').should('be.visible')
    })
    it('verifica se a logo aparece no header', () => {
      cy.get('[data-cy="headerImg"]').should('have.attr', 'src')
    })
  })

  describe('User Card', () => {
    it('verifica se o menu do usuário está na página', () => {
      cy.get('[data-cy="cardUserContainer"]').should('be.visible')
    })
    it('verifica se o menu contém uma imagem de background', () => {
      cy.get('[data-cy="cardUserImage"]').should('be.visible')
    })
    it('verifica se as informções do usuário estão aparecendo', () => {
      cy.get('[data-cy="cardUserName"]').should('contain', 'Yuri Garrido')
      cy.get('[data-cy="cardUserRole"]').should('contain', 'Front-End Dev')
    })
    it('verifica se o botão de editar perfil está aparecendo', () => {
      cy.get('[data-cy="cardUserEditProfile"]').should('be.visible')
    })
    it('verifica se o botão de editar perfil está com a label correta', () => {
      cy.get('[data-cy="cardUserEditProfile"]').should(
        'contain',
        'Editar seu perfil'
      )
    })
  })

  describe('Post', () => {
    it('verifica se o post está na tela', () => {
      cy.get('[data-cy="post1Container"]').should('be.visible')
    })
    it('verifica se o post contém a imagem do autor', () => {
      cy.get('[data-cy="post1Avatar"]').should('have.attr', 'src')
    })
    it('verifica se o post contém o nome do autor', () => {
      cy.get('[data-cy="post1AuthorName"]').should('contain', 'Yuri Garrido')
    })
    it('verifica se o post contém o cargo do autor', () => {
      cy.get('[data-cy="post1AuthorRole"]').should(
        'contain',
        'Front end Developer'
      )
    })
    it('verifica se o post contém o tempo estimado de publicação', () => {
      cy.get('[data-cy="post1TimeOfPublished"]').should(
        'contain',
        'há cerca de 1 mês'
      )
    })
    it('verifica se o post contém o conteúdo', () => {
      cy.get('[data-cy="post1Container"] > ._content_19eci_21').should(
        'contain',
        'Fala galera'
      )
    })
    it('verifica se é possível adicionar um novo comentário', () => {
      cy.get('[data-cy="post1InputAddComent"]')
        .clear()
        .type('Gostei de ver!', { delay: 50 })
        .should('have.value', 'Gostei de ver!')
      cy.get('[data-cy="post1ButtonSubmitNewComent"]').should('be.visible')
      cy.get('[data-cy="post1ButtonSubmitNewComent"]').click()

      cy.get('[data-cy="post2Container"]').should('be.visible')
      cy.get('[data-cy="comment1Content"]').should('be.visible')
    })
    it('verifica se é possível curtir um comentário', () => {
      cy.get(
        '[data-cy="post2CommentsContainer"] > [data-cy="comment0Container"] > ._commentBox_10o58_25 > footer > [data-cy="comment0LikeButton"]'
      ).click()
      cy.get(
        '[data-cy="post2CommentsContainer"] > [data-cy="comment0Container"] > ._commentBox_10o58_25 > footer > [data-cy="comment0LikeButton"] > [data-cy="comment0LikesCount"]'
      ).should('contain', '1')
    })
  })

  describe('Comentário', () => {
    it('verifica se há um comentário na página', () => {
      cy.get(
        '[data-cy="post1CommentsContainer"] > [data-cy="comment0Container"]'
      ).should('be.visible')
    })
    it('verifica se aparece a imagem do autor do comentário', () => {
      cy.get(
        '[data-cy="post1CommentsContainer"] > [data-cy="comment0Container"] > [data-cy="commentImage"]'
      ).should('have.attr', 'src')
    })
    it('verifica se aparece o nome do autor do comentário', () => {
      cy.get('[data-cy="comment0Author"]').should('contain', 'Luis Carlos')
    })
    it('verifica se aparece o tempo de publicação do comentário', () => {
      cy.get('[data-cy="comment0PublishedAtTime"]').should(
        'contain',
        'Cerca de 1h atrás'
      )
    })
    it('verifica se aparece o botão para excluir comentário', () => {
      cy.get('[data-cy="comment0DeleteButton"] ').should('be.visible')
    })
  })
})
