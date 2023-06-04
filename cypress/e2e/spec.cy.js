import {
    assertNotification,
    createNewLeaveRequest,
    deleteLeaveRequest,
    login,
    submitLeaveRequest,
    updateExistingLeaveRequest,
    visitPage
} from './helper';

describe('Leave Request Happy path Scenario', () => {
    beforeEach(() => {
        visitPage();
        login();
    });

    it('visit the page and apply leave request', () => {
        createNewLeaveRequest();
        submitLeaveRequest();
        assertNotification();
    });

    it('visit the page and update leave request', () => {
        updateExistingLeaveRequest();
        assertNotification();
    });

    it('should delete applied leave request', () => {
        deleteLeaveRequest();
        assertNotification();
    });
});


describe('Leave Request Un-Happy path Scenario', () => {

    beforeEach(() => {
        visitPage();
        login();
    });

    it('should not allow leave request end date before start date', () => {
        const testData = {startDate: '25/12/2025', endDate: '24/12/2025', firstApprover: 'MSR'};
        createNewLeaveRequest(testData);
        cy.contains('Leave request date - start date must be before end date');
    });
});