import { useEffect, useRef, useState } from 'react';
import styles from './Grid.module.css';

const Grid = ({ size, color, dark, hover, showBorders }) => {
    const [gridClicked, setGridClicked] = useState(false);
    const grid = useRef(null);

    useEffect(() => {
        const outsideRelease = (e) => {
            if (!grid.current.contains(e.target)) {
                setGridClicked(false);
            }
        };

        document.addEventListener('mouseup', outsideRelease);

        return () => {
            document.removeEventListener('mouseup', outsideRelease);
        };
    }, []);

    const handleHover = (e) => {
        if (gridClicked) {
            e.target.style.backgroundColor = color;
        }
    };

    return (
            <div
                className={styles.grid}
                id='grid'
                ref={grid}
                style={{
                    gridTemplateColumns: `repeat(${size}, 1fr)`,
                    boxShadow: dark ? '0 0 10px 0 rgba(0, 0, 0, 0.2)' : 'none',
                    border: dark ? '1px solid transparent' : '1px solid rgba(0, 0, 0, 0.2)',
                }}
                onMouseDown={() => {
                    setGridClicked(true);
                }}
                onMouseUp={() => {
                    if (!hover) {
                        setGridClicked(false);
                    }
                }}
                onMouseEnter={() => {
                    if (hover) {
                        setGridClicked(true);
                    }
                }}
                onMouseLeave={() => {
                    if (hover) {
                        setGridClicked(false);
                    }
                }}
            >
                {[...Array(size * size)].map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseDown={(e) => e.target.style.backgroundColor = color}
                        style={{
                            borderRadius:
                                index === 0
                                    ? '4px 0 0 0'
                                    : index === size - 1
                                    ? '0 4px 0 0'
                                    : index === size * size - size 
                                    ? '0 0 0 4px'
                                    : index === size * size - 1
                                    ? '0 0 4px 0'
                                    : '0',
                            border: showBorders ? '1px solid rgba(0, 0, 0, 0.2)' : '1px solid transparent',
                        }}
                    >
                    </div>
                ))}
            </div>
    );
}

export default Grid