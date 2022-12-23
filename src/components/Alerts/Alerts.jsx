import { motion, AnimatePresence } from 'framer-motion';
import styles from './Alerts.module.css';

const Alerts = ({ alertList, removeAlert, dark }) => {
    return (
        <ul className={styles.list}>
            <AnimatePresence mode='popLayout'>
                {alertList.map((alert, index) => (
                    <motion.li
                        style={{
                            boxShadow: dark ? '0 0 10px 0 rgba(0, 0, 0, 0.2)' : 'none',
                        }}
                        key={index}
                        layout
                        initial={{
                            scale: 0.8,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        exit={{
                            scale: 0.8,
                            opacity: 0
                        }}
                        transition={{
                            type: 'spring',
                        }}
                        className={styles.alert}
                    >
                        {alert.text}

                        <div
                            className={styles.bar}
                        >
                        </div>

                        <button
                            className={styles.close}
                            onClick={() => removeAlert(index)}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <line x1='18' y1='6' x2='6' y2='18' />
                                <line x1='6' y1='6' x2='18' y2='18' />
                            </svg>
                        </button>
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    );
}

export default Alerts