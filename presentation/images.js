import preloader from "spectacle/lib/utils/preloader";

const images = {
  ash: {
    ready: require("../assets/images/ash-ready.gif"),
    sad: require("../assets/images/ash-sad.gif"),
  },
  bio: require("../assets/images/bio.png"),
  icon: {
    github: require('../assets/images/icon-github.png'),
    medium: require('../assets/images/icon-medium.png'),
    twitter: require('../assets/images/icon-twitter.png')
  },
  react: require("../assets/images/react.jpg"),
  sick: require("../assets/images/feeling-sick.gif"),
  spongebob: {
    ready: require("../assets/images/spongebob-ready.gif"),
  },
  halloween: require("../assets/images/halloween.jpg"),
  suit: require("../assets/images/suit.jpg"),
};

preloader(images);
export default images;
