'use strict'

angular
  .module ('app', [
    'ui.swiper'
  ])
  .controller ('AppController', AppController);

function AppController ($scope, $timeout) {
  $scope.onTransitionStart = function (swiper) {
    alert ("The current index is : " + swiper.activeIndex);
  };

  $scope.slides = [];

  $timeout(function () {
    $scope.slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];
  }, 1000);


  $scope.setSlide = function (index) {
    $scope.instance.slideTo(index, 300);
  };
}
