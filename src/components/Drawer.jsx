import styles from '../css modules/drawer.module.css'

export default function Drawer({ children, open }){

    const drawerClass = open ? styles.drawer : styles.drawerClosed
    const linkClass = open ? styles.link : styles.linkClosed

    return(
        <section className = {drawerClass} >
            <div className= {linkClass}>Passwords</div>
            <div className= {linkClass}>Passwords</div>
            <div className= {linkClass}>Passwords</div>
        </section>
    )
}