import Head from 'next/head';
import { Menu, Grid } from '../components';
import { useEffect, useState } from 'react';

const Main = () => {
    const [color, setColor] = useState('#8FBCBB');
    const [colors, setColors] = useState(['#8FBCBB']);
    const [size, setSize] = useState(16);
    const [dark, setDark] = useState(true);

    useEffect(() => {
        setColors((colors) => [...colors, color]);
    }, [color]);

    const handleColorChange = (color) => {
        setColor(color);
    };

    const handleSizeChange = (size) => {
        setSize(size);
    };

    const handleThemeChange = () => {
        setDark(!dark);
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
    };

    return (
        <>
            <Head>
                <title>Etch A Sketch</title>
                <link rel='icon' href='/images/favicon.svg' />
            </Head>

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