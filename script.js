(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

const Home = () => {
  gsap.set(".slidesMarq", {
    scale: 5,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 3,
    },
  });

  tl.to(
    ".video-div",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  );

  tl.to(
    ".slidesMarq",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );

  tl.to(
    ".lft",
    {
      stagger: 0.05,
      xPercent: -10,
      ease: Power4,
    },
    "b"
  );

  tl.to(
    ".rgt",
    {
      xPercent: 10,
      ease: Power4,
    },
    "b"
  );
};

const realSecAnimation = () => {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      bottom: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4,
  });
};

const teamAnimation = () => {
  document.querySelectorAll(".listElem").forEach((el) => {
    el.addEventListener("mousemove", function (dets) {
      let transverse = gsap.utils.mapRange(
        0,
        window.innerWidth,
        -300,
        300,
        dets.clientX
      );
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: transverse,
        ease: Power4,
        duration: 0.5,
      });
      gsap.to(this.querySelector(".blueLayer"), {
        height: "100%",
        duration: 0.5,
        ease: Power4,
      });
    });

    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
      gsap.to(this.querySelector(".blueLayer"), {
        height: "0%",
        duration: 0.5,
        ease: Power4,
      });
    });
  });
};

const AboutAnimation = () => {
  const AllText = document.querySelector(".textPara").textContent.split("");

  let clutter = "";
  AllText.forEach((text) => {
    if (clutter === " ") {
      clutter += `<span>&nbsp;</span>`;
    }
    clutter += `<span>${text}</span>`;
  });

  document.querySelector(".textPara").innerHTML = clutter;

  gsap.set(".textPara span", { opacity: 0.1 });
  gsap.to(".textPara span", {
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
    scrollTrigger: {
      trigger: ".para",
      top: "top 10%",
      end: "bottom 90%",
      scrub: 2,
    },
  });
};

const capsulesAnimations = () => {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 2,
    },
    y: 0,
    ease: Power4,
  });
};

const bodyColorChange = () => {
  document.querySelectorAll(".section").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 50%",
      end: "bottom 50%",

      onEnter: () => {
        document.body.setAttribute("theme", el.dataset.color);
      },
      onEnterBack: () => {
        document.body.setAttribute("theme", el.dataset.color);
      },
    });
  });
};

const craft = () => {
  gsap.set(".cardM", { backgroundColor: "cyan" });
  document.querySelectorAll(".cardM").forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        end: "bottom 50%",
        scrub: 1,
      },
      backgroundColor: "black",
      border: "1px solid cyan",
      width: "35vw",
    });
  });
};

window.addEventListener("load", function () {
  // Page is fully loaded, hide the loader
  const loader = document.querySelector(".loadContainer");
  loader.style.display = "none";
});

craft();
Home();
realSecAnimation();
teamAnimation();
AboutAnimation();
capsulesAnimations();
bodyColorChange();
