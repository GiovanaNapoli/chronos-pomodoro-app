import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos: </span>

      <div className={styles.cycleDots}>
        <span className={`${styles.dots} ${styles.workTime}`} />
        <span className={`${styles.dots} ${styles.shortBreak}`} />
        <span className={`${styles.dots} ${styles.workTime}`} />
        <span className={`${styles.dots} ${styles.longBreak}`} />
        <span className={`${styles.dots} ${styles.workTime}`} />
      </div>
    </div>
  );
}
