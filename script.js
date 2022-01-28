// blurTriggerにblurというクラス名を付ける定義

function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
		}else{
		$(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
		}
		});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



//入力桁数制限
function inputCheck () {
  var form = document.getElementById("studentNumber");
  var form_value = form.value;
  
  if (form_value.match(/[0-9]{10}/g) != form_value ) {
  	document.getElementById('alert').innerHTML = '10桁の学籍番号を<br>入力してください。';
    form.value = '';
  } else {
  	document.getElementById('alert').innerHTML = 'OKです';  
  }
  
  document.getElementById('output').innerHTML = form_value;
}


//送信確認
function beforeSubmit() {
    if(window.confirm('この内容で送信しますがよろしいでしょうか?')) {
    return true;
    } else {
      return false;
    }
}
   

  


