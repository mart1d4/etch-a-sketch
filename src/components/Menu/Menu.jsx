import styles from './Menu.module.css';
import icons from '../../assets/icons';
import { Tooltip } from '../';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

const Menu = ({ functions, color, size, dark }) => {
    const [displayTooltip, setDisplayTooltip] = useState(null);
    const tooltips = useRef([]);

    const menuEntries = [
        {
            name: 'Clear Grid',
            function: functions.handleClearGrid,
            icon: icons.bin,
        },
        {
            name: color === 'inherit' ? 'Erase Mode Off' : 'Erase Mode On',
            function: functions.handleEraseMode,
            icon: color === 'inherit' ? icons.eraserOff : icons.eraserOn,
        },
        {
            name: dark ? 'Light Mode' : 'Dark Mode',
            function: functions.handleThemeChange,
            icon: dark ? icons.sun : icons.moon,
        },
        {
            name: 'Change Size',
            function: functions.handleSizeChange,
            icon: icons.resize,
        },
        {
            name: 'Change Color',
            function: functions.handleColorChange,
            icon: icons.palette,
        },
    ];

    return (
        <AnimatePresence>
            <motion.nav
                className={styles.menu}
                style={{
                    boxShadow: dark ? '0 0 10px 0 rgba(0, 0, 0, 0.2)' : 'none',
                    border: dark ? '1px solid transparent' : '1px solid rgba(0, 0, 0, 0.2)',
                }}
                initial={{
                    opacity: 0,
                    transform: 'translateX(-50%) scale(0)'
                }}
                animate={{
                    opacity: 1,
                    transform: 'translateX(-50%) scale(1)'
                }}
                exit={{
                    opacity: 0,
                    transform: 'translateX(-50%) scale(0)'
                }}
                transition={{
                    duration: 1,
                    ease: 'backInOut'
                }}
            >
                {menuEntries.map((entry, index) => (
                    <button
                        key={index}
                        className={styles.menuEntry}
                        onClick={entry.function}
                        onMouseEnter={() => setDisplayTooltip(entry.name)}
                        onMouseLeave={() => {
                            if (!tooltips?.current[index]?.contains(document.activeElement)) {
                                setDisplayTooltip(null);
                            }
                        }}
                    >
                        {entry.icon}

                        <span
                            ref={el => tooltips.current[index] = el}
                        >
                            <Tooltip
                                show={displayTooltip === entry.name}
                                position={'bottom'}
                                title={entry.name}
                                distance={'20px'}
                            />
                        </span>
                    </button>

                    
                ))}
            </motion.nav>
        </AnimatePresence>
    );
}

export default Menu