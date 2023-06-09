import { motion, AnimatePresence } from 'framer-motion';
import './Alerts.css';

const Alerts = ({ alertList, removeAlert, dark }) => {
    return (
        <ul className='alertList'>
            <AnimatePresence mode='popLayout'>
                {alertList.map((alert, index) => (
                    <motion.li
                        style={{
                            boxShadow: dark ? '0 0 10px 0 rgba(0, 0, 0, 0.2)' : 'none',
                        }}
                        key={index}
                        layout
                        initial={{
                            scale: 0.5,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        exit={{
                            scale: 0.5,
                            opacity: 0
                        }}
                        transition={{
                            duration: 0.15,
                            ease: 'backInOut'
                        }}
                        className='alert'
                    >
                        {alert.text}

                        <div className='bar' />

                        <button
                            className='close'
                            onClick={() => removeAlert(index)}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
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