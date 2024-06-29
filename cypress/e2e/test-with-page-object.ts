import {navigateTo} from '../support/page_objects/navigationPage'

describe('Test with Page Object', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('verify navigation across pages', () => {
        navigateTo.formLayoutsPage();
        navigateTo.datepickerPage();
        navigateTo.smartTablePage();
        navigateTo.tooltipPage();
        navigateTo.toasterPage();
    });
});