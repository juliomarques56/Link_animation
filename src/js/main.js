$('.container').bind("mouseenter",function() {	
    $(this).children(this).children('img.icon-img').fadeIn(200);
    $(this).children(this).children('h5').css('color','#FFF');
    $(this).children('.coluna_logo').fadeOut(200);
    $(this).children('.coluna_icon').animate( {"top":"40"},600,"easeOutBack");
    $(this).children('.coluna_cliqueAqui').fadeIn(1);
    $(this).children('.coluna_cliqueAqui').animate( {"top":"200"},600,"easeOutBack");
});

$('.container').bind("mouseleave",function(){
    $(this).children('.coluna_cliqueAqui').fadeOut(1);
    $(this).children('.coluna_cliqueAqui').animate({"top":"280"},600,"easeOutBack");
    $(this).children(this).children('img.icon-img').fadeOut(200);
    $(this).children(this).children('h5').css('color','#333');
    $(this).children('.coluna_icon').animate( {"top":"200"},600,"easeOutBack");
    $(this).children('.coluna_logo').fadeIn(400);
})