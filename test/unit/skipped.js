describe('Skipped; period = 5, start=0', function() {
  beforeEach(function() {
    this.period = 5;
    this.start = 0;
  });

  describe('value = 0', function() {
    beforeEach(function() {
      this.val = 0;
    });
    it('should be ok', function() {
      expect(withinPeriodicHole).to.be.ok;
    });
  });
});
