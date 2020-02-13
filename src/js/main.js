$('.principal').bind("mouseenter",function() {	
    $(this).children(this).children('img.icon-img').fadeIn(200);
    $(this).children('.coluna_logo').fadeOut(200);
    $(this).children('.coluna_icon').animate( {"top":"10%"},600,"easeOutBack");
    $(this).children('.coluna_cliqueAqui').fadeIn(1);
    $(this).children('.coluna_cliqueAqui').animate( {"top":"65%"},600,"easeOutBack");
});

$('.principal').bind("mouseleave",function(){
    $(this).children('.coluna_cliqueAqui').fadeOut(1);
    $(this).children('.coluna_cliqueAqui').animate({"top":"90%"},600,"easeOutBack");
    $(this).children(this).children('img.icon-img').fadeOut(200);
    $(this).children('.coluna_icon').animate( {"top":"70%"},600,"easeOutBack");
    $(this).children('.coluna_logo').fadeIn(400);
})