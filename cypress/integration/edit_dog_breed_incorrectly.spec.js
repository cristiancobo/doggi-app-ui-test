const { random } = require('faker');
const { BASE_URL, TIME_OUT } = require('../utils/constants');

const new_dog_breed = {
    name: random.words(2),
    weight: random.number({
        'min': 1,
        'max': 70}),
    height: random.number({
        'min': 30,
        'max': 60}),
    lifeExpectancy: random.number({
        'min': 1,
        'max': 20}),
}
let updatedDog;

describe("Given a created dog breed", () => {

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

        cy.get('[data-testid=e2e-dog-breed-colors-autocomplete]').click();
        cy.wait(TIME_OUT);
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('[data-testid=e2e-dog-breed-colors-autocomplete]').click();
        cy.wait(TIME_OUT);
        cy.get('.MuiAutocomplete-popper li[data-option-index="1"]').click();
        cy.get('[data-testid=e2e-dog-breed-nature-autocomplete]').click();
        cy.wait(TIME_OUT);
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('[data-testid=e2e-dog-breed-nature-autocomplete]').click();
        cy.wait(TIME_OUT);
        cy.get('.MuiAutocomplete-popper li[data-option-index="1"]').click();

        cy.get('[data-testid=e2e-create-update-dialog-button] > .MuiButton-label').click();
    });

    describe("When the user wants to edit the dog breed incorrectly", () => {

        before(() => {
            updatedDog = {
                name: random.words(2),
                weight: 0,
                height: 0,
                lifeExpectancy: 0,
            } 

            //
        });

        it("Then the dog breed should be listed with the updated attributes", () => {

        });
    });
});