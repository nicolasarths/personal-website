import Image from "next/image";
import image from "./image.jpg";
import styles from "./WhoAmI.module.sass"

const WhoAmI = () => {
  return (
    <div className={styles.whoami}>
      <h4>Quem sou eu?</h4>
      <div className={styles.image}>
        <Image src={image} alt="" layout="fill" />
      </div>
      <div className={styles.description}>
        <h5>Me chamo Nícolas Arths.</h5>
        <p className="width-80">
          Desenvolvedor de websites de Porto Alegre, Rio Grande do Sul.
        </p>
        <p>
          Estou aqui para ajudar você a encontrar o seu espaço na internet.
          Juntos, podemos pensar em maneiras diferentes de chamar a atenção de
          novos clientes e expandir nossos horizontes!
        </p>
      </div>
    </div>
  );
};

export default WhoAmI;
