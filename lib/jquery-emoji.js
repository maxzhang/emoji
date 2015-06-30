(function(window, $, undefined) {
  'use strict';

  var jEmoji = window.jEmoji;

  $.fn.emoji = function(depth) {
    (depth ? this.find('[data-role="emoji"]') : this).each(function() {
      var $el = $(this);
      $el.html( jEmoji.unifiedToHTML($el.text()) );
    });
  };


  $(function() {
    $('[data-role="emoji"]').emoji();
  });

}(window, window.jQuery));