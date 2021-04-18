describe('useWatchUseFieldArrayNested', () => {
  it('should watch the correct nested field array', () => {
    cy.visit('http://localhost:3000/useWatchUseFieldArrayNested');

    cy.get('#result').contains(
      '[{"firstName":"Bill","keyValue":[{"name":"1a"},{"name":"1c"}]}]',
    );

    cy.get(`#nest-append-0`).click();
    cy.get(`#nest-prepend-0`).click();
    cy.get(`#nest-insert-0`).click();
    cy.get(`#nest-swap-0`).click();
    cy.get(`#nest-move-0`).click();

    cy.get('#result').contains(
      '[{"firstName":"Bill","keyValue":[{"name":"insert"},{"name":"prepend"},{"name":"1a"},{"name":"1c"},{"name":"append"}]}]',
    );

    cy.get(`#nest-remove-0`).click();

    cy.get('#submit').click();

    cy.get('#result').contains(
      '[{"firstName":"Bill","keyValue":[{"name":"insert"},{"name":"1a"},{"name":"1c"},{"name":"append"}]}]',
    );

    cy.get('#prepend').click();
    cy.get('#append').click();
    cy.get('#swap').click();
    cy.get('#insert').click();

    cy.get('#result').contains(
      '[{"firstName":"prepend","keyValue":[]},{"firstName":"insert","keyValue":[]},{"firstName":"append","keyValue":[]},{"firstName":"Bill","keyValue":[{"name":"insert"},{"name":"1a"},{"name":"1c"},{"name":"append"}]}]',
    );

    cy.get(`#nest-append-0`).click();
    cy.get(`#nest-prepend-0`).click();
    cy.get(`#nest-insert-0`).click();
    cy.get(`#nest-swap-0`).click();
    cy.get(`#nest-move-0`).click();

    cy.get('#result').contains(
      '[{"firstName":"prepend","keyValue":[{"name":"insert"},{"name":"prepend"},{"name":"append"}]},{"firstName":"insert","keyValue":[]},{"firstName":"append","keyValue":[]},{"firstName":"Bill","keyValue":[{"name":"insert"},{"name":"1a"},{"name":"1c"},{"name":"append"}]}]',
    );

    cy.get('#nest-remove-3').click();
    cy.get('#nest-remove-3').click();

    cy.get('#result').contains(
      '[{"firstName":"prepend","keyValue":[{"name":"insert"},{"name":"prepend"},{"name":"append"}]},{"firstName":"insert","keyValue":[]},{"firstName":"append","keyValue":[]},{"firstName":"Bill","keyValue":[{"name":"insert"},{"name":"append"}]}]',
    );

    cy.get('#nest-remove-all-3').click();
    cy.get('#nest-remove-all-2').click();
    cy.get('#nest-remove-all-1').click();
    cy.get('#nest-remove-all-0').click();

    cy.get('#result').contains(
      '[{"firstName":"prepend","keyValue":[]},{"firstName":"insert","keyValue":[]},{"firstName":"append","keyValue":[]},{"firstName":"Bill","keyValue":[]}]',
    );

    cy.get('#remove').click();
    cy.get('#remove').click();
    cy.get('#remove').click();

    cy.get('#result').contains('[{"firstName":"prepend","keyValue":[]}]');

    cy.get('#count').contains('8');
  });
});
