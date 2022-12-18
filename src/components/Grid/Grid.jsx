import { useState } from 'react';
import styles from './Grid.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Grid = ({ size, color, dark }) => {
    const [gridClicked, setGridClicked] = useState(false);

    const handleHover = (e) => {
        if (gridClicked) {
            e.target.style.backgroundColor = color;
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                className={styles.grid}
                id='grid'
                style={{
                    gridTemplateColumns: `repeat(${size}, 1fr)`,
                    boxShadow: dark ? '0 0 10px 0 rgba(0, 0, 0, 0.2)' : 'none',
                    border: dark ? '1px solid transparent' : '1px solid rgba(0, 0, 0, 0.2)',
                }}
                onMouseDown={() => {
                    setGridClicked(true);
                }}
                onMouseUp={() => setGridClicked(false)}
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                exit={{
                    opacity: 0,
                    scale: 0,
                }}
                transition={{
                    duration: 1,
                    ease: 'backInOut'
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
                        }}
                    >
                    </div>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}

export default Grid