import Head from 'next/head';
import { Menu, Grid, Alerts } from '../components';
import { useEffect, useState } from 'react';

const Main = () => {
    const [color, setColor] = useState('#8FBCBB');
    const [colors, setColors] = useState(['#8FBCBB']);
    const [size, setSize] = useState(16);
    const [dark, setDark] = useState(false);
    const [alertList, setAlertList] = useState([]);
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        setColors((colors) => [...colors, color]);
        if (!touched) return
        setAlertList((alertList) => [
            ...alertList,
            {
                color: color === 'inherit'
                    ? colors[colors.length - 2]
                    : color,
                text: color === 'inherit'
                    ? 'Eraser mode enabled'
                    : colors[colors.length - 1] === 'inherit'
                    ? 'Eraser mode disabled'
                    : `Color changed to ${color}`,
            },
        ]);
    }, [color]);

    useEffect(() => {
        if (!touched) return
        setAlertList((alertList) => [
            ...alertList,
            { color: '#8FBCBB', text: `Grid size changed to ${size}x${size}` },
        ]);
    }, [size]);

    useEffect(() => {
        if (!touched) return
        setAlertList((alertList) => [
            ...alertList,
            { color: '#8FBCBB', text: `Theme changed to ${dark ? 'dark' : 'light'}` },
        ]);
    }, [dark]);

    useEffect(() => {
        document.body.addEventListener('click', () => {
            setTouched(true);
        });

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
            { color: '#8FBCBB', text: 'Grid cleared' },
        ]);
    };

    const removeAlert = (index) => {
        setAlertList((alertList) => {
            return alertList.filter((alert, i) => i !== index);
        });
    };

    return (
        <>
            <Head>
                <title>Etch A Sketch</title>
                <link rel='icon' href='/images/favicon.svg' />
            </Head>

            {/* <noscript>
                You don't have javascript enabled.  Good luck with that.
            </noscript> */}

            <Alerts alertList={alertList} removeAlert={removeAlert} dark={dark} />

            <main
                className={'main'}
                onDragStart={(e) => e.preventDefault()}
                onDrop={(e) => e.preventDefault()}
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
                    size={size}
                    dark={dark}
                />

                <Grid
                    color={color}
                    size={size}
                    dark={dark}
                />
            </main>
        </>
    )
}

export default Main