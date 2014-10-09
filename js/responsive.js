"use strict";

//Didn't necessarily need to make this object oriented since it's just a bunch of jQuery, but this is more how I write JS now when at work

$(document).ready(function(){

  var ResponsiveView = function() {
    this.init();
  },
  _this;

  ResponsiveView.prototype.init = function() {
    _this = this;
    this.removeSlider();
  };

  ResponsiveView.prototype.removeSlider = function(e) {
    // Checking the width of the browser window
    var view = $(window).width();
    // If the window loads at iPad or smaller, slider is removed.
    if (view <= 1024) {
      // Removes attributes for Bootstrap carousel and stacks slides
      $("body").find("#carousel").removeAttr('data-ride');
      $("#carousel").removeClass('carousel');
      $("#carousel").removeClass('slide');
      $("#carousel").addClass('wrapper--responsive');
      $(".carousel-inner").addClass('wrapper_inner--responsive');
      $(".wrapper_inner--responsive").removeClass('carousel-inner');

      //removes slider controls
      $(".carousel-control").remove();

    } else {
      e.preventDefault();
    }
  };


  // Self instantiate
  new ResponsiveView();

});
