export default `cinderella({ loop: true })
  .add({
    targets: ".block",
    transform: {
      translateY: {
        delay: 500,
        from: 0,
        to: "-100px",
        duration: 1000,
        easing: "easeOutElastic"
      }
    }
  })
  .play();
`;
