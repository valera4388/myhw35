const adminlogin = require("../../fixtures/adminlogin.json")

beforeEach(() => {
cy.visit("http://qamid.tmweb.ru/admin");
});

describe('happy and sad path login', () => {

it("happy login", () => {
  cy.login(adminlogin.validEmail, adminlogin.validPass);
  cy.contains("Управление залами").should("be.visible");
});

it("sad login", () => {
  cy.login(adminlogin.invalidEmail, adminlogin.invalidPass);
  cy.contains("Ошибка авторизации!").should("be.visible");
});
})