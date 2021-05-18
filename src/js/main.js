console.log(` 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

//logos/info
gsap.to(".logo", {y:300, duration:5,delay:10})
gsap.from(".logo-border", { opacity:0, duration:10,delay:10})
gsap.to(".switch-logo", {rotation: 360,opacity:100, duration:5,delay:10})
gsap.from(".e3", {opacity:0, y:-100, duration:5,delay:10})

//characters
gsap.to(".switch", {y:900, duration:15})
gsap.to(".pika", {y:100, duration:1,  delay:14, repeat:4, yoyo:true})
// gsap.to(".animal-crossing", {y:-80, duration:1, delay:4, repeat:4, yoyo:true})
gsap.to(".mario", {y:-80, duration:1, delay:14, repeat:4, yoyo:true})



//delay
// let switchCharacters = document.querySelectorAll("#characters")
// gsap.delay(switchCharacters, 5)