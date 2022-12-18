import Head from 'next/head';
import { Menu, Grid } from '../components';
import { useEffect, useState } from 'react';

const Main = () => {
    const [color, setColor] = useState('#8FBCBB');
    const [colors, setColors] = useState(['#8FBCBB']);
    const [size, setSize] = useState(16);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        setColors((colors) => [...colors, color]);
    }, [color]);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDark(true);
            document.documentElement.classList = 'dark';
        } else {
            setDark(false);
            document.documentElement.classList = 'light';
        }
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