const defaultLeaveReqTestData = {
    startDate: '25/12/2025',
    endDate: '26/12/2025',
    firstApprover: 'MSR'
};

export function createNewLeaveRequest(leaveReqTestData = defaultLeaveReqTestData) {
    // navigate to leave requests tab
    cy.contains('Leave requests').click();
    cy.get('[data-cy="new-leave-request"] > .au-target').click();
    // fill leave request form
    cy.get('[data-cy="leave-type"]').type('AL');
    cy.get('[title="AL"]').click({scrollBehavior: false});
    cy.wait(7000);
    cy.get('[data-cy="first-approver"] > lt-lookup.au-target > .lt-combo-box').type(leaveReqTestData.firstApprover);
    cy.get('[title="MSR"]').click({scrollBehavior: false});
    cy.wait(7000);
    cy.get('[data-cy="start-date"] > .form-group').type(leaveReqTestData.startDate);
    cy.get('[data-cy="end-date"] > .form-group').type(leaveReqTestData.endDate);
    // submit leave request form
    cy.get('[data-cy="confirm"] > .au-target').click();
}

export function updateExistingLeaveRequest() {
    // navigate to leave requests tab
    cy.contains('Leave requests').click();
    // click on days link text
    cy.get('[title="2"]').click({scrollBehavior: false});
    cy.contains('All day').first().click({scrollBehavior: false});
    // update the existing leave request
    cy.get('[id="option2"]').click({force: true});
    cy.get('[prompt="Start time"] input').type('10:00am');
    cy.wait(7000);
    cy.get('[prompt="End time"] input').type('12:00pm', {force: true});
    cy.contains('Save').click({force: true});
}

export function submitLeaveRequest() {
    cy.get('[data-cy="submit"] > .au-target').click();
}

export function visitPage() {
    cy.visit('https://training40.lentune.com/erp/');
    // to surface loading time
    cy.wait(7000);
}

export function login() {
    cy.get('[id="username"]').type('TA6');
    cy.get("[id='Password']").type('TestAutomation@Cypress13');
    cy.get('[value="Login"]').click();
    // to surface successful authentication
    cy.wait(6000);
}

export function assertNotification() {
    cy.get('.lt-notification-title');
}

export function deleteLeaveRequest() {
    // navigate to leave requests tab
    cy.wait(6000);
    cy.contains('Leave requests').click({scrollBehavior: false});
    // find and click on delete icon
    cy.get('.glyphicon.glyphicon-trash').first().click({scrollBehavior: false});
    // confirm delete request
    cy.get('[data-cy="confirm"]').click();

}