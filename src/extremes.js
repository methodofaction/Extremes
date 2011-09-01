$.fn.extremes = function(options) {
    var defaults = {
        diameter: false,
        background: false
    };
    var options = jQuery.extend(defaults, options);
    return this.each(function() {
      var diagram = $(this);
      // Apply a rotation to offset awkward initial states
      // 'this' is the selector
       diagram.css({
         position: "relative"
       });
       if (defaults.rotate) {
         diagram.css({
           '-webkit-transform': "rotate(" + options.rotate + "deg)",
           '-moz-transform': "rotate(" + options.rotate + "deg)",
           '-ms-transform': "rotate(" + options.rotate + "deg)",
           '-o-transform': "rotate(" + options.rotate + "deg)",
           'transform': "rotate(" + options.rotate + "deg)",
           });
       }
       var elements = $(this).children();
       var length = elements.length;
       $(this).css({
         "display" : "block",
         "position:" : "relative"
       });
       var maxWidth = 0;
       elements.css("float", "left");
       elements.each(function(i){
         var width = $(this).width();
         if (width > maxWidth) {
           maxWidth = width;
         }
         
         var element = $(this);
         var height = $(this).height();
         var degrees =  i/length * 360 - 90;
         var position = "0 50%";
         var indent = (defaults.diameter) ? "0 0 0 " + defaults.diameter + "px" : "0 0 0 " + height * (length /6) + "px";
         element.wrap("<div class='extremes-div'><div class='extremes-inner' /></div>");
         $(this).parent().parent().css({
           "-webkit-transform-origin": position,
           "-moz-transform-origin":    position,
           "-o-transform-origin":      position,
           "-ms-transform-origin":     position,
           "transform-origin":         position,
           "-webkit-transform":        "rotate(" + degrees + "deg)",
           "-moz-transform":           "rotate(" + degrees + "deg)",
           "-o-transform":             "rotate(" + degrees + "deg)",
           "-ms-transform":            "rotate(" + degrees + "deg)",
           "transform":                "rotate(" + degrees + "deg)",
           "padding":                   indent, 
           "position":                 "absolute",
           "top":                      "50%",
           "left":                     "50%",
           "white-space" :             "nowrap"
         });
          if (degrees > 90) {
            $(this).parent().css({
              "-webkit-transform-origin":  "50% 50%",
               "-moz-transform-origin":    "50% 50%",
               "-o-transform-origin":      "50% 50%",
               "-ms-transform-origin":     "50% 50%",
               "transform-origin":         "50% 50%",
               "-webkit-transform":        "rotate(180deg)",
               "-moz-transform":           "rotate(180deg)",
               "-o-transform":             "rotate(180deg)",
               "-ms-transform":            "rotate(180deg)",
               "transform":                "rotate(180deg)",
               "position":                 "absolute"
            });
            $(this).parent().parent().css({
              width: $(this).parent().width(),
              height: $(this).parent().height(), 
              })
          }
       });
       if (diagram.height() < 50) {
         diagram.css({
           "width" : maxWidth * 2 + defaults.diameter || 100,
           "height" : maxWidth * 2 + defaults.diameter || 100
         });
       }
  });
};