$( document ).ready(function(){
	
	var tab = 0;
	
	contents = [$("#content-0"), $("#content-1"), $("#content-2")];
	contents[1].hide(); 
	contents[2].hide();
	
	
	$("#button-0").addClass("active");
	
	$("#button-0").click(function(){
		if(tab != 0){
			$(this).addClass("active");
			
			$("#button-1").removeClass("active");
			$("#button-2").removeClass("active");
			
			contents[tab].fadeOut(200, function(){
				tab = 0;
				contents[tab].fadeIn(200);
			});
		}
	});
	
	$("#button-1").click(function(){
		if(tab != 1){
			$(this).addClass("active");
			
			$("#button-0").removeClass("active");
			$("#button-2").removeClass("active");
			
			contents[tab].fadeOut(200, function(){
				tab = 1;
				contents[tab].fadeIn(200);
			});
		}
	});
	
	$("#button-2").click(function(){
		if(tab != 2){
			$(this).addClass("active");
			
			$("#button-0").removeClass("active");
			$("#button-1").removeClass("active");
			
			contents[tab].fadeOut(200, function(){
				tab = 2;
				contents[tab].fadeIn(200);
			});
		}
	});
	
	setInterval(function(){
		console.log(tab);
	},1000/60)
	
	
});