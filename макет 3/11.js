setInterval(function(){$(".special_offer").toggleClass("special_offers");},1000);
setInterval(function(){$(".special_offer_content").toggleClass("offers");},1000);
function func(){
	$(".write_to_us").animate({right: '10vw',transform:'rotate(0deg)',"top":"40vw"});$(".close").css({"display":"block"});
};
function func1(){
	$(".write_to_us").animate({right: '-11vw',transform:'rotate(-90deg)',"top":"25vw"});
	$(".close").css({"display":"none"});
};
function func2(){
	var t=document.getElementById('text').value;
	$("#textarea").html(t);
	$("#text").val("");
};


