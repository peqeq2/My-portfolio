import { getImageUrl } from '../../util';
import skills from './../../data/skills.json';
import styles from './Experience.module.css';

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>{
          skills.map((skill, id) => {
            return <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.tittle} />
                </div>
                <p>{skill.title}</p>
            </div>
          })
        }</div>
      </div>
    </section>
  )
}
