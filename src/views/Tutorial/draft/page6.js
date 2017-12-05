import cinderella from "cinderella";

export default {
  animation: {
    source: `cinderella()
  .add({
    targets: ".triangle",
    transform: {
      rotate: {
        from: "180deg",
        to: "360deg",
        duration: 1000
      },
      scale: {
        from: 1,
        to: 2,
        duration: 1000
      }
    }
  })
  .play()`,
    instance: cinderella().add({
      targets: ".triangle",
      transform: {
        rotate: {
          from: "180deg",
          to: "360deg",
          duration: 1000
        },
        scale: {
          from: 1,
          to: 2,
          duration: 1000
        }
      }
    })
  }
};
