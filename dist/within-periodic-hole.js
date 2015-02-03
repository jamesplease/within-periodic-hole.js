(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("nearest-periodic-value")) : typeof define === "function" && define.amd ? define(["nearest-periodic-value"], factory) : global.withinPeriodicHole = factory(global.nearestPeriodicValue);
})(this, function (nearestPeriodicValue) {
  "use strict";

  function withinPeriodicHole(point, holeDefinition) {
    var holePeriod = holeDefinition.period;
    var holeValue = holeDefinition.startValue;
    var holeLength = holeDefinition.length;
    var nearest = nearestPeriodicValue(point, holeValue, holePeriod + holeLength);

    // If the nearest is ahead of you, then move it back one period.
    if (nearest - point > 0) {
      nearest = nearest - holePeriod - holeLength;
    }

    // Determine if we're inside the hole by comparing the start
    // and end of the hole against our point
    return nearest <= point && nearest + holeLength > point;
  }

  var within_periodic_hole = withinPeriodicHole;

  return within_periodic_hole;
});
//# sourceMappingURL=./within-periodic-hole.js.map