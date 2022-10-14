import Header from "./Header";
import LastArticles from "components/blog/LastArticles"
import { articles } from "data"
import About from "./About";

import styles from "./Homepage.module.sass"
import ContactForm from "common/pages/ContactForm";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Header/>
      <About />
      {/* <LastArticles articles={articles}/>
      <ContactForm whatsapp/> */}
    </div>
  );
}

export default Homepage;

