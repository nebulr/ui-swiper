'use strict'

angular
  .module ('app', [
    'ui.swiper'
  ])
  .controller ('AppController', AppController);

function AppController ($scope) {
  $scope.onTransitionStart = function (swiper) {
    alert ("The current index is : " + swiper.activeIndex);
  };

  $scope.slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];
}
