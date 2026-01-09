

define([
    "App"
], function(App){

    var Section5 = (function(){

        function Init(){
            App.Init();

			drawPortfolioList();
        }

		var portfolioList = [
			{
				thumbnail: 'image/common/img_eduwill.jpg',
				brand:'에듀윌 사이트<br/>웹, 모바일 + APP',
				tag: '#Eduwill',
				link:"javascript:alert('준비중입니다.');"
			},
			{
				thumbnail: 'image/common/img_eduwill.jpg',
				brand:'에듀윌 사이트<br/>웹, 모바일 + APP',
				tag: '#15. Eduwill',
				link:'https://brand.eduwill.net/sugang/view.will?mSeq=28406&progress=Q'
			},
			{
				thumbnail: 'image/common/img_eduwill.jpg',
				brand:'에듀윌 사이트<br/>웹, 모바일 + APP',
				tag: '#15. Eduwill',
				link:'https://brand.eduwill.net/sugang/view.will?mSeq=28406&progress=Q'
			},
			{
				thumbnail: 'image/common/img_eduwill.jpg',
				brand:'에듀윌 사이트<br/>웹, 모바일 + APP',
				tag: '#15. Eduwill',
				link:'https://brand.eduwill.net/sugang/view.will?mSeq=28406&progress=Q'
			},
			{
				thumbnail: 'image/common/img_eduwill.jpg',
				brand:'에듀윌 사이트<br/>웹, 모바일 + APP',
				tag: '#15. Eduwill',
				link:'https://brand.eduwill.net/sugang/view.will?mSeq=28406&progress=Q'
			},
			{
				thumbnail: 'image/common/img_eduwill.jpg',
				brand:'에듀윌 사이트<br/>웹, 모바일 + APP',
				tag: '#15. Eduwill',
				link:'https://brand.eduwill.net/sugang/view.will?mSeq=28406&progress=Q'
			},
			{
				thumbnail: 'image/common/img_eduwill.jpg',
				brand:'에듀윌 사이트<br/>웹, 모바일 + APP',
				tag: '#15. Eduwill',
				link:'https://brand.eduwill.net/sugang/view.will?mSeq=28406&progress=Q'
			},
			{
				thumbnail: 'image/common/img_eduwill.jpg',
				brand:'에듀윌 사이트<br/>웹, 모바일 + APP',
				tag: '#15. Eduwill',
				link:'https://brand.eduwill.net/sugang/view.will?mSeq=28406&progress=Q'
			},
			{
				thumbnail: 'image/common/img_eduwill.jpg',
				brand:'에듀윌 사이트<br/>웹, 모바일 + APP',
				tag: '#15. Eduwill',
				link:'https://brand.eduwill.net/sugang/view.will?mSeq=28406&progress=Q'
			},
			{
				thumbnail: 'image/common/img_eduwill.jpg',
				brand:'에듀윌 사이트<br/>웹, 모바일 + APP',
				tag: '#15. Eduwill',
				link:'https://brand.eduwill.net/sugang/view.will?mSeq=28406&progress=Q'
			},
		];

		function setTag(thumbnail, brand, tag, link) {
			$('#portfolioList').append(
				'<div class="col"><a href="'+link+'"><figure><img src="'+thumbnail+'" alt="" /><figcaption><div class="txt-box">'+brand+'</div><div class="heading"><h2>'+tag+'</h2></div></figcaption></figure></a></div>'
			);

			$('#portfolioList a').each(function() {
				var href = $(this).attr('href');

				if (href && href.includes('javascript:')) {
					$(this).attr('target', '_self');
				} else {
					$(this).attr('target', '_blank');
				}
			});
		}
	
		function drawPortfolioList(){
			for (var i = 0; i < portfolioList.length; i++) {
				var thumbnail = portfolioList[i].thumbnail;
				var brand = portfolioList[i].brand;
				var tag = portfolioList[i].tag;
				var link = portfolioList[i].link;

				setTag(thumbnail, brand, tag, link);
			}
		}

        return{
            Init : Init
        }

    })();

    return Section5;
});
