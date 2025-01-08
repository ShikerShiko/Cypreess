describe(' Проверка авторизации', function () {

    it('1 Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio');

         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();

         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');

         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 
    it('2 Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio'); // заходим на сайт
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // проверям текст 
        cy.get('#forgotEmailButton').click(); //переходим на страницу восстановления
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('3 Верный пароль и НЕверный логин', function () {
            cy.visit('https://login.qa.studio');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio81');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('4 Неверный пароль и верный логин', function () {
            cy.visit('https://login.qa.studio');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
            cy.get('#mail').type('german@dolnikoff.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('5 Ввести логин без @', function () {
            cy.visit('https://login.qa.studio');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
        it('6 Проверка на приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio');
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
            cy.get('#mail').type('GerMan@Dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
       
            cy.get('#messageHeader').contains('Авторизация прошла успешно');
            cy.get('#messageHeader').should('be.visible');
       
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })

    })
    
 