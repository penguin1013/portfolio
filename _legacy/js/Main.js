
require([
    "App",
    "Header",
    "Section1",
	"Section5"
], function( App, Header, Section1, Section5 ){

    function init(){
        App.Init();
        Header.Init();
        Section1.Init();
		Section5.Init();

        loading();
        
        create();
        addEvent();
    }

    var _wid;
    var _hei;

    var _section = [];                     //section list
    var _isShow = [];

    var $gnb;
    var $h1, $title;



    function create(){
        _wid = App.window.width(); 
        _hei =	App.window.height(); 

        _section = $( "section" );
        _section.each( function( index ){
            _isShow[ index ] = false;
        });

        $h1 = $("h1");
        $title = $(".title");
        $gnb = $('#gnb').find("ul li");    

        //graphDrawing();
        //circleDrawing();
    }
    
    function loading() {
        setTimeout(function(){
            $("#wrap").addClass('open');
            $(".video-wrap").show();
            $(".loading").hide();
        },100);

        /*
        TweenMax.to(_score, 1, {score:"100", roundProps:"score", ease:Circ.easeOut, onUpdate:function(){
            $(".number").text(_score.score);
        }});
        */
    }



    function addEvent(){
        scrollEvent(null);
        App.window.on(App.Events.SCROLL, scrollEvent );
        
        resizeEvent(null);
        App.window.on(App.Events.RESIZE, resizeEvent);  

        $('a[href*=#]').on('click', function(e) {
            e.preventDefault();
            App.html.animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
    }

    function scrollEvent(e){
        var sT = App.window.scrollTop();
                    
        // gnb
        var idx = 0;
        _section.each( function( index ){
            if(sT > $(this).offset().top-App.window.height()+App.window.height()/2){
                idx = index;
            }
        });
        
        gnbScroll(idx);

        _section.each(function(index){
            if(sT > $(this).offset().top-App.window.height()+App.window.height()/2){
                if(_isShow[index] == true){
                    return;
                }

                _isShow[index] = true;
                                
                switch(index){
                    case 0: showSection1();break;
                    case 1: showSection2();break;
                    case 2: showSection3();break;
                    case 3: showSection4();break;
                    case 4: showSection5();break;
                }

                
            }else{
/*
                if(_isShow[index] == false){
                    return;
                }

                _isShow[index] = false;        

                switch(index){
                    case 1: showBackSection1();break;
                    case 2: showBackSection2();break;
                    case 3: showBackSection3();break;
                    case 4: showBackSection4();break;
                }
*/
                
            }
        
        });
    }


    var curPerc = 0; 
    function circleDrawing(){
        animateCircle(curPerc, 101, 'canvas1');
        animateCircle(curPerc, 101, 'canvas2');
        animateCircle(curPerc, 101, 'canvas3');
        animateCircle(curPerc, 101, 'canvas4');
        animateCircle(curPerc, 101, 'canvas5');
    }
    
    function animateCircle(current , endPercent, name) {
        var canvas = document.getElementById(name);
        var context = canvas.getContext('2d');
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var radius = 75;
        var circ = Math.PI * 2;
        var quart = Math.PI / 2;

        context.lineWidth = 10;
        context.strokeStyle = '#fff';
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
        context.stroke();
        curPerc++;
        if (curPerc < endPercent) {
            requestAnimationFrame(function () {
                animateCircle(curPerc / 100, endPercent, name)
            });
        }
    }

    function showSection1(){
        
    }

    var _timer;
    function showSection2(){
        if(_timer) {
            window.clearTimeout(_timer);
        }

        TweenMax.to($h1, 0.5, {opacity: 0 ,  ease:Back.easeOut});
        TweenMax.fromTo($("#section2").find($title).children('span'), 1,{y:-100,  opacity : 0}, {y : 0 , opacity : 1 ,  ease:Bounce.easeOut});
        _timer = setTimeout(function(){      
            TweenMax.fromTo($(".photo>img"), 0.45, {opacity:0, y:30 }, {opacity:1, y:-6, delay:0.15, ease:Back.easeOut, onComplete:function(){
                TweenMax.to($(".photo>img"), 0.15, {opacity:1, y:-1, ease:Back.easeOut,  onComplete:function(){
                    TweenMax.to($(".photo>img"), 0.05, {opacity:1, y:0, ease:Back.easeOut }); 
                }});
            }});

            $(".profile").children('li').each( function( i ){         
                if(i>0){
                    TweenMax.fromTo(  $(this), 0.5, {opacity:0, y:30 },{ opacity : 1, y : 0, delay: 0.07*i,  ease:Cubic.easeOut});
                }else{
                    TweenMax.fromTo(  $(this), 0.3, {opacity:0, y:30 }, { opacity : 1, y : 0, ease:Cubic.easeInOut });
                }
            });

        },400);

    }

    var _timer2;
    function showSection3(){
        if(_timer2) {
            window.clearTimeout(_timer2);
        }

        TweenMax.fromTo($("#section3").find($title).children('span'), 1,{y:-100,  opacity : 0}, {y : 0 , opacity : 1 ,  ease:Bounce.easeOut});

        _timer2 = setTimeout(function(){      
            $(".timeline-left").find('li').each( function( i ){         
                if(i>0){
                    TweenMax.fromTo(  $(this), 0.5, {opacity:0, x:30 },{ opacity : 1, x : 0, delay: 0.07*i,  ease:Cubic.easeOut});
                }else{
                    TweenMax.fromTo(  $(this), 0.3, {opacity:0, x:30 }, { opacity : 1, x : 0, ease:Cubic.easeInOut });
                }
            });

            $(".timeline-right").find('li').each( function( i ){         
                if(i>0){
                    TweenMax.fromTo(  $(this), 0.5, {opacity:0, x:-30 },{ opacity : 1, x : 0, delay: 0.07*i,  ease:Cubic.easeOut});
                }else{
                    TweenMax.fromTo(  $(this), 0.3, {opacity:0, x:-30 }, { opacity : 1, x : 0, ease:Cubic.easeInOut });
                }
            });
        },700);

    }

    var _timer3;
    function showSection4(){
        if(_timer3) {
            window.clearTimeout(_timer3);
        }

        TweenMax.fromTo($("#section4").find($title).children('span'), 1,{y:-100,  opacity : 0}, {y : 0 , opacity : 1 ,  ease:Bounce.easeOut});
        _timer3 = setTimeout(function(){      
            TweenMax.fromTo( $(".parallax>h3"), 0.5,{y:70,  opacity : 0}, {y : 0 , opacity : 1 ,  ease:Back.easeOut});
            if(_wid > App.GlobalVars.BREAKPOINT_TABLET2){
                TweenMax.fromTo($(".parallax-left"), 0.5,{x:-100,  opacity : 0}, {x : 0 , opacity : 1 ,  ease:Back.easeOut});
                TweenMax.fromTo($(".parallax-right"), 0.5,{x:100,  opacity : 0}, {x : 0 , opacity : 1 ,  ease:Back.easeOut});
            }else{
                TweenMax.fromTo($(".parallax-left"), 0.5,{y:20,  opacity : 0}, {y : 0 , opacity : 1 ,  delay:0.15, ease:Back.easeOut});
                TweenMax.fromTo($(".parallax-right"), 0.5,{y:20,  opacity : 0}, {y : 0 , opacity : 1 , delay:0.25, ease:Back.easeOut});
            }

            circleDrawing();
            count('.count1', 100);
            count('.count2', 100);
            count('.count3', 100);
            count('.count4', 100);
            count('.count5', 100);
        },300);
    }

    // 숫자업데이트 화면 보여주기
    function count($selector, $total){
        var counter = { var: 0 };
        TweenMax.to(counter, 3, {
            var: $total, 
            onUpdate: function () {
               $($selector).html(Math.ceil(counter.var));
            },
            onComplete: function(){
                //count();
            },    
            ease:Circ.easeOut
        });
    }


    function showSection5(){
        TweenMax.fromTo($("#section5").find($title).children('span'), 1,{y:-100,  opacity : 0}, {y : 0 , opacity : 1 ,  ease:Bounce.easeOut});


    }



    function gnbScroll($idx){		
        var idx = $idx;

        $gnb.removeClass("on");
        $gnb.eq(idx).addClass("on");

        // 타이틀모션
       $title.removeClass("on");
       $("section").eq(idx).find($title).addClass("on");

    }
    
    function resizeEvent(){
        _wid =	App.window.width();	
        _hei =	App.window.height();	

    }

    $( document ).ready( function(){
        init();
    });
})