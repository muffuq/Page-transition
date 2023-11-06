import barba from '@barba/core';
import gsap from 'gsap';

let tl = gsap.timeline();

function leaveAnimation() {
    tl.to(".header", { duration: 0.5, opacity: 0, y: -100, ease: "power2.inOut" })
    tl.to(".transition__bg", { height: "90%", duration: 1, ease: "power1.inOut" })
}

function enterAnimation() {
    tl.to(".header", { duration: 0.5, opacity: 1, y: 0, ease: "power2.inOut" });
    tl.to(".transition__bg", { height: "0%", duration: 1, ease: "power1.inOut" });
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,
    transitions: [{
      name: 'opacity-transition',
      async leave(data) {
        const done = this.async();
        leaveAnimation();
        await delay(1500);
        done();
      },
     async enter(data) {
        enterAnimation();
      }
    }]
});