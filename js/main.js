$(document).ready(function() {
    //fullPage
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally:true,
        menu:'#menu',
	    anchors:['mainCon01','mainCon02','mainCon03','mainCon04'],
        navigation:true,
        navigationTooltips: ['Welcome!','About me','My brand','Portfolio'],
		onLeave: function(origin, destination, direction){
            var leavingSection = this;

            if(origin.index == 1 && direction =='down'){
                $('#header h1 a').addClass('white');
                $('#header p').addClass('white');
            }else if(origin.index == 2 && direction == 'up'){
                $('#header h1 a').removeClass('white');
                $('#header p').removeClass('white');
            }else if(origin.index == 2 && destination.index == 0){
                $('#header h1 a').removeClass('white');
                $('#header p').removeClass('white');
            }else if(origin.index == 3 && destination.index == 0){
                $('#header h1 a').removeClass('white');
                $('#header p').removeClass('white');
            }else if(origin.index == 3 && destination.index == 1){
                $('#header h1 a').removeClass('white');
                $('#header p').removeClass('white');
            }else if(origin.index == 0 && destination.index == 3){
                $('#header h1 a').addClass('white');
                $('#header p').addClass('white');
            }else if(origin.index == 0 && destination.index == 2){
                $('#header h1 a').addClass('white');
                $('#header p').addClass('white');
            }
        }
	});
    //slick
     function sliderSet(slickfor,slicknav){
        slickfor.slick({
          slidesToShow:1,
          slidesToScroll:1,
          arrows:false,
          fade:true,
          asNavFor:slicknav
        });
        slicknav.slick({
          slidesToShow:1,
          slidesToScroll:1,
          dots:false,
          arrows:true,
          infinite:true,
          asNavFor:slickfor,
          prevArrow:'.prevArrow',
          nextArrow:'.nextArrow',
        });
      }

      $('.con04Slider').each(function(i,el){
        i+=1; 
        var slickfor = $(el).find('.con04TxtList').addClass('for'+ i)
        var slicknav = $(el).find('.con04ImgList').addClass('nav'+ i)
        sliderSet(slickfor,slicknav);
      })
    
    /*
    //typing animation
    document.addEventListener('DOMContentLoaded',function(event){
      // array with texts to type in typewriter
      var dataText = [ "Amsterdam.", "Full Service.", "Webdevelopment.", "Wij zijn Occhio!"];

      // type one text in the typwriter
      // keeps calling itself until the text is finished
      function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
          // add next character to h1
         document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

          // wait for a while and call this function again for next character
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
          // call callback after timeout
          setTimeout(fnCallback, 700);
        }
      }
      // start a typewriter animation for a text in the dataText array
       function StartTextAnimation(i) {
         if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
              StartTextAnimation(0);
            }, 20000);
         }
         // check if dataText[i] exists
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
         typeWriter(dataText[i], 0, function(){
           // after callback (and whole text has been animated), start next text
           StartTextAnimation(i + 1);
         });
        }
      }
      // start the text animation
      StartTextAnimation(0);
    });*/
    
    //skillbar
    $(".skillWrap").addClass("active")
    $(".skillWrap .skill .skillBar span").each(function() {
       $(this).animate({
          "width": $(this).parent().attr("data-bar") + "%"
       }, 1000);
       $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
    });
    setTimeout(function() {
       $(".skillWrap .skill .skillBar span b").animate({"opacity":"1"},1000);
    }, 2000);
})
