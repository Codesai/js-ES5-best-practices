var expectsThat = (function() {
  return {
    dateRange: expectThatDateRange
  };

  function expectThatDateRange(dateRange) {
    return {
      startsOn: function(startDate) {
        return {
          andEndsOn: function(endDate) {
            var startDate = getDate(dateRange, "startDate"),
              endDate = getDate(dateRange, "endDate");

            expect(startDate).toEqual(moment(startDate).toDate());
            expect(endDate).toEqual(moment(endDate).toDate());
          }
        };
      }
    };

    function getDate(dateRange, dateType) {
      if (typeof dateRange[dateType] == 'function') {
        return dateRange[dateType]();
      } else {
        return dateRange[dateType];
      }
    }
  }
})();