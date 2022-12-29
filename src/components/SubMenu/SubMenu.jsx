import { motion, AnimatePresence } from 'framer-motion';
import styles from './SubMenu.module.css';
import icons from '../../assets/icons';
import Settings from './Settings';
import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

const SubMenu = ({ functions, hover, showBorders, showTooltips }) => {
    const [showSettings, setShowSettings] = useState(false);
    const [showText, setShowText] = useState(false);
    const [ref1, { width1 }] = useMeasure();
    const [ref2, { width2 }] = useMeasure();
    const [ref3, { width3 }] = useMeasure();

    useEffect(() => {
        console.log(width1, width2, width3);
    }, [width1, width2, width3]);

    return (
        <div className={styles.container}>
            <AnimatePresence>
                <motion.button
                    key='button1'
                    className={styles.button}
                    onMouseEnter={() => setShowText(1)}
                    onMouseLeave={() => setShowText(false)}
                    onClick={() => setShowSettings(!showSettings)}
                    ref={ref3}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        ref={ref1}
                    >
                        {icons.settings}
                    </svg>

                    {showText == 1 && (
                        <motion.span
                            className={styles.buttonText}
                            ref={ref2}
                        >
                            Settings
                        </motion.span>
                    )}
                </motion.button>

                <motion.button
                    key='button2'
                    className={styles.button}
                    onMouseEnter={() => setShowText(2)}
                    onMouseLeave={() => setShowText(false)}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                    >
                        {icons.save}
                    </svg>

                    {showText == 2 && (
                        <motion.span
                            className={styles.buttonText}
                        >
                            Save
                        </motion.span>
                    )}
                </motion.button>

                <Settings
                    key='settings'
                    showMenu={showSettings}
                    setShowMenu={setShowSettings}
                    functions={functions}
                    hover={hover}
                    showBorders={showBorders}
                    showTooltips={showTooltips}
                />
            </AnimatePresence>
        </div>
    );
}

export default SubMenu