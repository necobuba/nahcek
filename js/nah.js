function dream(){
var color = 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
var x = Math.floor(Math.random()*$(window).width());
var y = Math.floor(Math.random()*$(window).height());
drawingpix = $('<span>').attr({class: 'drawingpix'}).hide();
$(document.body).append(drawingpix);
drawingpix.css({
    'background-color':color,
    'border-radius':'100px',
    '-moz-border-radius': '100px',
    '-webkit-border-radius': '100px',
    top: y-14,
    left: x-14
}).show().animate({
    height:'500px',
    width:'500px',
    'border-radius':'500px',
    '-moz-border-radius': '500px',
    '-webkit-border-radius': '500px',
    opacity: 0.1,
    top: y-250,
    left: x-250
}, 3000).fadeOut(3000);
window.setTimeout('dream()',800);
}

WebFontConfig = {
    google: { families: [ 'PT+Mono::latin,latin-ext' ] }
};

(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

function nah(){
    $('#nah').delay(900).animate({
        'height':'120px',
        'width':'150px'
    },700).delay(600).animate({
            'height':'600px',
            'width':'750px'
        },500, function() {
            nah();
        });
};

function nahStop(){
    $('#nah').stop(true).animate({
        'height':'600px',
        'width':'750px'
    },1500);
};

$(document).ready(function() {

    nah();
    $(".dis").click(function(event) {
        event.preventDefault();
    });

    $('#closeAds').toggle(function() {
        $('#bottomAds, #leftAds, #rightAds').fadeOut();
        $(this).html("Reklamları Göster")},function() {
        $('#bottomAds, #leftAds, #rightAds').fadeIn();
        $(this).html("Reklamları Gizle")
    });

    $('#baloon').click(function() {
        dream();
    });

    $('#tivi').toggle(function() {
        $('body').css("background-image","url(/images/tivi.gif)","background-repeat","repeat");
        },function() {
        $('body').css("background-image","none");
    });
    function bcg(){
        var color = ['B2B300', '6BB200', '008E00', '006B6B', '00248E', '24006B', '47006B', '8E006B', 'B20000', 'B24700', 'B26B00', 'B28F00', '000000'];
        var rnd = Math.floor(Math.random()*13);
        var clr = "#" + color[rnd];
        $('body').animate({
            backgroundColor: clr
        }, 2000, function() {
            bcg();
        });
    };
    $('#color').click(function() {
        bcg();
    });

    $('#switchNah').toggle(function() {
        nahStop();
        $(this).html("Nah'ı Başlat")},function() {
        nah();
        $(this).html("Nah'ı Durdur")
    });
});


