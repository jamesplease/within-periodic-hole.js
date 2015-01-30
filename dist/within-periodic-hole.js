(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["nearest-periodic-value"], factory);
  } else if (typeof exports !== "undefined") {
    var nearestPeriodicValue = require("nearest-periodic-value");
    module.exports = factory(nearestPeriodicValue);
  } else {
    root.withinPeriodicHole = factory(root.nearestPeriodicValue);
  }
})(this, function (nearestPeriodicValue) {
  "use strict";

  var withinPeriodicHole = function (point, holeDefinition) {
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
  };




  return withinPeriodicHole;
});
//# sourceMappingURL=within-periodic-hole.js.map