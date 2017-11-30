export default `cinderella({ loop: true })
  .add({
    targets: ".block",
    transform: {
      translateY: [
        {
          delay: 500,
          from: 0,
          to: "-100px",
          duration: 400,
          easing: "easeOutCubic"
        },
        {
          to: "0px",
          duration: 700,
          easing: "easeOutBounce"
        }
      ]
    }
  })
  .play();
`;
