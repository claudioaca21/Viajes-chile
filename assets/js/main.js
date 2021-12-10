$(document).ready(function(){
    $('a').click(function(event){
        console.log(this.hash);
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash
            })
        }
    })
//palabra en imagenes destacados tooltip//
    
    $('[data-toggle="tooltip"]').tooltip(); 
    
//Texto informativo barra celeste popover//

    $('[data-toggle="popover1"]').popover();
    $('[data-toggle="popover2"]').popover();
    $('[data-toggle="popover3"]').popover();
})