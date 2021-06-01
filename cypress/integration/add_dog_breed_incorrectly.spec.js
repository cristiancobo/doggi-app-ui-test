const { random } = require('faker');
const { BASE_URL, TIME_OUT } = require('../utils/constants');

const new_dog_breed_zero_values = {
    name: random.words(2),
    weight: 0,
    height: 0,
    lifeExpectancy: 0,
} 

describe("When the user wants to add a new dog breed incorrectly", () => {

    describe("When the user wants to add a new dog breed but values are zero", () => {
        
        before(() => {
            cy.visit(BASE_URL);
            cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click();
            cy.wait(TIME_OUT);
            cy.get('[data-testid=e2e-breed-dog-name-input]').type(new_dog_breed_zero_values.name);
            cy.wait(TIME_OUT);
            cy.get('[data-testid=e2e-breed-dog-weight-input]').type(new_dog_breed_zero_values.weight);
            cy.wait(TIME_OUT);
            cy.get('[data-testid=e2e-breed-dog-height-input]').type(new_dog_breed_zero_values.height);
            cy.wait(TIME_OUT);
            cy.get('[data-testid=e2e-breed-dog-life-expectancy-input]').type(new_dog_breed_zero_values.lifeExpectancy);
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
        })

        it("Then the create dog button should be disabled"), () => {
            cy.get(
                '[data-testid=e2e-create-update-dialog-button]'
                ).should("be.disabled");
        }
    });
});