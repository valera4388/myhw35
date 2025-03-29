const adminlogin = require("../../fixtures/adminlogin.json");

beforeEach(() => {
  cy.visit("http://qamid.tmweb.ru/admin");
});

describe("check for space", () => {
it("email with space", () => {
  cy.login(adminlogin.emailForSpace, adminlogin.validPass);
  cy.contains("Ошибка авторизации!").should("be.visible");
});
});
