'use strict';

function correctlyImplementsPeriodsInterfaceBehavior(concretePeriodsImplementation) {
  describe('Periods', function() {
    var periods = concretePeriodsImplementation;

    describe('Week', function() {
      var week = periods.Week();

      it("returns the date range of the week containing a given date",
        function() {
          var dateRange = week.rangeFor(moment("2014-11-11").toDate());

          expectsThat.dateRange(dateRange).startsOn("2014-11-10").andEndsOn("2014-11-16");
        }
      );

      it("returns the date one week after a given date",
        function() {
          var date = week.nextDate(moment("2014-11-11").toDate());

          expect(date).toEqual(moment("2014-11-18").toDate());
        }
      );

      it("returns the week one week before a given date",
        function() {
          var date = week.previousDate(moment("2014-11-11").toDate());

          expect(date).toEqual(moment("2014-11-04").toDate());
        }
      );
    });

    describe('Month', function() {
      var month = periods.Month();

      it("returns the date range of the month containing a given date",
        function() {
          var dateRange = month.rangeFor(moment("2014-11-11").toDate());

          expectsThat.dateRange(dateRange).startsOn("2014-11-01").andEndsOn("2014-11-30");
        }
      );

      it("returns the date one month after a given date",
        function() {
          var date = month.nextDate(moment("2014-11-11").toDate());

          expect(date).toEqual(moment("2014-12-11").toDate());
        }
      );

      it("returns the date one month before a given date",
        function() {
          var date = month.previousDate(moment("2014-11-11").toDate());

          expect(date).toEqual(moment("2014-10-11").toDate());
        }
      );
    });

    describe('Year', function() {
      var year = periods.Year();

      it("returns the date range of the year containing a given date",
        function() {
          var dateRange = year.rangeFor(moment("2014-11-11").toDate());

          expectsThat.dateRange(dateRange).startsOn("2014-01-01").andEndsOn("2014-12-31");
        }
      );

      it("returns the date one year after a given date",
        function() {
          var date = year.nextDate(moment("2014-11-11").toDate());

          expect(date).toEqual(moment("2015-11-11").toDate());
        }
      );

      it("returns the date one year before a given date",
        function() {
          var date = year.previousDate(moment("2014-11-11").toDate());

          expect(date).toEqual(moment("2013-11-11").toDate());
        }
      );
    });
  });
}