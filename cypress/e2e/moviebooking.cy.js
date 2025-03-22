const adminlogin = require("../fixtures/adminlogin.json");
const selectors = require("../fixtures/selectors.json");

beforeEach(() => {
  cy.visit("http://qamid.tmweb.ru/admin");
});

describe("template spec", () => {
it("booking from admin panel", () => {
  cy.login(adminlogin.validEmail, adminlogin.validPass);
  cy.contains("Управление залами").should("be.visible");
  cy.get(selectors.sessionGrid).eq(0);
  cy.get(selectors.nameHall).click();
  //cy.get(selectors.openTicketSalesButton).click();
});

it("booking a ticket", () => {
  cy.login(adminlogin.validEmail, adminlogin.validPass);
  cy.contains("Управление залами").should("be.visible");
  cy.visit("/");
  cy.get('[data-time-stamp="1742763600"]').click();
  cy.get(selectors.chooseMovie).click();
  cy.get(selectors.movieSeance).contains("00:00").click();
  cy.get(selectors.seats).click();
  cy.get(selectors.reserve).click({ force: true });
  cy.get(selectors.bookingCode).click();
});
})
