'use strict';

angular
  .module ( 'swiper' )
  .directive ( 'swiper', SwiperDirective );

/* @ngInject */
function SwiperDirective (Swiper) {
  return {
    restrict : 'E',
    replace : true,
    transclude : true,
    scope : {
      paging : '=',
      buttons : '=',
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
    '<div class="swiper-container">' +
        '<div class="swiper-wrapper" ng-transclude></div>' +
        '<div class="swiper-pagination" ng-show="paging"></div>' +
        '<div class="swiper-button-prev" ng-show="buttons"></div>' +
        '<div class="swiper-button-next" ng-show="buttons"></div>' +
    '</div>',
    link : function ( $scope, $element, $attribute ) {
      angular.extend($attribute, $scope);
      $attribute.pagination = '.swiper-pagination';
      $attribute.paginationClickable = true;
      $attribute.nextButton = '.swiper-button-next';
      $attribute.prevButton = '.swiper-button-prev';
      var swiper = new Swiper ('.swiper-container', $attribute);

    }
  };
}
