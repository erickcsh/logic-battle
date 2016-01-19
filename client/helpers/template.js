/*
 *
 * Helper to show array index as starting in 1 rather in 0
 *
 */

Template.registerHelper('incremented', function (index) {
  index++;
  return index;
});

