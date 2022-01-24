function sliceMaxLength(minLength, elem) {  
    elem.value = elem.value.slice(minLength, 10);  
}  



function inputCheck () {
  var form = document.getElementById("studentNumber");
  var form_value = form.value;
  
  if (form_value.match(/[0-9]{10}/g) != form_value ) {
  	document.getElementById('alert').innerHTML = '10桁の数字を入力してください。';
    form.value = '';
  } else {
  	document.getElementById('alert').innerHTML = 'OKです';  
  }
  
  document.getElementById('output').innerHTML = form_value;
}