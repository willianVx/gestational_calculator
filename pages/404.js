import { useState } from 'react';
import Menu from '../components/menu';
import MenuIcon from '../components/menuIcon';
import './style/styles.css';

const Custom404 = () => {
    const [menuDisplay, setMenuDisplay] = useState(false);
    return(
        <>
            <MenuIcon menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
            <Menu menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
            <div style={{justifyContent: "center"}}>
                <h2>404</h2>
            </div>
        </>
    );
}

export default Custom404;
