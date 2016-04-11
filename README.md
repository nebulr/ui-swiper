# ui.swiper
### Most modern mobile touch slider for angular js

This is an angular implementation of http://idangero.us/swiper/get-started/
This requires no dependencies and written entirely in angular! ( That means no swiper install or jquery install necessary )

# Install

`bower install ui.swiper`

# Add files

```
<link rel="stylesheet" href="bower_components/ui-swiper/dist/ui-swiper.css">
<script src="bower_components/ui-swiper/dist/ui-swiper.js"></script>
```

# Usage
Add the module dependency to your project
`angular.module('app', ['ui.swiper']);`

Sample Usage :
```
<swipe paging="true" buttons="true">
  <slide>Slide1</slide>
  <slide>Slide2</slide>
</swipe>
```
See here you added a swiper with pagination and directional buttons.
Within the slide tag you can put **whatever html you want to put in there!**

For more examples you can look at the [demo page](http://nebulr.github.io/ui.swiper).
