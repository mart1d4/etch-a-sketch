import { motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './Settings.module.css';

const Settings = ({ showMenu, setShowMenu, functions, hover, showBorders, showTooltips }) => {
    const menu = useRef(null);

    return (
        showMenu && (
            <motion.div
                className={styles.menuBackground}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut'
                }}
                onClick={(e) => {
                    if (menu.current.contains(e.target)) {
                        return;
                    }
                    setShowMenu(false);
                }}
            >
                <motion.div
                    className={styles.menu}
                    ref={menu}
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                >
                    <div className={styles.menuHeader}>
                        <h2>Settings</h2>
                        <button
                            className={styles.closeButton}
                            onClick={() => setShowMenu(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <div className={styles.menuContent}>
                        <button
                            onClick={() => functions.handleHover()}
                        >
                            {
                                hover
                                ? 'Click and drag to draw'
                                : 'Hover to draw'
                            }
                        </button>

                        <button
                            onClick={() => functions.handleShowBorders()}
                        >
                            {
                                showBorders
                                ? 'Hide grid borders'
                                : 'Show grid borders'
                            }
                        </button>

                        <button
                            onClick={() => functions.handleShowTooltips()}
                        >
                            {
                                showTooltips
                                ? 'Hide tooltips'
                                : 'Show tooltips'
                            }
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        )
    );
}

export default Settings