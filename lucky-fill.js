(function( $ ){
  $.fn.luckyFill = function(){
    $('input',this).filter(function() { return $(this).attr('placeholder'); }).each(function() {
      var placehoder = $("<span class='ie-placeholder' />"); 
      placehoder.css('position', 'relative');
      var fieldObj = this;  
      $(this).wrap(placehoder)
      .parent()
        .css('position', 'relative')   
        .prepend(
          $("<span class='filler' />")
            .text(fieldObj.attr('placeholder'))
            .css({'position':'absolute','top':'0', 
            'bottom':'0',
            'textAlign':fieldObj.css('textAlign'),
            'color' : fieldObj.css('color'), 
            'color':  fieldObj.css('color'), 
            'zIndex': 10,'paddingLeft': fieldObj.css('paddingLeft'),
            'fontSize':fieldObj.css('fontSize'),
            'lineHeight': fieldObj.css('lineHeight') - (fieldObj.css('paddingTop')/2)
            })
            .width(fieldObj.width())
            .bind('click', function(){
              fieldObj.trigger('focus');
            })
          );
      $(this)  
        .bind('focus', function(){ fieldObj.siblings( 'span.filler' ).hide() })
        .bind('blur', function(){ if($(this).val() == '' )fieldObj.siblings( 'span.filler' ).show() });            
    })  
  }

})( jQuery );