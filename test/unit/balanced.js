describe('Balanced hole', function() {
  beforeEach(function() {
    this.holePeriod = 3;
    this.holeLength = 3;
  });

  describe('value = 0', function() {
    beforeEach(function() {
      this.startValue = 0;
    });
    _.each(fixtures.solutions.balanced.zero, function(solution, point) {
      it('should compute the correct solution for ' + point + '.', function() {
        expect(withinPeriodicHole(point, {
          length: this.holeLength,
          period: this.holePeriod,
          startValue: this.startValue
        }))
        .to.equal(!!solution);
      });
    }, this);
  });

  describe('value = 1', function() {
    beforeEach(function() {
      this.startValue = 1;
    });
    _.each(fixtures.solutions.balanced.one, function(solution, point) {
      it('should compute the correct solution for ' + point + '.', function() {
        expect(withinPeriodicHole(point, {
          length: this.holeLength,
          period: this.holePeriod,
          startValue: this.startValue
        }))
        .to.equal(!!solution);
      });
    }, this);
  });

  describe('value = 2', function() {
    beforeEach(function() {
      this.startValue = 2;
    });
    _.each(fixtures.solutions.balanced.two, function(solution, point) {
      it('should compute the correct solution for ' + point + '.', function() {
        expect(withinPeriodicHole(point, {
          length: this.holeLength,
          period: this.holePeriod,
          startValue: this.startValue
        }))
        .to.equal(!!solution);
      });
    }, this);
  });

  describe('value = 3', function() {
    beforeEach(function() {
      this.startValue = 3;
    });
    _.each(fixtures.solutions.balanced.three, function(solution, point) {
      it('should compute the correct solution for ' + point + '.', function() {
        expect(withinPeriodicHole(point, {
          length: this.holeLength,
          period: this.holePeriod,
          startValue: this.startValue
        }))
        .to.equal(!!solution);
      });
    }, this);
  });

  describe('value = 4', function() {
    beforeEach(function() {
      this.startValue = 4;
    });
    _.each(fixtures.solutions.balanced.four, function(solution, point) {
      it('should compute the correct solution for ' + point + '.', function() {
        expect(withinPeriodicHole(point, {
          length: this.holeLength,
          period: this.holePeriod,
          startValue: this.startValue
        }))
        .to.equal(!!solution);
      });
    }, this);
  });

  describe('value = 5', function() {
    beforeEach(function() {
      this.startValue = 5;
    });
    _.each(fixtures.solutions.balanced.five, function(solution, point) {
      it('should compute the correct solution for ' + point + '.', function() {
        expect(withinPeriodicHole(point, {
          length: this.holeLength,
          period: this.holePeriod,
          startValue: this.startValue
        }))
        .to.equal(!!solution);
      });
    }, this);
  });

  describe('value = 6', function() {
    beforeEach(function() {
      this.startValue = 6;
    });
    _.each(fixtures.solutions.balanced.six, function(solution, point) {
      it('should compute the correct solution for ' + point + '.', function() {
        expect(withinPeriodicHole(point, {
          length: this.holeLength,
          period: this.holePeriod,
          startValue: this.startValue
        }))
        .to.equal(!!solution);
      });
    }, this);
  });
});
