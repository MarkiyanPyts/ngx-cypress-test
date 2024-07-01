import {navigateTo} from '../support/page_objects/navigationPage'
import {onFormLayoutsPage} from '../support/page_objects/formLayoutsPage'
import { on } from 'cluster';
import { onDatePickerPage } from '../support/page_objects/datePickerPage';
import { onSmartTablePage } from '../support/page_objects/smartTablePage';

describe('Test with Page Object', () => {
    beforeEach(() => {
        cy.openHomePage();
    });

    it('verify navigation across pages', () => {
        navigateTo.formLayoutsPage();
        navigateTo.datepickerPage();
        navigateTo.smartTablePage();
        navigateTo.tooltipPage();
        navigateTo.toasterPage();
    });

    it('should submit Inline and Basic form and select tomorrow date in calendar', () => {
        navigateTo.formLayoutsPage();
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('John Doe', 'test@test.com');
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password');

        navigateTo.datepickerPage();
        onDatePickerPage.selectCommonDatepickerDateFromToday(1);
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14);

        navigateTo.smartTablePage();
        onSmartTablePage.addNewRecordWithFirstAndLastName('John', 'Doe');
        onSmartTablePage.updateAgeByFirstName('John', 30);
        onSmartTablePage.deleteRowByIndex(1);
    })
});