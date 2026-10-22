import React from 'react';
import styles from './styles.module.css';

export default function DocHeader({ title = "Documentations", subtitle = "Move data seamlessly. Stay in control." }) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.cardsGrid}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </div>
  );
}
