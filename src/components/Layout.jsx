import { Link } from "react-router-dom"

export default function Layout({children}){
    return (
        <>
        <nav>
        <Link to="/">Hjem</Link>
        </nav>
        {children}
        </>
    )
}
{/*Hentet fra Code-along workshop notatene */}