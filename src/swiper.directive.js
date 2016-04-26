'use strict';

angular
  .module ( 'ui.swiper' )
  .directive ( 'swiper', SwiperDirective );

/* @ngInject */
function SwiperDirective (Swiper) {
  return {
    restrict : 'E',
    transclude : true,
    replace : true,
    scope : {
      onInit : '=',
      onSlideChangeStart : '=',
      onSlideChangeEnd : '=',
      onSlideNextStart : '=',
      onSlideNextEnd : '=',
      onSlidePrevStart : '=',
      onSlidePrevEnd : '=',
      onTransitionStart : '=',
      onTransitionEnd : '=',
      onTouchStart : '=',
      onTouchMove : '=',
      onTouchMoveOpposite : '=',
      onSliderMove : '=',
      onTouchEnd : '=',
      onClick : '=',
      onTap : '=',
      onDoubleTap : '=',
      onImagesReady : '=',
      onProgress : '=',
      onReachBeginning : '=',
      onReachEnd : '=',
      onDestroy : '=',
      onSetTranslate : '=',
      onSetTransition : '=',
      onAutoplay : '=',
      onAutoplayStart : '=',
      onAutoplayStop : '=',
      onLazyImageLoad : '=',
      onLazyImageReady : '=',
      onPaginationRendered : '='
    },
    template :
    '<div class="swiper-container" ng-transclude></div>',
    link : function ( $scope, $element, $attribute ) {
      angular.extend($attribute, $scope);
      $scope.uuid = generateUUID();
      $element.addClass($scope.uuid);

      $attribute.pagination = '.swiper-pagination';
      $attribute.paginationClickable = true;
      $attribute.nextButton = '.swiper-button-next';
      $attribute.prevButton = '.swiper-button-prev';


      var swiper = new Swiper ('.' + $scope.uuid, $attribute);
    }
  };
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'axxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};
