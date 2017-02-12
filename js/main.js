$(document).ready(function(){
    $('.tabs a').click(function(event){
        event.preventDefault();
        if(!$(this).hasClass('current')){
            var tabId = $(this).attr('href').substr(1);
            $('.tabs a').removeClass('current');
            $('.tab').removeClass('current');
            $(this).addClass('current');
            $('#'+tabId).addClass('current');
        }
    });
});