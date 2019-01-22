$(document).ready(function () {
    
    $('a[data-toggle="collapse"').click(function() {
        $(this).find('i.fa').toggleClass('opened');
    });                   
    
    $('button.posaljiBtn').click(function() {
        $('#msg-sent-modal').slideDown('slow');        
    });
    
    $('[data-toggle="tooltip"]').tooltip();

    $("[data-toggle='collapse']").click(function () {
        $('.navbar-header').toggleClass('active');
    });
    //navbar scroll effect 
    $(document).scroll(function () {
        var scrollPos = $(document).scrollTop() + 100;
        if ($(window).width() > 1024) {
            if (scrollPos > 650) {
                $('div#myNavbar.collapse.navbar-collapse').css({"padding": "0"});
                $('.container-fluid').css({"border-bottom": "1px solid #F1C53D"});
                $('nav.navbar.navbar-inverse').css({"background-color": "rgba(45,45,45,0.8)"});
                $('ul.nav.navbar-nav.navbar-right li a').addClass('changed');
                $('ul.nav.navbar-nav.navbar-right li a').css({"background-color": "rgba(25,25,25,0)"});

                $('ul.nav.navbar-nav.navbar-right li.active a').css({"background-color": "rgba(25,25,25,0.7)"});
                $('#logoPic').css({
                    "top": "-60px",
                    "opacity": "0"
                });
                $('#small-logo-brand').css({
                    "top": "0px",
                    "opacity": "1"
                });
            } else {
                $('div#myNavbar.collapse.navbar-collapse').css({"padding": "20px 0"});
                $('.container-fluid').css({"border-bottom": "none"});
                $('nav.navbar.navbar-inverse').css({"background-color": "rgba(0,0,0,0)"});
                $('ul.nav.navbar-nav.navbar-right li a').removeClass('changed');
                $('ul.nav.navbar-nav.navbar-right li a').css({"background-color": "rgba(25,25,25,0)"});
                $('ul.nav.navbar-nav.navbar-right li.active a').css({"background-color": "rgba(25,25,25,0)"});
                $('#logoPic').css({
                    "top": "10px",
                    "opacity": "1"
                });
                $('#small-logo-brand').css({
                    "top": "-60px",
                    "opacity": "0"
                });
            }
        }
        if ($(window).width() <= 1024 && $(window).width() >= 768) {
            if (scrollPos > 350) {
                $('div#myNavbar.collapse.navbar-collapse').css({"padding": "0"});
                $('.container-fluid').css({"border-bottom": "1px solid #F1C53D"});
                $('nav.navbar.navbar-inverse').css({"background-color": "rgba(45,45,45,0.8)"});
                $('ul.nav.navbar-nav.navbar-right li a').addClass('changed');
                $('ul.nav.navbar-nav.navbar-right li a').css({"background-color": "rgba(25,25,25,0)"});

                $('ul.nav.navbar-nav.navbar-right li.active a').css({"background-color": "rgba(25,25,25,0.7)"});
                $('#logoPic').css({
                    "top": "-60px",
                    "opacity": "0"
                });
                $('#small-logo-brand').css({
                    "top": "0px",
                    "opacity": "1"
                });
            } else {
                $('div#myNavbar.collapse.navbar-collapse').css({"padding": "7px 0"});
                $('.container-fluid').css({"border-bottom": "none"});
                $('nav.navbar.navbar-inverse').css({"background-color": "rgba(0,0,0,0)"});
                $('ul.nav.navbar-nav.navbar-right li a').removeClass('changed');

                $('ul.nav.navbar-nav.navbar-right li.active a').css({"background-color": "rgba(25,25,25,0)"});
                $('#logoPic').css({
                    "top": "10px",
                    "opacity": "1"
                });
                $('#small-logo-brand').css({
                    "top": "-60px",
                    "opacity": "0"
                });
            }
        }
        if ($(window).width() < 768) {
            if (scrollPos > 250) {
                $('.navbar-header').css({"padding": "0"});
                $('.container-fluid').css({"border-bottom": "1px solid #F1C53D"});
                $('nav.navbar.navbar-inverse').css({"background-color": "rgba(45,45,45,0.8)"});
                $('ul.nav.navbar-nav.navbar-right li a').addClass('changed');
                $('ul.nav.navbar-nav.navbar-right li a').css({"background-color": "rgba(25,25,25,0)"});

                $('ul.nav.navbar-nav.navbar-right li.active a').css({"background-color": "rgba(25,25,25,0.7)"});
                $('#logoPic').css({
                    "top": "-60px",
                    "opacity": "0"
                });
                $('#small-logo-brand').css({
                    "top": "0px",
                    "opacity": "1"
                });
            } else {
                $('.navbar-header').css({"padding": "5px 0"});
                $('.container-fluid').css({"border-bottom": "none"});
                $('nav.navbar.navbar-inverse').css({"background-color": "rgba(0,0,0,0)"});
                $('ul.nav.navbar-nav.navbar-right li a').removeClass('changed');

                $('ul.nav.navbar-nav.navbar-right li.active a').css({"background-color": "rgba(25,25,25,0)"});
                $('#logoPic').css({
                    "top": "10px",
                    "opacity": "1"
                });
                $('#small-logo-brand').css({
                    "top": "-60px",
                    "opacity": "0"
                });
            }
        }
    });

    $('form').submit(function (event) {
        $('#msg-sent-modal').slideDown('slow');
    });

    $(".navbar a, footer a[href='#myPage'], .navbar-header a[href='#myPage'], #dates ul li a[href='#googleMap'], #datesBtn").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function () {
                window.location.hash = hash;
            });
        }
    });

    function two() {
        var elements = document.getElementsByClassName("column");
        var i;
        for (i = 0; i < elements.length; i++) {
            elements[i].style.width = "50%";
        }
    }
    two();
    (function ($) {

        /**
         * Copyright 2012, Digital Fusion
         * Licensed under the MIT license.
         * http://teamdf.com/jquery-plugins/license/
         *
         * @author Sam Sehnert
         * @desc A small plugin that checks whether elements are within
         *     the user visible viewport of a web browser.
         *     only accounts for vertical position, not horizontal.
         */

        $.fn.visible = function (partial) {
            var $t = $(this),
                    $w = $(window),
                    viewTop = $w.scrollTop(),
                    viewBottom = viewTop + $w.height(),
                    _top = $t.offset().top,
                    _bottom = _top + $t.height(),
                    compareTop = partial === true ? _bottom : _top,
                    compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

        };

    })(jQuery);

    var win = $(window);

    var personRight = $(".person-right");
    var personLeft = $(".person-left");
    var photoGrid = $(".photo-grid");
    var ytVideo = $(".yt-video");
    var fb = $("#fb");
    var yt = $("#yt");
    var insta = $("#insta");
    var ng = $("#ng");
    console.log(ytVideo);

    personRight.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });
    personLeft.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });
    photoGrid.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });
    ytVideo.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });
    fb.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });
    yt.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });
    insta.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });
    ng.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });

    win.scroll(function (event) {

        personRight.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("bounceInRight");
            }
        });
        personLeft.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("bounceInLeft");
            }
        });
        photoGrid.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("slideInUp");
            }
        });
        ytVideo.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("pulse");
            }
        });
        fb.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("bounceInLeft");
            }
        });
        yt.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("bounce");
            }
        });
        insta.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("bounceInRight");
            }
        });
        ng.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("jackInTheBox");
            }
        });

    });
});

