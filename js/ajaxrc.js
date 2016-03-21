//Прогоняем все данные рейтингов для того чтобы узнать положительные и отрицательные значения
$(".viewrate").each(function(){
rate = $(this).text();
rate = parseInt(rate);
if(rate<0){
	$(this).css("color","#e47360");
	} else if(rate == 0){
		$(this).css("color","#c7c7c7");
	} else{
		$(this).removeAttr("style");
	}
});

//Действия при изменении рейтинга
$(".rates").click(function(){
	z = $(this).parent(".rateComments").attr("id"); //Получаем значение id у элемента
	y = $(this).attr("x"); //Получаем значение атрибута x, для определение оценки +1 или -1
	key=parseInt(y);

	$.post("/ajax/commentRating.php", { comid: z, usid: 0, k: key}, function(data){
		$("#"+z).children(".viewrate").text(data);
		if(data<0){
			$("#"+z).children(".viewrate").css("color","#e47360");
			} else if(data==0){
			$("#"+z).children(".viewrate").css("color","#c7c7c7");
			} else{
			$("#"+z).children(".viewrate").removeAttr("style");
			}
	});
});
