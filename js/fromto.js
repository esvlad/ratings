function fromto(a){
	$("#todo").css("display","initial");
	f = $("#name"+a).text();
	f = $.trim(f);
	$("#to").text(f);
	$("input[name='to']").val(f);
	i = $("input[name='to']").val();
};