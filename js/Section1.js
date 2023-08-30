

define([
    "App"
], function(App){

    var Section1 = (function(){

        function Init(){
            App.Init();

            create();
            addEvent();

            initAnimate();
        }

        function initAnimate(){
            $('.text_wrap p').each(function(){
				var _offy	=	($(this).index() == 2)?-70:70;
				TweenMax.set($(this) , {y : _offy , alpha : 0});

				TweenMax.to($(this) , 0.9 , {y : 0 , alpha : 1 , delay : ($(this).index() * 0.15)+0.5 , ease:Back.easeOut});
            });
        }
        var _wid;
        var _hei;
        function create(){
            _wid = App.window.width(); 
            _hei =	App.window.height(); 
        }
    
        function addEvent(){
            scrollEvent(null);
            App.window.on(App.Events.SCROLL, scrollEvent );
            
            resizeEvent(null);
            App.window.on(App.Events.RESIZE, resizeEvent);    
        }
    
        function scrollEvent(){           
           
        }
        
    
        function resizeEvent(){
            _wid =	App.window.width();	
            _hei =	App.window.height();	
            if(_wid < App.GlobalVars.BREAKPOINT_TABLET2){
                if(_wid > _hei) $("#section1").css({height:_wid});
                else $("#section1").css({height:_hei});
            }else{
                $("#section1").css({height:_hei});
            }

            // 영상리사이징
            $('.video_wrap').each(function(){
                var $node = $(this);	
                var ratio = 16/9;
                var width = $node.width(),
                    pWidth,
                    height = $node.height(),
                    pHeight,
                    $av = $node.find('video');
   
                if (width / ratio < height) { 
                    pWidth = Math.ceil(height * ratio);
                    $av.width(pWidth).height(height).css({left: (width - pWidth) / 2, top: 0}); 
                } else { 
                    pHeight = Math.ceil(width / ratio);
                    $av.width(width).height(pHeight).css({left: 0, top: (height - pHeight) / 2});
                }	
            });

            // 메인 언어 리사이징
            if( _wid <= App.GlobalVars.BREAKPOINT_MOBILE){
                TweenMax.to($(".text_wrap>p:eq(2)") , 0.5 , {scale:0.7, ease:Back.easeOut});
                $(".jquery>img").attr({src:"image/pc/home_icon_03_m.png"});
                $(".boots>img").attr({src:"image/pc/home_icon_04_m.png"});
            }else{
                TweenMax.to($(".text_wrap>p:eq(2)") , 0.5 , {scale:1, ease:Back.easeOut});
                $(".jquery>img").attr({src:"image/pc/home_icon_03.png"});
                $(".boots>img").attr({src:"image/pc/home_icon_04.png"});
            }
        }

        return{
            Init : Init
        }

    })();

    return Section1;
});
