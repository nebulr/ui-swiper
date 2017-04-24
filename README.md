# ui.swiper
### Most modern mobile touch slider for angular js

This is an angular implementation of http://idangero.us/swiper/get-started/
This requires no dependencies and written entirely in angular! ( That means no swiper install or jquery install necessary )
If you want to configure the swiper just apply the options as attributes to the swiper directive.
A reference to the swiper api can be found here : http://idangero.us/swiper/api/

This module also works with webpack and es6.

# Install

`bower install angular-ui-swiper`
**OR**
`npm install --save-dev angular-ui-swiper`

# Add files

```
<link rel="stylesheet" href="bower_components/angular-ui-swiper/dist/angular-ui-swiper.css">
<script src="bower_components/angular-ui-swiper/dist/angular-ui-swiper.js"></script>
```
**OR**
```
<link rel="stylesheet" href="node_modules/angular-ui-swiper/dist/angular-ui-swiper.css">
<script src="node_modules/angular-ui-swiper/dist/angular-ui-swiper.js"></script>
```

# Usage
Add the module dependency to your project
`angular.module('app', ['ui.swiper']);`

Sample Usage :
```
<swiper>
  <slides>
    <slide>Slide1</slide>
    <slide>Slide2</slide>
  </slides>
  <prev></prev>
  <next></next>
  <pagination></pagination>
</swiper>
```
See here you added a swiper with pagination and directional buttons.
Within the slide tag you can put **whatever html you want to put in there!**

For more examples you can look at the [demo page](http://nebulr.github.io/ui-swiper).
