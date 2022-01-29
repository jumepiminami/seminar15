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
  	document.getElementById('alert2').innerHTML = '10桁の学籍番号を<br>入力してください。';
    form.value = '';
  } else {
  	document.getElementById('alert2').innerHTML = 'OKです';  
  }
  
  document.getElementById('output').innerHTML = form_value;
}


function check(){

	var flag = 0;


	// 設定開始（必須にする項目を設定してください）

	if(document.form1.name.value == ""){ // 「お名前」の入力をチェック

		flag = 1;

	}
	else if(document.form1.studentnumber.value == ""){ // 「学籍番号」の入力をチェック

		flag = 1;

	}
	else if (document.form1.email.value == "") {  // 「メアド」の入力をチェック

		flag = 1;
	}
	else if(document.form1.state.value == ""){ // 「state」の入力をチェック

		flag = 1;


	}
	else if (document.form1.device.value == "") {  // 「device」の入力をチェック
		flag = 1;
	}
	else if (document.form1.otoiawase.value == "") {  // 「otoiawase」の入力をチェック
		flag = 1;
	}

	// 設定終了


	if(flag){

		window.alert('必須項目に未入力がありました'); // 入力漏れがあれば警告ダイアログを表示
		return false; // 送信を中止

	}
	else{

		return beforeSubmit();
	}

}

function fa(){
	document.getElementById('alert1').innerHTML = '必須です';
	form.value = '';
	document.getElementById('alert3').innerHTML = '必須です';
	form.value = '';
	document.getElementById('alert4').innerHTML = '必須です';
	form.value = '';
	document.getElementById('alert5').innerHTML = '必須です';
	form.value = '';
	document.getElementById('alert6').innerHTML = '必須です';
    form.value = '';
	
}

//送信確認
function beforeSubmit() {
    if(window.alert('この内容で送信しますがよろしいでしょうか?')) {
		return true;
	} else {
		return false;
    }
}
   



