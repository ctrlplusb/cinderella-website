export default `cinderella({ loop: true })
  .add({
    targets: ".block",
    transform: {
      translateY: {
        from: 0,
        to: "-100px"
      },
      scale: {
        from: 0.5,
        to: 1
      }
    },
    defaults: {
      delay: 500,
      duration: 1500,
      easing: "easeOutElastic"
    }
  })
  .play();
`;
