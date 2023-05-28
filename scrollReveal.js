const sr = ScrollReveal({
    distance:'200px',
    duration: 1000,
    reset:true,
    delay:100,
})

// ----MENU----

ScrollReveal().reveal('.headline', { origin:'right' });
ScrollReveal().reveal('.tagline', { delay: 500, origin:'right' });
ScrollReveal().reveal('.punchline', {  delay: 1000, origin:'left' });

// ----HOME----

ScrollReveal().reveal('.square', { delay: 500 });
ScrollReveal().reveal('#squareOne', {origin:'right' });
ScrollReveal().reveal('#squareTwo', {origin:'left' });

// ----ABOUT----


var originperfil ='left' 

if(screen.width<1440 ){originperfil='bottom'} 

ScrollReveal().reveal('.perfil', { delay: 500, origin: originperfil});





