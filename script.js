
// Function for button to go down 500px 

function scrollDown() {
  window.scrollBy({
    top: 500,        
    left: 0,
    behavior: "smooth"
  });
}

// Box shaodw scale change 

gsap.to('.hero-button', {
    duration: 1,
    repeat: -1,
    boxShadow: '0 0 50px magenta',
    yoyo: true,
    ease: 'power2.inOut'
});

// Arrow going up and down 

gsap.to('.hero-arrow', {
    y: 20,
    repeat: -1,
    yoyo: true,
    ease: 'power1.in'
})
