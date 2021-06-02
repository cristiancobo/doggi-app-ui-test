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
                weight: random.number({
                    'min': 1,
                    'max': 70
                }),
                height: random.number({
                    'min': 30,
                    'max': 60
                }),
                lifeExpectancy: random.number({
                    'min': 1,
                    'max': 20
                }),
            }

            cy.get(`[data-testid="e2e-dog-card-edit-button-${new_dog_breed.name}"]`).click();
            cy.wait(TIME_OUT);
            cy.get('[data-testid=e2e-breed-dog-weight-input]').type(updatedDog.weight);
            cy.wait(TIME_OUT);
            cy.get('[data-testid=e2e-breed-dog-height-input]').type(updatedDog.height);
            cy.wait(TIME_OUT);
            cy.get('[data-testid=e2e-breed-dog-life-expectancy-input]').type(updatedDog.lifeExpectancy);
            cy.wait(TIME_OUT);
            cy.get('[data-testid=e2e-select-country-button]').click();
            cy.get('.Mui-selected').click();
            cy.wait(TIME_OUT);

            cy.get('[data-testid=e2e-create-update-dialog-button]').click();
        });

        it("Then the dog breed should not be listed with the updated attributes", () => {
            cy.get(`[data-testid="${new_dog_breed.name}"] > .MuiCardHeader-root > .MuiCardHeader-content > .MuiCardHeader-title`).should("be.visible");
            cy.get(`[data-testid="e2e-dog-card-height-${new_dog_breed.name}"]`).should("have.text", `Height: ${new_dog_breed.height}`);
            cy.get(`[data-testid="e2e-dog-card-weight-${new_dog_breed.name}"]`).should("have.text", `Weight: ${new_dog_breed.weight}`);
            cy.get(`[data-testid="${new_dog_breed.name}"] > .MuiCardHeader-root > .MuiCardHeader-content > .MuiCardHeader-subheader`).should("have.text", `Life Expectancy: ${new_dog_breed.lifeExpectancy}`);
        });
    });
});