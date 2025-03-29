const adminlogin = require("../../fixtures/adminlogin.json");
const selectors = require("../../fixtures/selectors.json");
const seats = require("../../fixtures/seats.json");

beforeEach(() => {
  cy.visit("http://qamid.tmweb.ru/admin");
});

describe("template spec", () => {

  it("booking multiple tickets", () => {
    cy.login(adminlogin.validEmail, adminlogin.validPass);
    cy.contains("Управление залами").should("be.visible");
    cy.visit("/");
    cy.get(selectors.chooseDay).click();
    cy.get(selectors.chooseMovie).click();
    cy.get(selectors.movieSeance).contains("00:00").click();
    seats.forEach((item) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${item.row}) > :nth-child(${item.seat})`
      ).click();
    });
    // cy.get(selectors.seats).click();
    cy.get(selectors.reserve).click({ force: true });
    cy.get(selectors.bookingCode).click();
  });
});
