const { random } = require('faker');
const { BASE_URL, TIME_OUT } = require('../utils/constants');

const new_dog_breed = {
    
    name: random.words(2),
    weight: random.
} 

describe("", () => {

    before(() => {
        cy.visit(BASE_URL);
        cy.wait(TIME_OUT);
    })

    it("", () => {

    })
});