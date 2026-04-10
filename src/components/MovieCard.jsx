import { Link } from "react-router-dom"

export default function MovieCard({ title, poster, year }) {
    const slug = title

    let imageSrc = (poster && poster !== "N/A") ? poster : null
    return (
        <article>
            <Link to={`/${slug}`} state={{ title, poster: imageSrc || "https://placehold.co/300x450/png?text=Ingen+bilde", year }}>
                <h3>{title}</h3>
                <img src={imageSrc || "https://placehold.co/300x450/png?text=Ingen+bilde"} alt={title}
                    onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "https://placehold.co/300x450/png?text=Ingen+bilde"}}/>
                <p>År: {year}</p>
            </Link>
        </article>
    )
}
{/*Hentet fra Code-along workshop notatene */}
{/*Koden for å få frem alternativ bilde når APIen ikke klarer å hente bilde selv er generet med KI https://x.com/i/grok/share/858b2540656d4c96887d8693a4745c86 */}