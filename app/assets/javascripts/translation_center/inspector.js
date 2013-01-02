//= require js-routes

$(document).ready(function() {
  if($('body').children('#inplace_editing').length == 0)
    $('body').append('<div id="inplace_editing"></div>');
    
  // for each key add a link that goes to the key page
  $('.inplace_key').each(function(){
    var top = $(this).offset().top - 20;
    var left = $(this).offset().left - 10;
    var id = $(this).data('id');
    // missing translation will be in red while translated will be in green
    var badgeClass = $(this).hasClass('translation_missing') ? 'badge-important' : 'badge-success'
    $('#inplace_editing').append($('<a>').attr('target', '_blank').attr('href', Routes.translation_center_translation_key_path(id)).attr('data-id', id).attr('style', 'left:' + left + 'px;top:' + top + 'px' ).attr('class', 'icon-edit badge ' + badgeClass  + ' inplace_edit_button'));

  });

  // highlight the key when user hovers over it
  $(".inplace_edit_button").mouseover(function() {
    var id = $(this).data('id');
    var key = $('.inplace_key[data-id=' + id + ']')
    var color = key.hasClass('translation_missing') ? 'red' : 'green'
    key.css('color', color);
  }).mouseout(function(){
    var id = $(this).data('id');
    $('.inplace_key[data-id=' + id + ']').css('color', '');
  });

});