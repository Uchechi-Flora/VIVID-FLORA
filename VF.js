//ADDING HTML ENITY(CHECKMARK) TO THE JQUERY CODE, IF USERS CLICK IN ADD TO CART, CHECKMARK DISPLAYS
var itemcount = 0
var prices = $(".price")
priceARR = [prices]
function check() {
  $(".cart").click(function(){
    $(this).html('&#10004').text()
    itemcount ++
    $("#itemcount").html(itemcount).css('display', 'block')
  }) 
}
check()


 $("#sndframe1").hide() 
 $("#sndframe2").hide()

 $("#thdframe1").hide() 
 $("#thdframe2").hide()

 
//MULTIPLE USER CLICKS; IF USER WNATS TO GO TO NEXT FRAME; USE BIND, THIS MAKES IT CHANGE IN A SPECIFIC ORDER
  
  function firstfunction() {
    $("#firstframe1").toggle()
    $("#firstframe2").toggle()
   
    $("#sndframe1").toggle() 
    $("#sndframe2").toggle()
  }

  function sndfunction() {
    $("#fotframe1").toggle()
    $("#fotframe2").toggle()
   
    $("#thdframe1").toggle() 
    $("#thdframe2").toggle()
  }

 $(".more")
 .bind("click", firstfunction)

 .bind("click", sndfunction) 
