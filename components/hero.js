import styles from './styles/hero.module.css'

export default function Hero({ title, subtitle, imageOn = false }) {
    return (
      <div className={styles.flexContainer}>
        <div className={style.text}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.subtitle}>{subtitle}</p>
        </div>
        {imageOn && <figure>[画像]</figure>}
      </div>
    );
}