'use strict';

angular
  .module ( 'ui.swiper' )
  .directive ( 'pagination', PaginationDirective );

/* @ngInject */
function PaginationDirective () {
  return {
    restrict : 'AE',
    transclude : true,
    replace : true,
    require : '^swiper',
    template : '<div class="swiper-pagination" ng-transclude></div>',
    priority : 2
  };
}
