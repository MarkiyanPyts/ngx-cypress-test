function selectDayFromCurrent(day) {
    let date = new Date()
    date.setDate(date.getDate() + day)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleDateString('en-US', {month: 'short'})
    let futureYear = date.getFullYear()
    console.log(futureDay, futureMonth, futureYear)
    let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`

    cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
        if(!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear.toString())) {
            cy.get('[data-name="chevron-right"]').click()
            selectDayFromCurrent(day)
        } else {
            cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
        }
    })

    return dateToAssert
}

export class DatePickerPage {
    selectCommonDatepickerDateFromToday(dayFromToday: number) {

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()

            const dateToAssert = selectDayFromCurrent(dayFromToday)

            cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)
            cy.wrap(input).should('have.value', dateToAssert)
        })
    }

    selectDatepickerWithRangeFromToday(firstDay: number, secondDay: number) {
        cy.contains('nb-card', 'Datepicker With Range').find('input').then(input => {
            cy.wrap(input).click()

            const firstDateToAssert = selectDayFromCurrent(firstDay)
            const secondDateToAssert = selectDayFromCurrent(secondDay)

            const finalDate = `${firstDateToAssert} - ${secondDateToAssert}`
            cy.wrap(input).invoke('prop', 'value').should('contain', finalDate)
            cy.wrap(input).should('have.value', finalDate)
        })
    }
}

export const onDatePickerPage = new DatePickerPage();