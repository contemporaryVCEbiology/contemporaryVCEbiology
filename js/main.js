//var channelId = 'UCtHT4kaRYc0XFXsaxpmDPIg';
var apiKey = 'AIzaSyAOqpwlI1CYmOBLBVT02GF4VES65IelHko';
var playlistId = 'PLkY7Yb9m1O2XBi22AcXujjAltwMXN-Qrf';

var Multimedia = Barba.BaseView.extend({
    namespace: 'multimedia',
    onEnterCompleted: function() {
        var localData = JSON.parse(window.localStorage.getItem('playlistitems'));
        if($.isEmptyObject(localData)){
            getVids(playlistId);
        } else {
            displayVids(localData);
        }
        vidLinks();
    }
});

function getVids(playlistId){
    $.get(
        'https://www.googleapis.com/youtube/v3/playlistItems', {
            part: 'snippet',
            playlistId: playlistId,
            key: apiKey,
            maxResults: 50 },
            function( data ) {
                displayVids(data);
                var localData = JSON.stringify(data);
                window.localStorage.setItem('playlistitems', localData);
            }
    );
}
function displayVids(data){
    var output;
    $.each(data.items, function(i, item){
        console.log(item);

        videoTitle = item.snippet.title;
        videoDescription = item.snippet.description;
        videoThumbnail = item.snippet.thumbnails.medium.url;
        videoId = item.snippet.resourceId.videoId;

        output = '<li><a class="no-barba" href="https://youtu.be/'+videoId+'" target="_blank" data-videoId="'+videoId+'"><img src="'+item.snippet.thumbnails.medium.url+'" alt=""><span class="videoTitle">'+videoTitle+'</span>'+ videoDescription+'</a></li>';
        console.log(output);
        $('#results').append(output);
    })
}
function vidLinks(){
    $('#results').on( 'click', 'li a', function() {
        event.preventDefault();
        videoId = $(this).attr('data-videoId');
        $('.overlay').append('<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/'+videoId+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>').addClass('on');
    });
    $('.overlay').click(function(event){
        $(this).empty().removeClass('on');
    });
}

$(document).ready(function(){
    Multimedia.init();
    Barba.Pjax.start();
});