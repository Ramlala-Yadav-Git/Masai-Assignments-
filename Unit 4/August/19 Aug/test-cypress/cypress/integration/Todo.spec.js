describe("sample test", () => {
    const text = 'LEARN CYPRESS 3';

    const arr = [
        {
            title: "Learn cypress 1",
            id: 1,
            status: false
        },
        {
            title: "Learn cypress 2",
            id: 2,
            status: false
        },

    ]
    beforeEach(() => {
        cy.intercept('GET', '/tasks', {
            statusCode: 200,
            body: arr
        })
        cy.visit("http://localhost:3000")
    })
    // it('visit masaischool.com', () => {
    //     cy.visit('https://www.masaischool.com')
    //     cy.get('h1 > .text-4xl')
    //         .contains('The coding school that care')
    // })


    it('visit home page', () => {
        // cy.visit("http://localhost:3000/")

        cy.get('h1')
            .should('have.text', 'Tasks')

        cy.get('.task-input')
            .should('have.attr', 'placeholder', 'Add something?')
        cy.focused()
            .should('have.class', 'task-input')
    })

    it('typing into the input box, should work correctly', () => {
        cy.get('.task-input')
            .type(text)
            .should('have.value', text)
    })
    it('after typing text, pressing enter, it should ass an item into the task list', () => {

        cy.intercept('POST', '/tasks', {
            statusCode: 201,
            body: {
                title: text,
                status: false,
                id: 3
            }
        })


        cy.get('.task-input')
            .type(text)
            .type('{enter}')
            .should('have.value', "")

        cy.get('.task-list li')
            .should('have.length', 3)
            .contains(text)
    })
    it("should render error correctly", () => {
        cy.intercept('POST', '/tasks', {
            statusCode: 500,
            body: {
                title: text,
                status: false,
                id: 3
            }
        })

        cy.get('.task-input')
            .type(text)
            .type('{enter}')


        cy.get(".error").contains('Something went wrong')

    })
})