export default function MovieCard({char}){
    const{Poster,Title, Year} = char
    return(
        <article>
            <h3>{Title}</h3>
            <img src={Poster} alt={Title}></img>
            <p>{Year}</p>
        </article>
    )
}