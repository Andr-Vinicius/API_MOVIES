import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { APIKEY } from "../../config/key"
import { Container } from "./styled"

export default function Details(){
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const navigate = useNavigate();

    function handleBack(){
        navigate('/')
    }

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`)
        .then(response => response.json())
        .then(data => {
            const movie = {
                id,
                title: data.title,
                overview: data.overview,
                image: `${image_path}${data.poster_path}`,
                releaseDate: data.release_date,
            }
            setMovie(movie)
        })
    }, [id])


    return(
        <Container>
            <div className="movie">
            <img src={`${image_path}${movie.image}`} alt={movie.overview}/>
            <div className="details">
                <h1>{movie.title}</h1>
                <span>{movie.overview}</span>
                <span className="releaseDate">Release Date: {movie.releaseDate}</span>
                <button onClick={handleBack} type="submit">Go Back</button>
            </div>
         </div>
        </Container>
    )
}