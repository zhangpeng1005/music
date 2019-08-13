$(function(){
	$("#musicPlayer").on("play",function(){
		$("#musicImg").css("animation-play-state","running");
	});
	$("#musicPlayer").on("pause",function(){
		$("#musicImg").css("animation-play-state","paused");
	});
	$(".glyphicon-play-circle").on("click",function(){
		var $music = $(this).data("music");
		var $img = $(this).data("img");
		$("#musicPlayer").prop("src",$music);
		$("#musicPlayer")[0].play();
		$("#musicImg").prop("src",$img);
	})
})