function myMap() {
    var myCenter = new google.maps.LatLng(44.7895152, 20.4489626);
    var mapProp = {
        center: myCenter,
        zoom: 15,
        scrollwheel: false,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#272727"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f1c53d"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f1c53d"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f1c53d"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    };

    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        map: map
    });

    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

    var leonidas = document.getElementById("leonidas");
    google.maps.event.addDomListener(leonidas, "click", function () {
        var newLocation = new google.maps.LatLng(44.765478, 20.499743);
        map.panTo(newLocation);
        map.setZoom(17);
        var marker = new google.maps.Marker({
            position: newLocation,
            map: map,
            icon: "images/lokali_logo/leonidas_logo.png"
        });
    });
    
    var pivara1 = document.getElementById("pivara1");
    google.maps.event.addDomListener(pivara1, "click", function () {
        var newLocation = new google.maps.LatLng(44.818503, 20.466352);
        map.panTo(newLocation);
        map.setZoom(17);
        var marker = new google.maps.Marker({
            position: newLocation,
            map: map,
            icon: "images/lokali_logo/pivara_logo.png"
        });
    });
    
    var pivara2 = document.getElementById("pivara2");
    google.maps.event.addDomListener(pivara2, "click", function () {
        var newLocation = new google.maps.LatLng(44.818503, 20.466352);
        map.panTo(newLocation);
        map.setZoom(17);
        var marker = new google.maps.Marker({
            position: newLocation,
            map: map,
            icon: "images/lokali_logo/pivara_logo.png"
        });
    });
    
    var pivara3 = document.getElementById("pivara3");
    google.maps.event.addDomListener(pivara3, "click", function () {
        var newLocation = new google.maps.LatLng(44.818503, 20.466352);
        map.panTo(newLocation);
        map.setZoom(17);
        var marker = new google.maps.Marker({
            position: newLocation,
            map: map,
            icon: "images/lokali_logo/pivara_logo.png"
        });
    });
    
    var pivara4 = document.getElementById("pivara4");
    google.maps.event.addDomListener(pivara4, "click", function () {
        var newLocation = new google.maps.LatLng(44.818503, 20.466352);
        map.panTo(newLocation);
        map.setZoom(17);
        var marker = new google.maps.Marker({
            position: newLocation,
            map: map,
            icon: "images/lokali_logo/pivara_logo.png"
        });
    });
    
    var tramvaj1 = document.getElementById("tramvaj1");
    google.maps.event.addDomListener(tramvaj1, "click", function () {
        var newLocation = new google.maps.LatLng(44.806087, 20.479010);
        map.panTo(newLocation);
        map.setZoom(17);
        var marker = new google.maps.Marker({
            position: newLocation,
            map: map,
            icon: "images/lokali_logo/tramvaj_logo.png"
        });
    });
    
    var tramvaj2 = document.getElementById("tramvaj2");
    google.maps.event.addDomListener(tramvaj2, "click", function () {
        var newLocation = new google.maps.LatLng(44.806087, 20.479010);
        map.panTo(newLocation);
        map.setZoom(17);
        var marker = new google.maps.Marker({
            position: newLocation,
            map: map,
            icon: "images/lokali_logo/tramvaj_logo.png"
        });
    });
    
    var squarefive2 = document.getElementById("squarefive2");
    google.maps.event.addDomListener(squarefive2, "click", function () {
        var newLocation = new google.maps.LatLng(44.815692, 20.460476);
        map.panTo(newLocation);
        map.setZoom(17);
        var marker = new google.maps.Marker({
            position: newLocation,
            map: map,
            icon: "images/lokali_logo/square_five_logo.png"
        });
    });
    
}