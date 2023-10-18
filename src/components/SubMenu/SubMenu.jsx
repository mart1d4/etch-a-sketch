import icons from "../../assets/icons";
import Settings from "./Settings";
import { useState } from "react";
import "./SubMenu.css";

const SubMenu = ({ functions, drawMode, showBorders, showTooltips }) => {
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="container">
            <button className="button" onClick={() => setShowSettings(!showSettings)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {icons.settings}
                </svg>

                <span className="buttonText">Settings</span>
            </button>

            <button className="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {icons.save}
                </svg>

                <span className="buttonText">Save</span>
            </button>

            <Settings
                showMenu={showSettings}
                setShowMenu={setShowSettings}
                functions={functions}
                drawMode={drawMode}
                showBorders={showBorders}
                showTooltips={showTooltips}
            />
        </div>
    );
};

export default SubMenu;
