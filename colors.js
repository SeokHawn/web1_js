var Links = {
  SetColor:function (color){
    // var list = document.querySelectorAll('a');
    // var i =0;
    // while(i < list.length){
    //   list[i].style.color = color;
    //   i = i+1;
    // }


    //jquery 사용
    $('a').css('color', color); // 이 웹페이지의 모든 'a' Tag를 제어하겠다! 라는 의

    },
}
var Body = {
  SetColor:function (color){

    //document.querySelector('body').style.color = color;

    $('body').css('color', color);
  },
  SetBackgroundColor: function (color){
    //document.querySelector('body').style.backgroundColor = color;

    $('body').css('backgroundColor', color);
  },
}

function NightDayHandler(self){
  if(self.value==='Night'){
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'Day';

    Links.SetColor('powderblue');
  }
  else{
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'Night';

    Links.SetColor('blue');
  }
}
