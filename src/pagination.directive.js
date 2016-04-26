'use strict';

angular
  .module ( 'ui.swiper' )
  .directive ( 'pagination', SlidesDirective );

/* @ngInject */
function SlidesDirective () {
  restrict : 'AE',
  transcludes : true,
  replace : true,
  require : '^^swiper',
  template : '<div class="swiper-pagination" ng-transclude></div>'
}
