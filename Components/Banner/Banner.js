import styles from '../../styles/Banner.module.css'
const Banner = () => {
    return (
        <div className={styles.backgroundImg} >
            <div className={styles.textSection}>
                <h1 className={styles.text}>The Perfect Place To Learn More</h1>
            </div>
        </div>
    );
};

export default Banner;