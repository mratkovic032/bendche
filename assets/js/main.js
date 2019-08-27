$(document).ready(function () { 

    var win = $(window);
    var windowHeight = win.height();
    var winodwWidth = win.width(); 

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
    var aboutHeadingTop = windowHeight - (aboutHeadline.height() * 1.5);
    aboutHeadline.css({
        'top': aboutHeadingTop + 'px'
    })         

    var aboutSubHeadline1 = $('.sub-headline-1');
    var aboutSubHeadline2 = $('.sub-headline-2');
    var aboutSubHeadline3 = $('.sub-headline-3');
    var aboutSubHeadline1Top = aboutHeadingTop - (aboutSubHeadline1.height() * 1.9);
    var aboutSubHeadline2Top = aboutHeadingTop - (aboutSubHeadline2.height() * 1.3);
    var aboutSubHeadline3Top = aboutHeadingTop - (aboutSubHeadline3.height() * 0.7);
    aboutSubHeadline1.css({'top': aboutSubHeadline1Top + 'px'});
    aboutSubHeadline2.css({'top': aboutSubHeadline2Top + 'px'});
    aboutSubHeadline3.css({'top': aboutSubHeadline3Top + 'px'});

    var aboutContentWrapper = $('.about-content-wrapper');        
    var aboutContentWrapperTop = (aboutHeadingTop - (aboutContentWrapper.height() - aboutHeadline.height())) - 30;
    aboutContentWrapper.css({'top': aboutContentWrapperTop + 'px'});

    var lokalMargin = (theEvent.height() - lokalInfo.height()) / 2;
    //console.log(lokalMargin + "je margina top");

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

    // var contactForm = $('.contact-form');
    // var contactFormMarginTop = ($('#contact-row').height() - contactForm.height()) / 2;    
    // contactForm.css({'margin-top': contactFormMarginTop + 'px'});
    
    $('.vid-item').click(function() {
        var youtubeId = $(this).attr('id');
        $('#vid-frame').attr('src', 'http://www.youtube.com/embed/' + youtubeId + '?controls=0&autoplay=1');        
    });

    $('.arrow-up-wrapper').css({
        'width': $('.vid-list-container').width() + 'px'
    });
    var arrowDownWrapperTop = ($('#band').offset().top * 3) + 140 + ($('.vid-list-container').height() - $('.arrow-down-wrapper').height());
    $('.arrow-down-wrapper').css({
        'width': $('.vid-list-container').width() + 'px',
        'top': + arrowDownWrapperTop - 2 + 'px'
    });

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
    
    lokalWrapper.css({'margin-top': lokalMargin + 'px'});
    lokalInfo.css({'margin-top': lokalMargin + 'px'});  
    
    var eventMoreInfo = $('.event-more-info');
    var lokalMoreInfo = $('.lokal-more-info');
    var eventMoreInfoOpened = false;

    eventMoreInfo.click(function() {
        var buttonId = $(this).attr("id");        
        var eventNumber = buttonId.substring(5, 6);

        if (!eventMoreInfoOpened) {
            $(this).text('zatvori');
            for (var i = 1; i < 5; i++) {
                if (eventNumber != i) {
                    var eventToHide = $('#event' + i);
                    // eventToHide.css({'opacity': '0'});
                    eventToHide.hide();
                    eventToHide.css({'animation-name': 'none'});
                }
            }                        

            setTimeout(function() {
                lokalWrapper.css({'margin-top':'0px'});
                lokalInfo.css({'margin-top': '0px'});  

                theEvent.css({'height': '100%'});
                
            }, 500);                        

            setTimeout(function() {
                lokalMoreInfo.css({'overflow': 'visible'});
            }, 800);

            eventMoreInfoOpened = true;
        } else {
            $(this).text('više infomacija');
            lokalWrapper.css({'margin-top': lokalMargin + 'px'});
            lokalInfo.css({'margin-top': lokalMargin + 'px'});
            
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
            $('#big-logo-brand').css({
                'top': '-10px'
            });    
        } else {
            $('div#myNavbar.collapse.navbar-collapse').css({"padding": "20px 0"});
            $('.navbar-wrapper').css({"border-bottom": "none"});
            $('nav.navbar.navbar-inverse').css({"background-color": "rgba(0,0,0,0)"});
            $('ul.nav.navbar-nav.navbar-right li a').removeClass('changed');
            $('ul.nav.navbar-nav.navbar-right li a').css({"background-color": "rgba(25,25,25,0)"});
            $('ul.nav.navbar-nav.navbar-right li.active a').css({"background-color": "rgba(25,25,25,0)"});
            $('#big-logo-brand').css({
                "top": "0px"
            });
        }
        
        if (win.scrollTop() >= eventsDistance - (windowHeight / 2)) {            
            setTimeout(function() {                        
                eventsRotatedText.css({
                    'opacity': '1'
                });
                
            }, 2400);
        }
    });           

     
    // dinamically setting image height and position
    var offsetX = (winodwWidth - 2044) / 2;
    var offsetY = (windowHeight - 1150) / 2;
    
    landingImgWrapper.css({'height': windowHeight + 'px'});
    //landignImg.css({'top': offsetY + 'px'});

    // if (winodwWidth >= 768) {
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
        if (veljkoWrapper.prop('classList').length == 4) {
            console.log('sirim');            
            
            veljkoImg.css({
                'filter': 'grayscale(0)',
                '-webkit-filter': 'grayscale(0)'                              
            });
            veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');                        

            pedjaImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'              
            });                 
            pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            pavleImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });
            pavleWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            stefanoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });        
            stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
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
        if (pedjaWrapper.prop('classList').length == 4) {
            console.log('sirim');

            pedjaImg.css({
                'filter': 'grayscale(0)',
                '-webkit-filter': 'grayscale(0)'
            });
            pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');            

            veljkoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });      
            veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            pavleImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });
            pavleWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            stefanoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });
            stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
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
        if (pavleWrapper.prop('classList').length == 4) {
            console.log('sirim');

            pavleImg.css({
                'filter': 'grayscale(0)',
                '-webkit-filter': 'grayscale(0)'
            });
            pavleWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');                        

            pedjaImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });       
            pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            veljkoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });      
            veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            stefanoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });            
            stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
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
        if (stefanoWrapper.prop('classList').length == 4) {
            console.log('sirim');

            stefanoImg.css({
                'filter': 'grayscale(0)',
                '-webkit-filter': 'grayscale(0)'
            });            
            stefanoWrapper.removeClass('col-lg-3').addClass('col-lg-6 expanded');            

            pedjaImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });       
            pedjaWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            pavleImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });
            pavleWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});

            veljkoImg.css({
                'filter': 'grayscale(95%)',
                '-webkit-filter': 'grayscale(95%)',
                'pointer-events': 'none'
            });      
            veljkoWrapper.removeClass('col-lg-3').addClass('col-lg-2').css({'pointer-events': 'none'});
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
                veljkoWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
    
                pedjaImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                pedjaWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                pavleImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                pavleWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                stefanoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'                
                });
                stefanoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
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
                pedjaWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
    
                veljkoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });             
                veljkoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                pavleImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                pavleWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                stefanoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                stefanoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
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
                pavleWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
    
                pedjaImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });       
                pedjaWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                veljkoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });       
                veljkoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                stefanoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                stefanoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
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
                stefanoWrapper.removeClass('col-lg-6 expanded').addClass('col-lg-3');
    
                pedjaImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });        
                pedjaWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                pavleImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });
                pavleWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
    
                veljkoImg.css({
                    'filter': 'grayscale(50%)',
                    '-webkit-filter': 'grayscale(50%)',
                    'pointer-events': 'auto'
                });    
                veljkoWrapper.removeClass('col-lg-2').addClass('col-lg-3').css({'pointer-events': 'auto'});
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