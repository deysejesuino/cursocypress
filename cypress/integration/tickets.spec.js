describe('Tickets', () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

    it.only("fills all the text input fields", () => {
        const firstName = "Deyse";
        const lastName = "Mazeto";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("deysemazeto@finchsolucoes.com.br");
        cy.get("#requests").type("Saudavel");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    });

    it("select two tickets", () =>{
        cy.get("#ticket-quanity").select("2");
 

    });

    it("has 'Ticketbox' header's heading", () => {});
});
