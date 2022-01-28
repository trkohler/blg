describe('Main page should have three posts', () => {
    it('Does not do much!', () => {
      cy
      .visit('/')
      .get(".section-with-three-posts")
      .children()
      .should('have.length', 3)
    })
})