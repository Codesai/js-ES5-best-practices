'use strict';

var DateRange = (function() {
  return function(clock, periods) {
    var month = periods.Month(),
      week = periods.Week(),
      year = periods.Year(),
      period = week,
      currentDate = clock.currentDate(),
      dateRange = period.rangeFor(currentDate);

    return {
      startDate: function() {
        return dateRange.startDate;
      },
      endDate: function() {
        return dateRange.endDate;
      },
      useMonth: function() {
        updateRangeUsingNewPeriod(month);
      },
      useYear: function() {
        updateRangeUsingNewPeriod(year);
      },
      useWeek: function() {
        updateRangeUsingNewPeriod(week);
      },
      next: next,
      previous: previous,
      current: current
    };

    function current() {
      currentDate = clock.currentDate();
      dateRange = period.rangeFor(currentDate);
    }

    function previous() {
      currentDate = period.previousDate(currentDate);
      dateRange = period.rangeFor(currentDate);
    }

    function next() {
      currentDate = period.nextDate(currentDate);
      dateRange = period.rangeFor(currentDate);
    }

    function updateRangeUsingNewPeriod(newPeriod) {
      period = newPeriod;
      dateRange = period.rangeFor(currentDate);
    }
  };
})();