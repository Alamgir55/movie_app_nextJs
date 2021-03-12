
import { useRouter } from 'next/router'
import { getMoiveById } from '../../actions'

const Moive = (props) => {
    const  router = useRouter()
    const {id} = router.query;
    const { movie } = props

    return (
       <div className="container"> 
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">{movie.description}</p>
                <hr className="my-4" />
                <p>{movie.genre}</p>
                <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            <p className="desc-text">
                {movie.longDesc}
            </p>
            <style jsx>{`
            .desc-text{
                font-size: 21px;
            }
            `}</style>
      </div>
    )   
} 

Moive.getInitialProps = async (context) => {
    const {id} = context.query;
    const movie = await getMoiveById(id);
    return {movie};
}

export default Moive;