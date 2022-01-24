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



   function beforeSubmit() {
    if(window.confirm('この内容で送信しますがよろしいでしょうか？')) {
      return true;
    } else {
      return false;
    }
  }