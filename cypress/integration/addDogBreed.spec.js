const { random } = require('faker');
const { BASE_URL, TIME_OUT } = require('../utils/constants');

const new_dog_breed = {
    name: random.words(2),
    weight: random.number(50),
    height: random.number(50),
    lifeExpectancy: random.number(20),
} 

describe("When the user wants to add a new dog", () => {

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
        cy.get('[data-testid=e2e-dog-breed-colors-button] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root').click();
        cy.wait(TIME_OUT);
        //cy.get('#mui-21080-popup').click();
        cy.wait(TIME_OUT);
        cy.get('[data-testid=e2e-dog-breed-nature-autocomplete] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root').click();
        cy.wait(TIME_OUT);
        //cy.get('.Mui-selected').click();
        cy.get('[data-testid=e2e-create-update-dialog-button]').click();
    })

    it("Then the dog should be listed with the right attributes", () => {
        //cy.get('.MuiContainer-root > .MuiGrid-container').contains("nth-child",new_dog_breed.name).should("be.visible");
    })
});