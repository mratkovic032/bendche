$(document).ready(function () {            

    var win = $(window);
    var windowHeight = win.height();
    var windowWidth = win.width(); 

    var landingImgWrapper = $('.landing-img-wrapper');  
    var landignImg = $('.landing-img');      

    var eventsDiv = $('#events');
    var eventsWrapper = $('.events-wrapper');
    var eventsRotatedText = $('.events-rotated-text');
       
    var veljkoWrapper = $('#veljko-wrapper');
    var veljkoImg = $('#veljko');
    var veljkoCardWrapper = $('#veljko-card-wrapper');
    var veljkoCard = $('#veljko-card');

    var pedjaWrapper = $('#pedja-wrapper');
    var pedjaImg = $('#pedja');
    var pedjaCardWrapper = $('#pedja-card-wrapper');
    var pedjaCard = $('#pedja-card');
    
    var pavleWrapper = $('#pavle-wrapper');
    var pavleImg = $('#pavle');
    var pavleCardWrapper = $('#pavle-card-wrapper');
    var pavleCard = $('#pavle-card');

    var stefanoWrapper = $('#stefano-wrapper');
    var stefanoImg = $('#stefano');
    var stefanoCardWrapper = $('#stefano-card-wrapper');
    var stefanoCard = $('#stefano-card'); 
    
    var theEvent = $('.the-event');    
    var lokalWrapper = $('.lokal-img-wrapper'); 
    var lokalInfo = $('.lokal-info');   

    var aboutHeadline = $('.about-band-headline');
    
    if (windowWidth > 768 && windowWidth < 992) {  
        var testimonialBoxHeight = $('.testimonialDiv').height();
        $('#testimonials').css({'height': testimonialBoxHeight * 7 + 'px'});       

        var aboutContentWrapper = $('.about-content-wrapper'); 
        var aboutContentWrapperTop = windowHeight - (aboutContentWrapper.height() + 15);
        var aboutHeadLineTop = aboutContentWrapperTop - (aboutHeadline.height() * 1.2);                      
        //var aboutContentWrapperTop = aboutHeadLineTop + aboutHeadline.height();
        aboutContentWrapper.css({'top': aboutContentWrapperTop + 'px'});

        //var aboutHeadingTop = aboutContentWrapperTop - (aboutHeadline.height() / 6);
        aboutHeadline.css({
            'top': aboutHeadLineTop + 'px'
        }); 

        var aboutSubHeadline1 = $('.sub-headline-1');
        var aboutSubHeadline2 = $('.sub-headline-2');
        var aboutSubHeadline3 = $('.sub-headline-3');
        var aboutSubHeadline1Top = aboutHeadLineTop - (aboutSubHeadline1.height() * 2.3);
        var aboutSubHeadline2Top = aboutHeadLineTop - (aboutSubHeadline2.height() * 1.7);
        var aboutSubHeadline3Top = aboutHeadLineTop - (aboutSubHeadline3.height() * 1.1);
        aboutSubHeadline1.css({'top': aboutSubHeadline1Top + 'px'});
        aboutSubHeadline2.css({'top': aboutSubHeadline2Top + 'px'});
        aboutSubHeadline3.css({'top': aboutSubHeadline3Top + 'px'});

    } else if (windowWidth <= 768) {
        // $('.arrow-up-wrapper').remove();
        // $('.arrow-down-wrapper').remove();

        var testimonialBoxHeight = $('.testimonialDiv').height();
        $('#testimonials').css({'height': testimonialBoxHeight * 7 + 'px'});                              


        var aboutContentWrapper = $('.about-content-wrapper'); 
        var aboutHeadLineTop = windowHeight / 4;                      
        var aboutContentWrapperTop = aboutHeadLineTop + aboutHeadline.height();
        aboutContentWrapper.css({'top': aboutContentWrapperTop + 'px'});

        var aboutHeadingTop = aboutHeadLineTop - (aboutHeadline.height() / 6);
        aboutHeadline.css({
            'top': aboutHeadLineTop + 'px'
        }); 

        var aboutSubHeadline1 = $('.sub-headline-1');
        var aboutSubHeadline2 = $('.sub-headline-2');
        var aboutSubHeadline3 = $('.sub-headline-3');
        var aboutSubHeadline1Top = aboutHeadingTop - (aboutSubHeadline1.height() * 1.9);
        var aboutSubHeadline2Top = aboutHeadingTop - (aboutSubHeadline2.height() * 1.3);
        var aboutSubHeadline3Top = aboutHeadingTop - (aboutSubHeadline3.height() * 0.7);
        aboutSubHeadline1.css({'top': aboutSubHeadline1Top + 'px'});
        aboutSubHeadline2.css({'top': aboutSubHeadline2Top + 'px'});
        aboutSubHeadline3.css({'top': aboutSubHeadline3Top + 'px'});

    } else {

        var aboutHeadingTop = windowHeight - (aboutHeadline.height() * 1.5);        
        aboutHeadline.css({
            'top': aboutHeadingTop  + 'px'
        });       
        var aboutContentWrapper = $('.about-content-wrapper');        
        var aboutContentWrapperTop = (aboutHeadingTop - (aboutContentWrapper.height() - aboutHeadline.height())) - 30;
        aboutContentWrapper.css({'top': aboutContentWrapperTop + 'px'});
        
        var aboutSubHeadline1 = $('.sub-headline-1');
        var aboutSubHeadline2 = $('.sub-headline-2');
        var aboutSubHeadline3 = $('.sub-headline-3');
        var aboutSubHeadline1Top = aboutHeadingTop - (aboutSubHeadline1.height() * 1.9);
        var aboutSubHeadline2Top = aboutHeadingTop - (aboutSubHeadline2.height() * 1.3);
        var aboutSubHeadline3Top = aboutHeadingTop - (aboutSubHeadline3.height() * 0.7);
        aboutSubHeadline1.css({'top': aboutSubHeadline1Top + 'px'});
        aboutSubHeadline2.css({'top': aboutSubHeadline2Top + 'px'});
        aboutSubHeadline3.css({'top': aboutSubHeadline3Top + 'px'});
    }


    if (windowWidth > 768) {
        var thumb = $('.thumb');
        thumb.css({
            'height': $('.vid-list-container').height() / 6 + 'px'
        });    
    }

    
    var lokalMargin = (theEvent.height() - lokalInfo.height()) / 2;    

    // lokalWrapper.css({'margin-top': lokalMargin + 'px'});
    // lokalInfo.css({'margin-top': lokalMargin + 'px'});  

    var instrumentsImg = $('#instruments-img');
    var instrumentsImgWidth = ($('.contact-cols').width() * 3) / 4;
    var instrumentsImgHeight = instrumentsImgWidth + 100;
    var instrumentsImgTop = $('#contact').height() - instrumentsImgHeight;
    instrumentsImg.css({
        'width': instrumentsImgWidth + 'px',
        'height': instrumentsImgHeight + 'px',
        'top' : instrumentsImgTop + 'px'
    });
    
    // $('body').click(function(e) {
    //     console.log(e.target);
    // });
    new WOW().init({
        mobile: true
    });

    $('#name_surname').focus(function() {        
        $("[for='name_surname']").css({
            'top': '0px',
            'font-size': '13px'
        });
    });
    $('#name_surname').blur(function() {  
        if(!$(this).val()){            
            $("[for='name_surname']").css({
                'top': '30px',
                'font-size': '16px'
            });
        }     
    });
    $('#email').focus(function() {
        $("[for='email']").css({
            'top': '0px',
            'font-size': '13px'
        });
    });
    $('#email').blur(function() {  
        if(!$(this).val()){            
            $("[for='email']").css({
                'top': '30px',
                'font-size': '16px'
            });
        }     
    });
    $('#message').focus(function() {        
        $("[for='message']").css({
            'top': '0px',
            'font-size': '13px'
        });
    });
    $('#message').blur(function() {  
        if(!$(this).val()){            
            $("[for='message']").css({
                'top': '30px',
                'font-size': '16px'
            });
        }     
    });
    $('#phone').focus(function() {        
        $("[for='phone']").css({
            'top': '0px',
            'font-size': '13px'
        });
    });
    $('#phone').blur(function() {  
        if(!$(this).val()){            
            $("[for='phone']").css({
                'top': '30px',
                'font-size': '16px'
            });
        }     
    }); 
    $('#name_surname_comment').focus(function() {        
        $("[for='name_surname_comment']").css({
            'top': '0px',
            'font-size': '13px'
        });
    });
    $('#name_surname_comment').blur(function() {  
        if(!$(this).val()){            
            $("[for='name_surname_comment']").css({
                'top': '30px',
                'font-size': '16px'
            });
        }     
    });
    $('#comment_textbox').focus(function() {        
        $("[for='comment_textbox']").css({
            'top': '0px',
            'font-size': '13px'
        });
    });
    $('#comment_textbox').blur(function() {  
        if(!$(this).val()){            
            $("[for='comment_textbox']").css({
                'top': '30px',
                'font-size': '16px'
            });
        }     
    });
       
    
    $('.vid-item').click(function() {
        var youtubeId = $(this).attr('id');
        $('#vid-frame').attr('src', 'http://www.youtube.com/embed/' + youtubeId + '?controls=0&autoplay=1');        
    });

    $('.arrow-up-wrapper').css({
        'width': $('.vid-list-container').width() + 'px'
    });
    if (windowWidth > 768 && windowWidth < 992) {
        console.log("usao je upromenu strelice");
        var arrowDownWrapperTop = ($('#band').offset().top * 3) + 317 + ($('.vid-list-container').height() - $('.arrow-down-wrapper').height());
        $('.arrow-down-wrapper').css({
            'width': $('.vid-list-container').width() + 'px',
            'top': + arrowDownWrapperTop - 2 + 'px'
        });
    } else if (windowWidth <= 768) {
        var arrowDownWrapperTop = ($('#band').offset().top * 3) + 346 + ($('.vid-list-container').height() - $('.arrow-down-wrapper').height());
        $('.arrow-down-wrapper').css({
            'width': $('.vid-list-container').width() + 'px',
            'top': + arrowDownWrapperTop - 2 + 'px'
        });
    } else {
        var arrowDownWrapperTop = ($('#band').offset().top * 3) + 140 + ($('.vid-list-container').height() - $('.arrow-down-wrapper').height());
        $('.arrow-down-wrapper').css({
            'width': $('.vid-list-container').width() + 'px',
            'top': + arrowDownWrapperTop - 2 + 'px'
        });
    }

    $(".arrow-up").bind("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollTop: "-=150px"
        }, 350);
    });
    $(".arrow-down").bind("click", function (event) {        
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollTop: "+=150px"
        }, 350);
    });
       
    $('[data-toggle="tooltip"]').tooltip();        
    
    var eventMoreInfo = $('.event-more-info');
    var lokalMoreInfo = $('.lokal-more-info');
    var eventMoreInfoOpened = false;

    var eventsWrapperHeight = eventsWrapper.height();

    eventMoreInfo.click(function() {
        var buttonId = $(this).attr("id");        
        var eventNumber = buttonId.substring(5, 6);

        if (!eventMoreInfoOpened) {
            $(this).text('zatvori');
            eventsWrapper.css({'height': eventsWrapperHeight + 'px'});

            setTimeout(function() {
                for (var i = 1; i < 5; i++) {
                    if (eventNumber != i) {
                        var eventToHide = $('#event' + i);
                        // eventToHide.css({'opacity': '0'});
                        eventToHide.hide();
                        eventToHide.css({'animation-name': 'none'});
                    }
                }                        
            }, 100);

            setTimeout(function() {                                 
                theEvent.css({'height': '100%'});                
            }, 500);                        

            setTimeout(function() {
                lokalMoreInfo.css({'overflow': 'visible'});
            }, 800);

            eventMoreInfoOpened = true;
        } else {
            $(this).text('više infomacija');            
            theEvent.css({'height': '25%'});
            lokalMoreInfo.css({'overflow': 'hidden'});
            
            setTimeout(function() {
                for (var i = 1; i < 5; i++) {
                    if (eventNumber != i) {
                        var eventToHide = $('#event' + i);
                        // eventToHide.css({'opacity': '1'});
                        eventToHide.show();
                    }
                } 
            }, 500);
            
            //eventsWrapper.css({'height': 'initial'});
            eventMoreInfoOpened = false;
        }
    });
    
    // $('head').append('<style type="text/css">.events-wrapper::before {width:100px}</style>');
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
    var elementOffsetTop, elementOffsetLeft;
    var eventsRotatedTextHalfWidth = (eventsRotatedText.width() / 2) + eventsRotatedText.height();        
    var eventsRotatedTextHeight = eventsRotatedText.height();
    //navbar scroll effect 
    $(document).scroll(function () {
        event3rdElement = $('#event3');        
        elementOffsetTop = (eventsWrapper.offset().top + (eventsWrapper.height() / 2)) - eventsRotatedTextHeight;
        elementOffsetLeft = (eventsWrapper.offset().left);
        // console.log('top ' + elementOffsetTop + ', left ' + elementOffsetLeft);  
        eventsRotatedText.css({
            'left': elementOffsetLeft + 'px',
            'top': elementOffsetTop + 'px',
            'transform': 'rotate(-90deg) translateY(-' + eventsRotatedTextHalfWidth + 'px)',
            '-webkit-transform': 'rotate(-90deg) translateY(-' + eventsRotatedTextHalfWidth + 'px)',
            '-moz-transform': 'rotate(-90deg) translateY(-' + eventsRotatedTextHalfWidth + 'px)',
            '-o-transform': 'rotate(-90deg) translateY(-' + eventsRotatedTextHalfWidth + 'px)'
        });         

        var scrollPos = $(document).scrollTop();
        var eventsDistance = (eventsDiv.offset().top)        
        if (win.width() >= 768) {
            if (scrollPos < 500) {
                landignImg.css({
                    'filter': 'grayscale(' + (50 + (scrollPos / 15)) + '%)',
                    '-webkit-filter':  'grayscale(' + (50 + (scrollPos / 15)) + '%)'
                })
            }
        }                       
        // console.log(eventsDistance);
        if (win.scrollTop() >= eventsDistance - 150) {
            $('div#myNavbar.collapse.navbar-collapse').css({"padding": "0"});
            $('.navbar-wrapper').css({"border-bottom": "1px solid #F1C53D"});
            $('nav.navbar.navbar-inverse').css({"background-color": "rgba(45,45,45,0.8)"});
            $('ul.nav.navbar-nav.navbar-right li a').addClass('changed');
            $('ul.nav.navbar-nav.navbar-right li a').css({"background-color": "rgba(25,25,25,0)"});
            $('ul.nav.navbar-nav.navbar-right li.active a').css({"background-color": "rgba(25,25,25,0.7)"});
            if (windowWidth > 768) {
                $('#big-logo-brand').css({'top': '-10px'});    
            }
        } else {
            $('div#myNavbar.collapse.navbar-collapse').css({"padding": "20px 0"});
            $('.navbar-wrapper').css({"border-bottom": "none"});
            $('nav.navbar.navbar-inverse').css({"background-color": "rgba(0,0,0,0)"});
            $('ul.nav.navbar-nav.navbar-right li a').removeClass('changed');
            $('ul.nav.navbar-nav.navbar-right li a').css({"background-color": "rgba(25,25,25,0)"});
            $('ul.nav.navbar-nav.navbar-right li.active a').css({"background-color": "rgba(25,25,25,0)"});
            if (windowWidth > 768) {
                $('#big-logo-brand').css({"top": "0px"});
            }
        }
        
        if (win.scrollTop() >= eventsDistance - (windowHeight / 2)) {            
            setTimeout(function() {                        
                eventsRotatedText.css({
                    'opacity': '1'
                });
                
            }, 2400);
        }
    });           
    
    var landingImgWrapperMobileHeight = windowHeight / 4;  
    if (win.width() < 768)  {        
        landingImgWrapper.css({'height': landingImgWrapperMobileHeight + 'px'});
        $('#veljko').attr('src', 'assets/img/landing-img/mobile/veljko-scaled.jpg');
        $('#pedja').attr('src', 'assets/img/landing-img/mobile/pedja-scaled.jpg');
        $('#pavle').attr('src', 'assets/img/landing-img/mobile/pavle-scaled.jpg');
        $('#stefano').attr('src', 'assets/img/landing-img/mobile/stefano-scaled.png');
    } else {
        landingImgWrapper.css({'height': windowHeight + 'px'});
    }
    //landignImg.css({'top': offsetY + 'px'});

    // if (windowWidth >= 768) {
    //     landingImg.css({
    //         'height': windowHeight + 'px'
    //     });
    // } else {

    // }

    

    // landing images showing more info about band members and their profile cards        
    veljkoImg.mouseover(function() {
        veljkoImg.css({
            'filter': 'grayscale(0)',
            '-webkit-filter': 'grayscale(0)',
            'transform': 'scale(1.007)',
            '-webkit-transform': 'scale(1.007)',
            '-moz-transform': 'scale(1.007)'
        });
    }).mouseout(function() {
        veljkoImg.css({
            'filter': 'grayscale(50%)',
            '-webkit-filter': 'grayscale(50%)',
            'transform': 'scale(1)',
            '-webkit-transform': 'scale(1)',
            '-moz-transform': 'scale(1)'
        });
    });

    pedjaImg.mouseover(function() {
        pedjaImg.css({
            'filter': 'grayscale(0)',
            '-webkit-filter': 'grayscale(0)',
            'transform': 'scale(1.007)',
            '-webkit-transform': 'scale(1.007)',
            '-moz-transform': 'scale(1.007)'
        });
    }).mouseout(function() {
        pedjaImg.css({
            'filter': 'grayscale(50%)',
            '-webkit-filter': 'grayscale(50%)',
            'transform': 'scale(1)',
            '-webkit-transform': 'scale(1)',
            '-moz-transform': 'scale(1)'
        });
    });

    pavleImg.mouseover(function() {
        pavleImg.css({
            'filter': 'grayscale(0)',
            '-webkit-filter': 'grayscale(0)',
            'transform': 'scale(1.007)',
            '-webkit-transform': 'scale(1.007)',
            '-moz-transform': 'scale(1.007)'
        });
    }).mouseout(function() {
        pavleImg.css({
            'filter': 'grayscale(50%)',
            '-webkit-filter': 'grayscale(50%)',
            'transform': 'scale(1)',
            '-webkit-transform': 'scale(1)',
            '-moz-transform': 'scale(1)'
        });
    });

    stefanoImg.mouseover(function() {
        stefanoImg.css({
            'filter': 'grayscale(0)',
            '-webkit-filter': 'grayscale(0)',
            'transform': 'scale(1.007)',
            '-webkit-transform': 'scale(1.007)',
            '-moz-transform': 'scale(1.007)'
        });
    }).mouseout(function() {
        stefanoImg.css({
            'filter': 'grayscale(50%)',
            '-webkit-filter': 'grayscale(50%)',
            'transform': 'scale(1)',
            '-webkit-transform': 'scale(1)',
            '-moz-transform': 'scale(1)'
        });
    });
    
    veljkoImg.click(function() {  
        if (veljkoWrapper.prop('classList').length == 7) {
            console.log('sirim');            
            
            veljkoImg.css({
                'filter': 'grayscale(0)',
                '-webkit-filter': 'grayscale(0)'                              
            });
            if (win.width() >= 1200) {
                veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');
                pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
                pavleWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
                stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
            } else if (win.width() >= 992 && win.width() < 1200) {
                veljkoWrapper.removeClass('col-md-3').addClass('col-md-6 expanded');
                pedjaWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
                pavleWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
                stefanoWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
            } else if (win.width() >= 768 && win.width() < 992) {
                veljkoWrapper.removeClass('col-sm-3').addClass('col-sm-6 expanded');
                pedjaWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
                pavleWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
                stefanoWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
            } else if (win.width() < 768) {
                veljkoWrapper.css({
                    'height': (windowHeight * 7) / 10 + 'px'
                });
                pedjaWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });
                pavleWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });
                stefanoWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });                
            }

            //veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');                        

            pedjaImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'              
            });                 
            //pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            pavleImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });
            //pavleWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            stefanoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });        
            //stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
            setTimeout(function() {
                veljkoCardWrapper.css({
                    'visibility': 'visible',
                    'opacity': '1'
                });
            }, 500);
            setTimeout(function() {                
                veljkoCard.css({'opacity': '1'});
            }, 1000);
            setTimeout(function() {
                $('.name').css({'left': '20px'});                
            }, 1300);
            setTimeout(function() { 
                $('.name span').css({'margin-left': '20px'});                               
            }, 1500);
            setTimeout(function() {
                $('.about-text').css({'opacity': '1'});         
            }, 1700);
            setTimeout(function() {
                $('.social-media').css({'opacity': '1'});
            }, 2000);
        }                                    
    });            
    
    pedjaImg.click(function() {  
        if (pedjaWrapper.prop('classList').length == 7) {
            console.log('sirim');

            pedjaImg.css({
                'filter': 'grayscale(0)',
                '-webkit-filter': 'grayscale(0)'
            });

            if (win.width() >= 1200) {
                pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');
                veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
                pavleWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
                stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
            } else if (win.width() >= 992 && win.width() < 1200) {
                pedjaWrapper.removeClass('col-md-3').addClass('col-md-6 expanded');
                veljkoWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
                pavleWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
                stefanoWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
            } else if (win.width() >= 768 && win.width() < 992) {
                pedjaWrapper.removeClass('col-sm-3').addClass('col-sm-6 expanded');
                veljkoWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
                pavleWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
                stefanoWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
            } else if (win.width() < 768) {
                pedjaWrapper.css({
                    'height': (windowHeight * 7) / 10 + 'px'
                });
                veljkoWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });
                pavleWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });
                stefanoWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });
            }
            //pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');            

            veljkoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });      
            //veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            pavleImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });
            //pavleWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            stefanoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });
            //stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
            setTimeout(function() {
                pedjaCardWrapper.css({
                    'visibility': 'visible',
                    'opacity': '1'
                });
            }, 500);
            setTimeout(function() {
                pedjaCard.css({'opacity': '1'});
            }, 1000);
            setTimeout(function() {
                $('.name').css({'left': '20px'});                
            }, 1300);
            setTimeout(function() { 
                $('.name span').css({'margin-left': '20px'});                               
            }, 1500);
            setTimeout(function() {
                $('.about-text').css({'opacity': '1'});         
            }, 1700);
            setTimeout(function() {
                $('.social-media').css({'opacity': '1'});
            }, 2000);
        }             
    });
    
    pavleImg.click(function() {          
        if (pavleWrapper.prop('classList').length == 7) {
            console.log('sirim');

            pavleImg.css({
                'filter': 'grayscale(0)',
                '-webkit-filter': 'grayscale(0)'
            });

            if (win.width() >= 1200) {
                pavleWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');
                pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
                veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
                stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
            } else if (win.width() >= 992 && win.width() < 1200) {
                pavleWrapper.removeClass('col-md-3').addClass('col-md-6 expanded');
                pedjaWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
                veljkoWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
                stefanoWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
            } else if (win.width() >= 768 && win.width() < 992) {
                pavleWrapper.removeClass('col-sm-3').addClass('col-sm-6 expanded');
                pedjaWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
                veljkoWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
                stefanoWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
            } else if (win.width() < 768) {
                pavleWrapper.css({
                    'height': (windowHeight * 7) / 10 + 'px'
                });
                veljkoWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });
                pedjaWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });
                stefanoWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });
            }
            //pavleWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');                        

            pedjaImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });       
            //pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            veljkoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });      
            //veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            stefanoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });            
            //stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
            setTimeout(function() {
                pavleCardWrapper.css({
                    'visibility': 'visible',
                    'opacity': '1'
                });
            }, 500);
            setTimeout(function() {
                pavleCard.css({'opacity': '1'});
            }, 1000);
            setTimeout(function() {
                $('.name').css({'left': '20px'});                
            }, 1300);
            setTimeout(function() { 
                $('.name span').css({'margin-left': '20px'});                               
            }, 1500);
            setTimeout(function() {
                $('.about-text').css({'opacity': '1'});         
            }, 1700);
            setTimeout(function() {
                $('.social-media').css({'opacity': '1'});
            }, 2000);
        }             
    });

    stefanoImg.click(function() {  
        if (stefanoWrapper.prop('classList').length == 7) {
            console.log('sirim');

            stefanoImg.css({
                'filter': 'grayscale(0)',
                '-webkit-filter': 'grayscale(0)'
            });            

            if (win.width() >= 1200) {
                stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');
                pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
                pavleWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
                veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
            } else if (win.width() >= 992 && win.width() < 1200) {
                stefanoWrapper.removeClass('col-md-3').addClass('col-md-6 expanded');
                pedjaWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
                pavleWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
                veljkoWrapper.removeClass('col-md-3').addClass('col-md-2').css({'pointer-events': 'none'});
            } else if (win.width() >= 768 && win.width() < 992) {
                stefanoWrapper.removeClass('col-sm-3').addClass('col-sm-6 expanded');
                pedjaWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
                pavleWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
                veljkoWrapper.removeClass('col-sm-3').addClass('col-sm-2').css({'pointer-events': 'none'});
            } else if (win.width() < 768) {
                stefanoWrapper.css({
                    'height': (windowHeight * 7) / 10 + 'px'
                });
                veljkoWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });
                pedjaWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });
                pavleWrapper.css({
                    'height': (windowHeight) / 10 + 'px'
                });
            }
            //stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');            

            pedjaImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });       
            //pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            pavleImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });
            //pavleWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            veljkoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });      
            //veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
            setTimeout(function() {
                stefanoCardWrapper.css({
                    'visibility': 'visible',
                    'opacity': '1'
                });
            }, 500);
            setTimeout(function() {
                stefanoCard.css({'opacity': '1'});
            }, 1000);
            setTimeout(function() {
                $('.name').css({'left': '20px'});                
            }, 1300);
            setTimeout(function() { 
                $('.name span').css({'margin-left': '20px'});                               
            }, 1500);
            setTimeout(function() {
                $('.about-text').css({'opacity': '1'});         
            }, 1700);
            setTimeout(function() {
                $('.social-media').css({'opacity': '1'});
            }, 2000);
        }             
    });

    win.click(function(e) {
        if (e.target.id == 'veljko-card-wrapper') {
            console.log('skupljam');
            veljkoCard.css({'opacity': '0'});
    
            setTimeout(function() {
                veljkoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)'
                });
                veljkoCardWrapper.css({
                    'opacity': '0',
                    'visibility': 'hidden'
                });
                if (win.width() >= 1200) {
                    veljkoWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
                    pedjaWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                    pavleWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                    stefanoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                } else if (win.width() >= 992 && win.width() < 1200) {
                    veljkoWrapper.removeClass('col-md-6 expanded').addClass('col-md-3');
                    pedjaWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                    pavleWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                    stefanoWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                } else if (win.width() >= 768 && win.width() < 992) {
                    veljkoWrapper.removeClass('col-sm-6 expanded').addClass('col-sm-3');
                    pedjaWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                    pavleWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                    stefanoWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                } else if (win.width() < 768) {
                    veljkoWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    pedjaWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    pavleWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    stefanoWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                }
                
                //veljkoWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
    
                pedjaImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                //pedjaWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                pavleImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                //pavleWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                stefanoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'                
                });
                //stefanoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                $('.name').css({'left': '-700px'});            
                $('.name span').css({'margin-left': '-700px'});
                $('.about-text').css({'opacity': '0'});
                $('.social-media').css({'opacity': '0'});
            }, 1000);
        }

        if (e.target.id == 'pedja-card-wrapper') {
            console.log('skupljam');
            pedjaCard.css({'opacity': '0'});

            setTimeout(function() {
                pedjaImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)'
                });
                pedjaCardWrapper.css({
                    'opacity': '0',
                    'visibility': 'hidden'
                });
                if (win.width() >= 1200) {
                    pedjaWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
                    veljkoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                    pavleWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                    stefanoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                } else if (win.width() >= 992 && win.width() < 1200) {
                    pedjaWrapper.removeClass('col-md-6 expanded').addClass('col-md-3');
                    veljkoWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                    pavleWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                    stefanoWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                } else if (win.width() >= 768 && win.width() < 992) {
                    pedjaWrapper.removeClass('col-sm-6 expanded').addClass('col-sm-3');
                    veljkoWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                    pavleWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                    stefanoWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                } else if (win.width() < 768) {
                    pedjaWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    veljkoWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    pavleWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    stefanoWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                }
                //pedjaWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
    
                veljkoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });             
                //veljkoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                pavleImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                //pavleWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                stefanoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                //stefanoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                $('.name').css({'left': '-700px'});            
                $('.name span').css({'margin-left': '-700px'});
                $('.about-text').css({'opacity': '0'});
                $('.social-media').css({'opacity': '0'});
            }, 1000);
        }

        if (e.target.id == 'pavle-card-wrapper') {
            console.log('skupljam');
            pavleCard.css({'opacity': '0'});

            setTimeout(function() {
                pavleImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)'
                });
                pavleCardWrapper.css({
                    'opacity': '0',
                    'visibility': 'hidden'
                });
                if (win.width() >= 1200) {
                    pavleWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
                    pedjaWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                    veljkoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                    stefanoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                } else if (win.width() >= 992 && win.width() < 1200) {
                    pavleWrapper.removeClass('col-md-6 expanded').addClass('col-md-3');
                    pedjaWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                    veljkoWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                    stefanoWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                } else if (win.width() >= 768 && win.width() < 992) {
                    pavleWrapper.removeClass('col-sm-6 expanded').addClass('col-sm-3');
                    pedjaWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                    veljkoWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                    stefanoWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                } else if (win.width() < 768) {
                    pedjaWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    veljkoWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    pavleWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    stefanoWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                }
                //pavleWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
    
                pedjaImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });       
                //pedjaWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                veljkoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });       
                //veljkoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                stefanoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                //stefanoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                $('.name').css({'left': '-700px'});            
                $('.name span').css({'margin-left': '-700px'});
                $('.about-text').css({'opacity': '0'});
                $('.social-media').css({'opacity': '0'});
            }, 1000);
        }

        if (e.target.id == 'stefano-card-wrapper') {
            console.log('skupljam');
            stefanoCard.css({'opacity': '0'});

            setTimeout(function() {
                stefanoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)'
                });
                stefanoCardWrapper.css({
                    'opacity': '0',
                    'visibility': 'hidden'
                });
                if (win.width() >= 1200) {
                    stefanoWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
                    pedjaWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                    pavleWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                    veljkoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                } else if (win.width() >= 992 && win.width() < 1200) {
                    stefanoWrapper.removeClass('col-md-6 expanded').addClass('col-md-3');
                    pedjaWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                    pavleWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                    veljkoWrapper.removeClass('col-md-2').addClass('col-md-3').css({'pointer-events': 'auto'});
                } else if (win.width() >= 768 && win.width() < 992) {
                    stefanoWrapper.removeClass('col-sm-6 expanded').addClass('col-sm-3');
                    pedjaWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                    pavleWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                    veljkoWrapper.removeClass('col-sm-2').addClass('col-sm-3').css({'pointer-events': 'auto'});
                } else if (win.width() < 768) {
                    pedjaWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    veljkoWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    pavleWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                    stefanoWrapper.css({
                        'height': landingImgWrapperMobileHeight + 'px'
                    });
                }
                //stefanoWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
    
                pedjaImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });        
                //pedjaWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                pavleImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                //pavleWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                veljkoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });    
                //veljkoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
                $('.name').css({'left': '-700px'});            
                $('.name span').css({'margin-left': '-700px'});
                $('.about-text').css({'opacity': '0'});
                $('.social-media').css({'opacity': '0'});
            }, 1000);
        }
    }); 
    
    
    $('a[data-toggle="collapse"').click(function() {
        $(this).find('i.fa').toggleClass('opened');
    });                   
        
    $("[data-toggle='collapse']").click(function () {
        $('.navbar-header').toggleClass('active');
    });
    
    $('.comment-stars-rating1').click(function() {        
        if ($('.comment-stars-rating2').hasClass('checked') == true) {
            $('.comment-stars-rating2').removeClass('checked');
            $('.comment-stars-rating3').removeClass('checked');
            $('.comment-stars-rating4').removeClass('checked');
            $('.comment-stars-rating5').removeClass('checked');
        } else {            
            $(this).addClass('checked');            
        }        
    });

    $('.comment-stars-rating2').click(function() {
        if ($('.comment-stars-rating3').hasClass('checked') == true) {            
            $('.comment-stars-rating3').removeClass('checked');
            $('.comment-stars-rating4').removeClass('checked');
            $('.comment-stars-rating5').removeClass('checked');
        } else {            
            $('.comment-stars-rating1').addClass('checked');
            $(this).addClass('checked');
        }        
    });

    $('.comment-stars-rating3').click(function() {
        if ($('.comment-stars-rating4').hasClass('checked') == true) {            
            $('.comment-stars-rating4').removeClass('checked');
            $('.comment-stars-rating5').removeClass('checked');
        } else {            
            $('.comment-stars-rating1').addClass('checked');
            $('.comment-stars-rating2').addClass('checked');
            $(this).addClass('checked');
        } 
    });
    $('.comment-stars-rating4').click(function() {
        if ($('.comment-stars-rating5').hasClass('checked') == true) {            
            $('.comment-stars-rating5').removeClass('checked');
        } else {            
            $('.comment-stars-rating1').addClass('checked');
            $('.comment-stars-rating2').addClass('checked');
            $('.comment-stars-rating3').addClass('checked');
            $(this).addClass('checked');
        }
    });
    $('.comment-stars-rating5').click(function() {
        if ($('.comment-stars-rating4').hasClass('checked') == false) {            
            $('.comment-stars-rating1').addClass('checked');
            $('.comment-stars-rating2').addClass('checked');
            $('.comment-stars-rating3').addClass('checked');
            $('.comment-stars-rating4').addClass('checked');
            $(this).addClass('checked');
        } else {                        
            $(this).addClass('checked');
        }
    });
   
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
    
    var ytVideo = $(".yt-video");
    var fb = $("#fb");
    var yt = $("#yt");
    var insta = $("#insta");
    var ng = $("#ng");
        
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

