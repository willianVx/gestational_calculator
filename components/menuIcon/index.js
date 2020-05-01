import css from './style.css';

const MenuIcon = ({ menuDisplay, setMenuDisplay}) => {
    const handleMenuClick = (e) => { 
        e.preventDefault();
        setMenuDisplay(!menuDisplay);
    }
    return(
        <div className={css.menuIcon} onClick={handleMenuClick} >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default MenuIcon;  
