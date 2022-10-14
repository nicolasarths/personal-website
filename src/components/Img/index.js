import Image from "next/future/image";

import styles from "./Img.module.sass"

const Img = ({alt, src, ...props}) => {
    return <Image className={styles.Img} alt={alt} src={src} {...props}/>
}

export default Img;