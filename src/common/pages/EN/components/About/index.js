import Spacer from "components/Spacer";
import profilePicture from "assets/PROFILE_PICTURE_SQUARE.jpg"

import styles from "./About.module.sass";
import Img from "components/Img";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <Spacer height="42px" />
      <Img src={profilePicture} alt="Nícolas Arths' picure"/>
      <h2>About Me</h2>
      <p>
        I&apos;m Nícolas Arths. At twenty five I decided to jump into the programming world.
        After one year, I developed multiple web projects, some available below, searching
        for ways to explore new horizons. You too can join this adventure with me.
      </p>
    </div>
  );
};
export default About;
