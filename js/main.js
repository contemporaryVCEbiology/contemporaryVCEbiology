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

    /*getVids(playlistId);
    function getVids(playlistId){
        $.get(
            'https://www.googleapis.com/youtube/v3/playlistItems', {
                part: 'snippet',
                playlistId: playlistId,
                key: apiKey,
                maxResults: 50 },
                function(data){
                    var output;
                    $.each(data.items, function(i, item){
                        console.log(item);
                        
                        videoTitle = item.snippet.title;
                        videoDescription = item.snippet.description;
                        videoThumbnail = item.snippet.thumbnails.medium.url;
                        videoId = item.snippet.resourceId.videoId;
                        
                        output = '<li><a href="https://youtu.be/'+videoId+'"><img src="'+item.snippet.thumbnails.medium.url+'" alt=""><div class="videoDetails"><span class="videoTitle">'+videoTitle+'</span>'+ videoDescription+'</a></li>';
                        console.log(output);
                        $('#results').append(output);
                        
                    })
                }
        );
    }*/
});