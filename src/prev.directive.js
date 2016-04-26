'use strict';

angular
  .module ( 'ui.swiper' )
  .directive ( 'prev', PrevDirective );

/* @ngInject */
function PrevDirective () {
  return {
    restrict : 'AE',
    transclude : true,
    replace : true,
    require : '^swiper',
    template : '<div class="swiper-button-prev" ng-transclude></div>',
    priority : 2,
    scope: true
  };
}
