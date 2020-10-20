console.log("start");
var finalbutton = document.getElementsByClassName("button")[0];

function pollDOM () {
      //essa função clica nos botão para avançar os videos até completarem 10
      
      if(document.getElementsByClassName("button btn-primary watch-next-btn").length > 0 ){
        scrollBy(0,800);
        if(!document.getElementsByClassName("button btn-primary watch-next-btn")[0].disabled){
          document.getElementsByClassName("button btn-primary watch-next-btn")[0].click();
        }else {
          setTimeout(pollDOM, 10000);
        }
      };
}

function captchacheck(){
  //essa função clicka em qualquer captcha que houver na tela, porem não resolve quebra-cabeças
  let isRecaptchaFrame = () => {
    return /https:\/\/www.google.com\/recaptcha\/api2\/anchor/.test(window.location.href);
  };
  
  let captchaInterval = setInterval(() => {
    if (isRecaptchaFrame()) {
      clearInterval(captchaInterval);
      document.getElementsByClassName('recaptcha-checkbox-checkmark')[0].click();
      
    }  
  }, 500);

  setInterval(function checker() {
    if(document.getElementById("recaptcha-anchor")){
    checado = document.getElementById("recaptcha-anchor").getAttribute('aria-checked');
  
      if(checado == "true"){
        console.log("disparou");
        var event = new Event("hello",{"bubbles":true});

        document.dispatchEvent(event);
      }
      else {
  
        console.log("not fire");
      }
    }
  },1000);

}

let fechador = setInterval(function closeAd(){
  //esta função fecha anuncios e avisos
  if(document.getElementsByClassName("_k1bf3i")[0]){
    document.getElementsByClassName("_k1bf3i")[0].click();
  }
  if(document.getElementsByClassName("button-darker")[0]){
    document.getElementsByClassName("button-darker")[0].click();
  }
  
  if(document.getElementsByClassName("_yashtyc")[0]){
    document.getElementsByClassName("_yashtyc")[0].click();
  }
  if(document.getElementsByClassName("help-button-holder")){
    document.getElementsByClassName("help-button-holder").click();
  }
},3000)

//////////////////////////////////////////////////////////
pollDOM();
captchacheck();
setTimeout(clickaa,20000);
document.addEventListener("hello",clickaa,false);

function clickaa(){
finalbutton.click();
}



console.log("end");
