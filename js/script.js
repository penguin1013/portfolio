var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
var agent = navigator.userAgent.toLowerCase();
var trident = navigator.userAgent.match(/Trident\/(\d.\d)/i);

var _w;
var _breakpoint = 720;
var _breakpointDesktop = 1100;
var _wrap;
var _navHei;
var _wid;

var _gnb;
var _menu;
var _menuIcon;
var _dim;


var _header;
var _searchOpenBtn;
var _searchCloseBtn;

$(function(){
    init();
});

function init(){
    create();
    addEvent();

}

function create(){
    _w = $(window);
    _wrap = $('#wrap');
    _wid = _w.width();
    
    _gnb = $("#gnb");
    _menu = $(".menu");
    _menuIcon = $(".menu-icon");
    _dim = $( ".dim" );

    _header = $("header");
    _navHei = _header.height();

	_searchOpenBtn = $(".btn-open-search");
	_searchCloseBtn = $(".btn-close-search");

}

function addEvent(){
    _w.on("resize", resizeEvent);
    resizeEvent();

    _w.on("scroll", scrollEvent);
    scrollEvent();

    _menuIcon.on("click", menuEvent);

	_searchOpenBtn.on("click", searchOpenEvent);
	_searchCloseBtn.on("click", searchCloseEvent);

	categoryListEvent();
	tabEvent();

	$(".btn-open").on("click",btnViewOpen);
    //tabEvent('.section-video');
    //slideEvent();
    // faqClickEvent();
   
 
	pageMove('.page-move');

}

function btnViewOpen(){
	$(".main-view-img").toggleClass("active");
	$(this).hide();
}

function searchOpenEvent(){
	$("body").addClass("onOpenSearch");
	$(".open-search").find("input").val("");
	if(_wid <= _breakpointDesktop){
		_dim.show();
	}else{
		_dim.hide();
	}
}


function searchCloseEvent(){
	$("body").removeClass("onOpenSearch");
	_dim.hide();
}

function scrollEvent(){
    var st = $(window).scrollTop();
    var sh = $(window).height() / 1.2;
    var section = $('.section');

    section.each(function(i){
        if( st > section.eq(i).offset().top - sh){
            $(this).addClass('active');
        }
        //  else {
        //     $(this).removeClass('active');
        // }
    });

	// top 버튼 이벤트주기
	var scrollTop = Math.round(st)+10;
	var btnTop = $(".btn-top");
	if(scrollTop > $(document).height() - $(window).height()){
		//스크롤이 끝에 도달했을때 실행될 이벤트
		btnTop.css({bottom:100});
		
	} else {
		//아닐때 이벤트
		btnTop.css({bottom:"7%"});
	}



    // if(st > _navHei){
    //    // _header.addClass("fixed");
	//    $(".fixed-bottom").css({bottom:0});
    // }else{
    //     //_header.removeClass("fixed");
	// 	$(".fixed-bottom").css({bottom:-200});
    // }

}

function resizeEvent(){
    _wid = _w.width();
    _navHei = _header.height();

    $('.responsive').each(function() {
        var $src = $(this).attr("src");
        var val = (_wid > _breakpoint) ? $src.replace('mobile', 'pc') : $src.replace('pc', 'mobile');

        $(this).attr("src", val);
    });

    if(_wid > _breakpointDesktop-20){
        _gnb.css("display","flex");
        _menu.hide();
       
    }else{
        _gnb.hide();
        _menu.show();
        
    }

	if($("body").hasClass("onOpenSearch")){
		if(_wid <= _breakpointDesktop){
			_dim.show();
		}else{
			_dim.hide();
		}
	}
	var plus =   (_wid > _breakpoint) ? 90 : 80;
	var hei = $("header").height() + $("footer").height()+plus;
	$("#contents").css({"min-height": _w.height()-hei});
}

function menuEvent(){
    $(this).toggleClass("active");

    if(_menuIcon.hasClass("active")){
        _dim.show();
        _gnb.slideDown();
        _gnb.css("display","block");
        _header.addClass("change");

    }else{
        _dim.hide();
        _gnb.slideUp();
        _header.removeClass("change");
    }
}

function categoryListEvent(){
	$(".category-list").find("li").on("click", function(){
		$(".category-list").find("li").removeClass("active");
		$(this).addClass("active");
	});
}

function slideEvent() {
    $('.slide-container').each(function(key, item) {
		var sliderIdName = 'slider' + key;
			this.id = sliderIdName;
		var sliderId = '#' + sliderIdName;

        $(sliderId).not('.slick-initialized').slick({
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: true,
            arrows: true,
            dots: false,
            slidesToScroll: 1,
            speed: 700,
            slidesToShow: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
            centerMode: true,
            variableWidth: true,
            initialSlide:0
        });


	});
}

function faqClickEvent(){
    $('.fag-toggle').on('click', function(){
        var $this = $(this);

        $this.parents('dl').toggleClass('unfold').siblings().removeClass('unfold');
    });
}

function tabEvent(){
    $('.main-tab-list').children('li').on('click', function(){
        var idx = $(this).index(),
            tabList = $('.main-tab-list').children('li');

		$(".main-view-img").removeClass("active");

        tabList.removeClass("active");
        $(this).addClass("active");

        $('.main-tab-view').hide();
        $('.main-tab-view').eq(idx).show();
    });
}

function pageMove($selector, $position){
	if($position == undefined) $position = 0;

	var selector = $selector;
	$(selector).on('click', function (e) {
		e.preventDefault();

		var _top = $($(this).attr('href'));
		var $target = _top.offset().top;

    // 모바일에서 gnb 클릭시 gnb 닫기 
    if(_wid < _breakpoint){
      _menuIcon.removeClass("active");
      _dim.hide();
      _gnb.slideUp();
      _header.removeClass("change");
    }

		$('html,body').animate({
			scrollTop: $target+$position
		}, 500);


	});
}

function popupOpen($selector){
	$($selector).show();

    if($selector == "#popupCard"){
        btnNextClick(1);
        slideEvent();
    }
    
	if($(window).height() <= $($selector).find(".popup-wrap").outerHeight() || $selector == "#popupRequest"){
		// 팝업이클때는 
		var st = $(window).scrollTop()+50;
		$($selector).addClass("wide").css({top:st});
		$("body").append('<div class="popup-dim"></div>');
	}else{
		// 팝업이 작을때는
		$($selector).removeClass("wide");
		$($selector).css({display:"flex"});
	}
}

// popupClose('#brandLayerEvent');
function popupClose($selector){
    //$('.slide-container').slick("unslick");
	$($selector).hide();

	if($(".popup-dim").is(':visible')){
		$(".popup-dim").remove();
	}

}




