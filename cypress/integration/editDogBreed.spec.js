const { random } = require('faker');
const { BASE_URL, TIME_OUT } = require('../utils/constants');

const new_dog_breed = {
    name: random.words(2),
    weight: random.number(50),
    height: random.number(50),
    lifeExpectancy: random.number(20),
} 
let updatedDog;

describe("Given a created dog", () => {

    before(() => {
        cy.visit(BASE_URL);
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(TIME_OUT);
        cy.get('[data-testid=e2e-breed-dog-name-input]').type(new_dog_breed.name);
        cy.wait(TIME_OUT);
        cy.get('[data-testid=e2e-breed-dog-weight-input]').type(new_dog_breed.weight);
        cy.wait(TIME_OUT);
        cy.get('[data-testid=e2e-breed-dog-height-input]').type(new_dog_breed.height);
        cy.wait(TIME_OUT);
        cy.get('[data-testid=e2e-breed-dog-life-expectancy-input]').type(new_dog_breed.lifeExpectancy);
        cy.wait(TIME_OUT);
        cy.get('[data-testid=e2e-select-country-button]').click();
        cy.get('.Mui-selected').click();
        cy.wait(TIME_OUT);
    });

    describe("When the user wants to edit the dog", () => {

        before(() => {
            updatedDog = {
                name: random.words(2),
                weight: random.number(50),
                height: random.number(50),
                lifeExpectancy: random.number(20),
            }

            //
        });

        it("Then the dog should be listed with the updated attributes", () => {

        });
    });
});