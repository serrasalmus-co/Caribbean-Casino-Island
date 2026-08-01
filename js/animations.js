document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('.parallax-wrap').forEach((wrap) => {
    const img = wrap.querySelector('.parallax-img');
    gsap.to(img, { yPercent: 15, ease: 'none', scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
});
