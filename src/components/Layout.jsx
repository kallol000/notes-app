import Drawer from "./Drawer"
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout({ open, handleOpen }){
    return(
        <div className="app">
            <Drawer open = {open} handleOpen = {handleOpen} /> 
            <main>
                <Navbar open = {open} handleOpen = {handleOpen} />
                <Outlet />
            </main>
        </div>
    )
}