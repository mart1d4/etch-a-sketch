import Head from 'next/head';
import { Menu, Grid, Alerts, SubMenu } from '../components';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/index.module.css';

const Main = () => {
    const [color, setColor] = useState('#8FBCBB');
    const [colors, setColors] = useState(['#8FBCBB']);
    const [size, setSize] = useState(16);
    const [dark, setDark] = useState(false);
    const [alertList, setAlertList] = useState([]);
    const [touched, setTouched] = useState(false);
    const [hover, setHover] = useState(false);
    const [showBorders, setShowBorders] = useState(false);
    const [showTooltips, setShowTooltips] = useState(true);

    useEffect(() => {
        setColors((colors) => [...colors, color]);
        if (color !== 'inherit') document.documentElement.style.setProperty('--accent-primary', color);
        if (!touched) return
        setAlertList((alertList) => [
            ...alertList,
            {
                color: color === 'inherit'
                    ? colors[colors.length - 1]
                    : color,
                text: color === 'inherit'
                    ? 'Eraser mode enabled'
                    : colors[colors.length - 1] === 'inherit'
                    ? 'Eraser mode disabled'
                    : `Color changed to ${color}`,
                time: Date.now(),
            },
        ]);
    }, [color]);

    useEffect(() => {
        if (!touched) return
        setAlertList((alertList) => [
            ...alertList,
            { color: '#8FBCBB', text: `Grid size changed to ${size}x${size}`, time: Date.now(), },
        ]);
    }, [size]);

    useEffect(() => {
        if (!touched) return
        setAlertList((alertList) => [
            ...alertList,
            { color: '#8FBCBB', text: `Theme changed to ${dark ? 'dark' : 'light'}`, time: Date.now(), },
        ]);
    }, [dark]);

    useEffect(() => {
        document.body.addEventListener('click', () => {
            setTouched(true);
        });

        const interval = setInterval(() => {
            const time = Date.now();
            setAlertList((alertList) => {
                return alertList.filter((alert) => time - alert.time < 5000);
            });
        }, 100);

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDark(true);
            document.documentElement.classList = 'dark';
        } else {
            setDark(false);
            document.documentElement.classList = 'light';
        }

        return () => {
            document.body.removeEventListener('click', () => {
                setTouched(true);
            });
            clearInterval(interval);
        };
    }, []);

    const handleColorChange = (color) => {
        setColor(color);
    };

    const handleSizeChange = (size) => {
        setSize(size);
    };

    const handleThemeChange = () => {
        if (dark) {
            setDark(false);
            document.documentElement.classList = 'light';
        } else {
            setDark(true);
            document.documentElement.classList = 'dark';
        }
    };

    const handleEraseMode = () => {
        if (color === 'inherit') {
            setColor(colors[colors.length - 2]);
        } else {
            setColor('inherit');
        }
    };

    const handleClearGrid = () => {
        const gridItems = document.querySelectorAll('#grid > div');
        gridItems.forEach((gridItem) => {
            gridItem.style.backgroundColor = 'inherit';
        });
        color === 'inherit' && handleEraseMode();

        if (!touched) return
        setAlertList((alertList) => [
            ...alertList,
            { color: '#8FBCBB', text: 'Grid cleared', time: Date.now(), },
        ]);
    };

    const removeAlert = (index) => {
        setAlertList((alertList) => {
            return alertList.filter((alert, i) => i !== index);
        });
    };

    const handleHover = () => {
        setHover(!hover);
    };

    const handleShowBorders = () => {
        setShowBorders(!showBorders);
    };

    const handleShowTooltips = () => {
        setShowTooltips(!showTooltips);
    };

    return (
        <>
            <Head>
                <title>Etch A Sketch</title>
                <link rel='icon' href='/images/favicon.svg' />
            </Head>

            <main
                className={styles.main}
                onDragStart={(e) => e.preventDefault()}
                onDrop={(e) => e.preventDefault()}
            >

                {
                    showTooltips &&
                    <Alerts
                        alertList={alertList}
                        removeAlert={removeAlert}
                        dark={dark}
                    />
                }

                <motion.div
                    className={styles.menu}
                    initial={{
                        opacity: 0,
                        transform: 'translateX(-50%) scale(0.5)',
                    }}
                    animate={{
                        opacity: 1,
                        transform: 'translateX(-50%) scale(1)',
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                >
                    <Menu
                        functions={{
                            handleColorChange,
                            handleSizeChange,
                            handleThemeChange,
                            handleEraseMode,
                            handleClearGrid,
                        }}
                        color={color}
                        colors={colors}
                        size={size}
                        dark={dark}
                    />

                    <SubMenu
                        functions={{
                            handleHover,
                            handleShowBorders,
                            handleShowTooltips,
                        }}
                        hover={hover}
                        showBorders={showBorders}
                        showTooltips={showTooltips}
                    />
                </motion.div>

                <motion.div
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
                    <Grid
                        color={color}
                        size={size}
                        dark={dark}
                        hover={hover}
                        showBorders={showBorders}
                    />
                </motion.div>
            </main>
        </>
    )
}

export default Main