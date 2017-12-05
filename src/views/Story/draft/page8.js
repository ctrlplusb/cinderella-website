import cinderella from "cinderella";

export default {
  animation: {
    source: `cinderella()
  .add({
    targets: ".triangle",
    transform: {
      rotate: {
        from: 0,
        to: "180deg",
        duration: 1000
      },
      scale: {
        from 0,
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
          from: 0,
          to: "180deg",
          duration: 1000
        },
        scale: {
          from: 0,
          to: 2,
          duration: 1000
        }
      }
    })
  }
};
