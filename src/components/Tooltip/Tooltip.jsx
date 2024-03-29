import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Tooltip.css";

export default function Tooltip({ children, show, text, pos, dist, arrow }) {
    const [display, setDisplay] = useState(false);

    const showTooltip = show ?? true;
    const distance = dist ?? "15px";
    const position = pos ?? "bottom";
    const showArrow = arrow ?? false;

    const getTooltipPosition = () => {
        const objects = [{}, {}, {}];

        if (position === "top" || position === "bottom") {
            if (position === "top") {
                objects[0].bottom = `calc(100% + ${distance})`;
                objects[1].top = "100%";
                objects[2].borderTop = "4px solid var(--background-secondary)";
                objects[2].bottom = "-4px";
            } else if (position === "bottom") {
                objects[0].top = `calc(100% + ${distance})`;
                objects[1].bottom = "100%";
                objects[2].borderBottom = "4px solid var(--background-secondary)";
                objects[2].top = "-4px";
            }

            objects[0].left = "50%";
            objects[1].left = "50%";
            objects[2].left = "50%";
            objects[0].transform = "translateX(-50%)";
            objects[1].transform = "translateX(-50%)";
            objects[2].transform = "translateX(-50%)";
            objects[1].width = "100%";
            objects[1].height = distance;
            objects[2].borderLeft = "4px solid transparent";
            objects[2].borderRight = "4px solid transparent";
        } else if (position === "left" || position === "right") {
            if (position === "left") {
                objects[0].right = `calc(100% + ${distance})`;
                objects[1].left = "100%";
                objects[2].borderLeft = "4px solid var(--background-secondary)";
                objects[2].right = "-4px";
            } else if (position === "right") {
                objects[0].left = `calc(100% + ${distance})`;
                objects[1].right = "100%";
                objects[2].borderRight = "4px solid var(--background-secondary)";
                objects[2].left = "-4px";
            }

            objects[0].top = "50%";
            objects[1].top = "50%";
            objects[2].top = "50%";
            objects[0].transform = "translateY(-50%)";
            objects[1].transform = "translateY(-50%)";
            objects[2].transform = "translateY(-50%)";
            objects[1].width = distance;
            objects[1].height = "100%";
            objects[2].borderTop = "4px solid transparent";
            objects[2].borderBottom = "4px solid transparent";
        }

        return objects;
    };

    const positions = getTooltipPosition();

    return (
        <div className="container" onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
            {children}

            <AnimatePresence>
                {display && showTooltip && (
                    <motion.span
                        className="tooltip"
                        style={positions[0]}
                        initial={{
                            opacity: 0,
                            transform: positions[0].transform + " scale(0.75)",
                        }}
                        animate={{
                            opacity: 1,
                            transform: positions[0].transform + " scale(1)",
                        }}
                        exit={{
                            opacity: 0,
                            transform: positions[0].transform + " scale(0.75)",
                        }}
                        transition={{ duration: 0.1 }}
                        onClick={(e) => e.preventDefault()}
                    >
                        {text}

                        <span className="cursorConsistency" style={positions[1]}></span>
                        {showArrow && <span className="arrow" style={positions[2]}></span>}
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    );
}
