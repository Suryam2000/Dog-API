var breed,url;

$('#getImage').click(function(){
    breed = $('#breed').val();

    if(breed == 'default'){
        alert("Choose a breed");
    }

    else{
        url = 'https://dog.ceo/api/breed/' + breed + '/images/random';
        $.get(url, function(data){
            var imgUrl = data.message;
            $('#displayimg').attr('src', imgUrl);
        });
    }
});

$('#Nextimg').click(function(){
    $.get(url, function(data){
        var imgUrl = data.message;
        $('#displayimg').attr('src', imgUrl);
    });
})