

define([
    "App"
], function(App){

    var Header = (function(){

        function Init(){
            App.Init();

            create();
            addEvent();
        }

        var _menuFlag = true;
        var _st, _wid, _hei;
        var $header, $bg, $btnMenu, $gnb, $gnbList;

        function create(){
            _st = App.window.scrollTop();		
            _wid =	App.window.width();	
            _hei =	App.window.height();
            
            $header = $("#header");
            $bg = $header.find('.bg');
            $btnMenu = $(".btn_menu");
            $gnb = $('#gnb');
            $gnbList = $gnb.find("ul li");

    
        }
    
        function addEvent(){
            scrollEvent(null);
            App.window.on(App.Events.SCROLL, scrollEvent );
            
            resizeEvent(null);
            App.window.on(App.Events.RESIZE, resizeEvent);
    
            $btnMenu.on("click",menuOpen );
            $gnbList.children("a").on("click", menuOpen);

        }
    
        function scrollEvent(){
            _st	=	App.window.scrollTop();	
            _wid =	App.window.width();		
            _hei =	App.window.height();	
            
            if(_st > 100){
                // 헤더에 이벤트 주기
            }
        }
    
        function resizeEvent(){
            if (_wid != App.window.width()) {
                _st	=	App.window.scrollTop();	
                _wid =	App.window.width();		
                _hei =	App.window.height();		
            }
            
            if($header.hasClass('open')){
                var _FN	=	(_wid>_hei)?_wid:_hei;
                var scale =  (_wid <= App.GlobalVars.BREAKPOINT_MOBILE)? _FN * 5: _FN * 3;
                TweenMax.set($bg.find('span'),{width :scale , height : scale , x : ((scale)/2)*-1 , y : ((scale)/2)*-1});
            }
        }
    
       function menuOpen(){
            var _FN	=	(_wid>_hei)?_wid:_hei;		
            if(_menuFlag){
                if($header.hasClass('open')){
                    var _scale = 60;
                    TweenMax.to($bg.find('span'),0.65,{width : _scale , height :_scale , x : 0 , y : 0 , ease:Quad.easeOut , onComplete : 
                        function(){
                        _menuFlag = true;
                        $header.removeClass('open');
                        $('html').removeClass('fix');
                     }});
                     
                     $gnbList.each(function(){
                        var _t = $(this).find('a');
                        TweenMax.to(_t , 0.45 , {y : _t.parent().innerHeight()*-1 , delay : 0 , ease:Circ.easeOut});
                    });

                    parentScrollEnable();
   
                }else{
                   var scale = (_wid <= App.GlobalVars.BREAKPOINT_MOBILE)? _FN * 5: _FN * 3;

                    TweenMax.to($bg.find('span'),0.45,{width : scale , height : scale , x : ((scale)/2)*-1 , y : ((scale)/2)*-1 , ease:Circ.easeIn , onComplete : function(){
                        _menuFlag = true;
                    }});				
    
                    
                    $gnbList.each(function(){
                        var _t =	$(this).find('a');
                        var _offy =	$(this).parent().innerHeight();
                        var _delay	=	0.1;
                        TweenMax.set(_t , {y : _offy , alpha : 1});
                        TweenMax.to(_t , 0.45 , {y : 0 , delay : _delay , ease:Circ.easeOut});
                    });
    
                    $header.addClass('open');  
                    $('html').addClass('fix'); 
                    parentScrollDisable();
                }
                _menuFlag = false;
            }
        }
        
    
         function parentScrollDisable(){		
            App.body.on('scroll touchmove mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        }
    
        function parentScrollEnable(){
            App.body.off('scroll touchmove mousewheel');
        }

        return{
            Init : Init
        }

    })();

    return Header;
});
