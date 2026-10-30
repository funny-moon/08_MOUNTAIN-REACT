import Lenis from "lenis";

const lenis = () => {
  const lenis = new Lenis({
    autoRaf: true,
    duration: 1,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });
};

export default lenis;
