import css from './style.css';
import Link from 'next/link';
import MenuIcon from '../menuIcon';

const Menu = ({menuDisplay, setMenuDisplay}) => (
    <nav 
        className={css.navMenu} 
        style={{right: menuDisplay ? '0' : '100%'}}
    >
        <MenuIcon menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
        <ul>
            <li>
                <Link href="/">
                    <a>
                    Por data provável do parto
                    </a>
                </Link>
            </li> 
            <li>
                <Link href="/calcular-dpp">
                    <a> 
                    Calcular DPP
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/calculadora-de-gravidez">
                    <a>
                    Calculadora de gravidez
                    </a>
                </Link>
            </li>
        </ul>
    </nav>
)
export default Menu;  
