import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import styles from '../css modules/navbar.module.css'

export default function Navbar({ children, open, handleOpen }){
    
    const hamburgerStyle = {
        color: '#ffffff'
    }

    const navbarClass = open ? styles.navbarOpen : styles.navbar

    return(
        <section className={navbarClass} >  
            <IconButton onClick={() => handleOpen()}>
                {open ? <CloseIcon style = {hamburgerStyle}/> : <MenuIcon style = {hamburgerStyle} />  }   
            </IconButton>
            <h1>Noterious</h1>
            {children}
        </section>)
}