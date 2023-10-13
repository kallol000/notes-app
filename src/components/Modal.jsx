import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../css modules/modal.module.css'

export default function Modal({ isOpen, handleClose, children }){
    return(
        <div className={styles.darkBG}>
            <div className= {styles.centered}>
                <div className= {styles.modal}>
                    <IconButton onClick={() => handleClose()} style = {{position: 'absolute', right: '0', top: '0'}}>
                        <CloseIcon />
                    </IconButton>
                    {children}
                </div>   
            </div>
            
        </div>
    )
}