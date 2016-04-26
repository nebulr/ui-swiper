'use strict';

angular
  .module ( 'ui.swiper' )
  .directive ( 'next', NextDirective );

/* @ngInject */
function NextDirective () {
  return {
    restrict : 'AE',
    transclude : true,
    replace : true,
    require : '^swiper',
    template : '<div class="swiper-button-next" ng-transclude></div>',
    priority : 2
  };
}
