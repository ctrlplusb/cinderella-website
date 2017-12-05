export default `cinderella({
  loop: true,
  direction: "alternate"
}).add({
  targets: ".block",
  transform: {
    scale: {
      from: 0,
      to: 1.5
    },
    rotate: {
      from: 0,
      to: "360deg"
    }
  },
  defaults: {
    delay: 500,
    duration: 1500,
    easing: "easeInOutCubic"
  }
}).play();
`;
