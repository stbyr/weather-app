describe("Searching for a city", () => {
    it("Inexistent city should show result: 'Keine Stadt gefunden'", () => {
        cy.visit("/");
        cy.get("input").type("xxx");
        cy.get("li").should("have.text", "Keine Stadt gefunden.")
    });

    it("Existing city should show results", () => {
        cy.visit("/");
        cy.get("input").type("Berlin");
        cy.get("li:contains(Berlin)").its("length").should("eq", 6)
    })

    it("Unfocus search bar should hide results", () => {
        cy.visit("/");
        cy.get("input").type("Berlin");
        cy.get("[data-cy='background']").click()
        cy.get("ul").should("not.exist")
    })

    it("Click on city should open detail page", () => {
        cy.visit("/");
        cy.get("input").type("Berlin");
        cy.get("li").each(li => {
            if(li.text() === "Berlin, DE") {
                li.click()
            }
        })
        cy.url().should("include", "/location/berlin-2950158")
    })
  });