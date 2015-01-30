import nearestPeriodicValue from 'nearest-periodic-value';

function withinPeriodicHole(point, holeDefinition) {
  var holePeriod = holeDefinition.period;
  var holeValue = holeDefinition.startValue;
  var holeLength = holeDefinition.length;
  var nearest = nearestPeriodicValue(point, holeValue, holePeriod+holeLength);

  // If the nearest is ahead of you, then move it back one period.
  if (nearest - point > 0) {
    nearest = nearest - holePeriod - holeLength;
  }

  var holeStart = nearest;
  var holeEnd = nearest + holeLength;

  return holeStart <= point && holeEnd > point;
}

export default withinPeriodicHole;
