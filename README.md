# primo-explore-stack-chart

Create links from brief results to individual stack charts

# the logic

1. Gather the necessary information to use in your logic statements: availability status, library location, library sublocation, call numbers, etc. This code separates LC call numbers from SuDoc and Dewey, so that each one can be manipulated differently.

2. Assign the stack chart url to each logic statement (or group of statements).

3. Create a boolean to define the circumstances under which the stack chart url should display.

# the app

```var app = angular.module('viewCustom', ['stackChart']);
angular
  .module('stackChart', [])
  .component('prmSearchResultAvailabilityLineAfter', {
  bindings: { parentCtrl: '<' },
    controller: function controller($scope) {
/*
logic goes here
*/
    },
  template: '<a ng-show="$ctrl.showTraceLink" href="{{floorMap}}">Help me find this book.</a>'
});```
