const { BASE_URL, TIME_OUT } = require('../utils/constants');

describe("When the user wants to list the existing dogs", () => {

    before(() => {
        cy.visit(BASE_URL);
    });

    it("Then there should be more than zero elements", () => {
        
    })
});