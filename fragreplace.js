(function ($) {
  Drupal.behaviors.fragReplace = {
    attach: function(context, settings) {
      $('#replace-form-link').bind('click', function() {
        $('#fragreplace-form')
          .before('<div id="fragment-status">Refreshing...</div>');
        $.ajax({
          url: Drupal.settings.basePath + 'fragreplace/fragment',
          type: 'GET',
          dataType: 'html',
          success: function(data, textStatus, jqXHR) {
            $('#fragreplace-form').replaceWith(data);
            $('#fragment-status').remove();
          },
          error: function(jqXHR, textStatus, errorThrown) {
            var msg = 'Error getting replacement content: ' + errorThrown;
            $('#fragreplace-form')
              .replaceWith('<div id="fragment-error">' + msg + '</div>');
          },
        });
        return false;
      });
    }
  }
})(jQuery);