import Link from "next/link";
import { hrefs } from "data";

import styles from "./LanguageSwitcher.module.sass";

const languages = {
        en: {
            url: hrefs.EN_PAGE,
            name: "EN"
        },
        "pt-br": {
            url: hrefs.HOMEPAGE,
            name: "PT-BR"
        }
    }


const LanguageSwitcher = ({lang}) => (
  <div className={styles.lang}>
    <Link href={languages[lang].url}>{languages[lang].name}</Link>
  </div>
);

export default LanguageSwitcher;
