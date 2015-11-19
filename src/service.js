(function() {

  'use strict';

  angular.module('ionic-datepicker')
  .service('DatepickerService', [ 'DatepickerNls', function (DatepickerNls) {

    this.getDaysOfWeek = DatepickerNls.getWeekdays;
    this.getMonths = DatepickerNls.getMonths;

    this.getYears = function() {
      var years = [];
      for (var i = 1900; i < 2101; i++) years.push(i);
      return years;
    };

    this.createDateList = function(currentDate) {

      var firstDay  = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDate()
        , lastDay   = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
        , dateList  = [];

      for (var i = firstDay; i <= lastDay; i++) {
        dateList.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
      }

      firstDay = dateList[0].getDay();
      for (var j = 0; j < firstDay; j++) {
        dateList.unshift(undefined);
      }
      return dateList;
    };
  }]);
})();
