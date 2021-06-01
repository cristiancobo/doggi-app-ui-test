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

describe("When the user wants to add a new dog breed", () => {

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
    })

    it("Then the dog should be listed with the right attributes", () => {
        //cy.get('.MuiContainer-root > .MuiGrid-container').contains("nth-child",new_dog_breed.name).should("be.visible");
        cy.get(`[data-testid="${new_dog_breed.name}-container"]`);
    })
});