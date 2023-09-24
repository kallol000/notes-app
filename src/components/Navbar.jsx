import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function Navbar({ children, open, handleOpen }){
    
    const hamburgerStyle = {
        color: '#ffffff'
    }

    const navbarClass = open ? 'navbar open' : 'navbar'

    return(
        <section className={navbarClass} >  
            <IconButton onClick={() => handleOpen()}>
                {open ? <CloseIcon style = {hamburgerStyle}/> : <MenuIcon style = {hamburgerStyle} />  }   
            </IconButton>
            <h1>Noterious</h1>
            {children}
        </section>)
}