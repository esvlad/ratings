//Прогоняем все данные рейтингов для того чтобы узнать положительные и отрицательные значения
$(".viewrate").each(function(){
rate = $(this).text();
rate = parseInt(rate);

if(rate < 0){
	$(this).css("color","#e47360");
	} else if(rate == 0){
	$(this).css("color","#c7c7c7");
	} else{
	$(this).removeAttr("style");
	}
});

//Действия при изменении рейтинга
$(".rates").click(function(){
	z = $(this).parent(".rateComments").attr("id");
	y = $(this).attr("x");
	t = $("#"+z).children(".viewrate").text();
	rt=parseInt(t)+parseInt(y);
	
	$(this).each(function(){
		$("#"+z).children(".viewrate").text(rt);
		if(rt < 0){
			$("#"+z).children(".viewrate").css("color","#e47360");
			} else if(rt == 0){
			$("#"+z).children(".viewrate").css("color","#c7c7c7");
			} else{
			$("#"+z).children(".viewrate").removeAttr("style");
			}
	});
});
