'use strict'

angular
  .module ('app', [
    'swiper'
  ])
  .controller ('AppController', AppController);

function AppController ($scope) {

  $scope.onTransitionStart = function (swiper) {
    alert ("The current index is : " + swiper.activeIndex);
  };
}
