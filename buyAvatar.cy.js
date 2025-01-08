describe('Покупка аватара', function() {
  it('Должен успешно купить аватар', function() {
    // Вводим логин и пароль
    cy.visit('https://pokemonbattle.ru');
    cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
    cy.get('#password').type('USER_PASSWORD');
    cy.contains('Войти').click();

    // Выбираем путь /payments
    cy.get('.header__container > .header__id').click();
    cy.get('[href="/shop"]').click();
    cy.get('.available > button').first().click({ force: true });
   
    // ввод номера карты
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); 

    // Проверка даты карты
    cy.get(':nth-child(1) > .pay_base-input-v2').type('02/29');
    
    // Имя на карте
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('IGOR IGORNIKOV');
    
    // Успешный тест с cvv 125
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
 
// Правильный пароль от СМС


cy.get('.pay-btn').click();

cy.get('#cardnumber').type('56456'); 
cy.get('.payment__submit-button').click();


cy.get('.payment__font-for-success').contains('Покупка прошла успешно').should('be.visible');
cy.get('.payment__adv').click();
   
  });
});