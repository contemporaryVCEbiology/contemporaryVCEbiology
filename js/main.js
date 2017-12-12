var channelId = 'UCtHT4kaRYc0XFXsaxpmDPIg';
var apiKey = 'AIzaSyAOqpwlI1CYmOBLBVT02GF4VES65IelHko';
var playlistId = 'PLkY7Yb9m1O2VDBLp6j76W5kzazTMeOPqO';

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
    
    /*$.get(
        'https://www.googleapis.com/youtube/v3/channels', {
            part: 'contentDetails',
            id: channelId,
            key: apiKey },
            function(data){
                $.each(data.items, function(){
                    console.log(item);
                })
            }
    );*/
    getVids(playlistId);
    function getVids(playlistId){
        $.get(
            'https://www.googleapis.com/youtube/v3/playlistItems', {
                part: 'snippet',
                playlistId: playlistId,
                key: apiKey },
                function(data){
                    var output;
                    $.each(data.items, function(){
                        console.log(item);
                        /*
                        videoTitle = item.snippet.title;
                        
                        output = '<li>'+videoTitle+'</li>';
                        $('#results').append(output);
                        */
                    })
                }
        );
    }
});