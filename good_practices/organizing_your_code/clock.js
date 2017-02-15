var Calendar = Calendar || {};

Calendar.Clock = function () {
  'use strict';
  return {
    currentDate: function () {
      return new Date();
    }
  };
}
