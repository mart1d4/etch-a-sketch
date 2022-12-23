import styles from './Menu.module.css';
import icons from '../../assets/icons';
import { Tooltip } from '../';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const Menu = ({ functions, color, colors, size, dark }) => {
    const [displaySizeMenu, setDisplaySizeMenu] = useState(false);
    const [displayColorMenu, setDisplayColorMenu] = useState(false);
    const sizeMenu = useRef(null);
    const colorMenu = useRef(null);
    const sizeInput = useRef(null);
    const colorInput = useRef(null);

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
                    <div
                        key={index}
                        className={styles.entry}
                    >
                        <Tooltip
                            position={'bottom'}
                            title={entry.name}
                            distance={'20px'}
                        >
                            <button
                                className={styles.menuEntry}
                                onClick={
                                    entry.name === 'Change Size'
                                    ? (e) => {
                                        if (sizeMenu?.current?.contains(e.target)) return;
                                        setDisplaySizeMenu(!displaySizeMenu);
                                    }
                                    : entry.name === 'Change Color'
                                    ? (e) => {
                                        if (colorMenu?.current?.contains(e.target)) return;
                                        setDisplayColorMenu(!displayColorMenu);
                                    }
                                    : entry.function
                                }
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    {entry.icon}
                                </svg>
                            </button>
                        </Tooltip>

                        <AnimatePresence>
                                    {(entry.name === 'Change Size' && displaySizeMenu) && (
                                        <motion.div
                                            ref={sizeMenu}
                                            style={{
                                                boxShadow : dark ? '0 0 10px 0 rgba(0, 0, 0, 0.2)' : 'none',
                                                border: dark ? '1px solid transparent' : '1px solid rgba(0, 0, 0, 0.2)',
                                            }}
                                            className={styles.sizeMenu}
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
                                                duration: 0.5,
                                                ease: 'backInOut'
                                            }}
                                        >
                                            <input
                                                ref={sizeInput}
                                                type='range'
                                                min={4}
                                                max={64}
                                                step={4}
                                                defaultValue={size}
                                            />

                                            <button
                                                className={styles.colorMenuButton}
                                                onClick={() => {
                                                    functions.handleSizeChange(sizeInput.current.value);
                                                    setDisplaySizeMenu(false);
                                                }}
                                            >
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 24 24'
                                                >
                                                    {icons.check}
                                                </svg>
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence>
                                    {(entry.name === 'Change Color' && displayColorMenu) && (
                                        <motion.div
                                            ref={colorMenu}
                                            style={{
                                                boxShadow : dark ? '0 0 10px 0 rgba(0, 0, 0, 0.2)' : 'none',
                                                border: dark ? '1px solid transparent' : '1px solid rgba(0, 0, 0, 0.2)',
                                            }}
                                            className={styles.colorMenu}
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
                                                duration: 0.5,
                                                ease: 'backInOut'
                                            }}
                                        >
                                            <input
                                                ref={colorInput}
                                                type='color'
                                            />

                                            <button
                                                className={styles.colorMenuButton}
                                                onClick={() => {
                                                    functions.handleColorChange(colorInput.current.value);
                                                    setDisplayColorMenu(false);
                                                }}
                                            >
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 24 24'
                                                >
                                                    {icons.check}
                                                </svg>
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                    </div>
                ))}
            </motion.nav>
        </AnimatePresence>
    );
}

export default Menu