$(function() {


	// ハンバーガーメニュー
	$('.hamburger').on('click',function() {
		hamburger();
	})

	//navi a をlクリックした場合
	$('#navi a').on('click',function() {
		hamburger();
	})


	function hamburger() {
	$('.hamburger').toggleClass('active');
		if($('.hamburger').hasClass('active') ) {
			$('#nav').addClass('active');
		}else {
			$('#nav').removeClass('active');

		}
	}

		// スムーススクロール
		$('a[href^="#"]').on('click',function() {
			let href= $(this).attr("href");
			let target = $(href == "#" || href == "" ? 'html' : href);
			let position = target.offset().top;
			$('body,html').animate({scrollTop:position}, 400, 'swing');
	
		 return false;
		});

	// 画像フェードイン
	$(".inview").on("inview", function (event, isInView) {
		if (isInView) {
			// 要素（inviewクラス）が表示されたらshowクラスを追加する
			$(this).stop().addClass("show");
		}
	});


	// スクロールした時の動作
	$(window).scroll(function() {
    let scroll = $(window).scrollTop();

		//メインビジュアルの拡大
		mv_scale(scroll);

	  // ロゴ、ハンバーガーメニューの表示
		if( scroll > 570 ) {
			$('.l-header').fadeIn(500);
			$('.l-header__logo').fadeIn(500);
			$('.hamburger').fadeIn(500);
		}else {
			$('.l-header').fadeOut(500);
			$('.l-header__logo').fadeOut(500);
			$('.hamburger').fadeOut(500);
		} 


		// accessの背景画像表示
		let style = $('#style').offset().top - $(window).height() ;
		let access_position = $('#access').offset().top - $(window).height();

		let contact_position = $('#contact').offset().top - $(window).height();
		  
		  if( scroll > access_position ) {
				if(scroll < contact_position ) {
					$('.bg').fadeIn(500);

				}else {
					$('.bg').fadeOut(500);
				}
			  }else {
				$('.bg').fadeOut(500);


		  }
	  
	})


	// 画面読み込み時と画面幅変更時のイベント
	$(window).on('load resize', function() {
    let scroll = $(window).scrollTop();

		// メインビジュアルの拡大
		mv_scale(scroll);

	})

	// メインビジュアルの拡大（共通処理）
	function mv_scale(scroll) {
		if( window.innerWidth > 900 ) {
			$('.mainVisual img').css({
			'width':100 / 3 + scroll / 10 + '%'
		});
		}else {
			$('.mainVisual img').css({
			'width':100 - scroll / 10 + '%'
			});
		}
	}








})