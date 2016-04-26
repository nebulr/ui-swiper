'use strict';

angular
  .module ('ui.swiper')
  .directive ('slide', SlideDirective);

/* @ngInject */
function SlideDirective ($rootScope) {
  return {
    restrict : 'E',
    replace : true,
    transclude : true,
    template : '<div class="swiper-slide" ng-transclude></div>',
    require : '^slides',
    priority : 3,
    link : function (scope, element, attrs) {
      scope.eventId = scope.$parent.$parent.uuid;
      scope.$watch('$last', function (value) {
        if (value)  {
          $rootScope.$broadcast(scope.eventId);
        }
      });
    }
  }
}
