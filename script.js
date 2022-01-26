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
  


//星
particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#ec3636"},"shape":{"type":"circle","stroke":{"width":2,"color":"#373745"},"polygon":{"nb_sides":12},"image":{"src":"","width":100,"height":100}},"opacity":{"value":0.2966312312601217,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":12.02559045649142,"random":true,"anim":{"enable":false,"speed":119.88011988011988,"size_min":34.36563436563437,"sync":false}},"line_linked":{"enable":false,"distance":1090.3202013885555,"color":"#ec3636","opacity":0.20042650760819036,"width":12.506614074751079},"move":{"enable":true,"speed":1,"direction":"top","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":3848.1889460772545,"rotateY":5130.918594769673}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});