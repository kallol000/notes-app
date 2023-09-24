

export default function Drawer({ children, open }){

    const drawerClass = open ? 'drawer open' : 'drawer'

    return(
        <section className = {drawerClass} >
            {children}
        </section>
    )
}