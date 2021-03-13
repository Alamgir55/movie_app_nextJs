import React from 'react'
import Router from 'next/router'
import MovieCreateForm from '../../../components/movieCreateForm'
import { getMoiveById, updateMoive } from '../../../actions'

class EditMovie extends React.Component {

    // static getInitialProps({query}){
    //     return {query};
    // }

    static async getInitialProps({query}){
        const movie = await getMoiveById(query.id);
        return {movie};
    }

    handleUpdateMovie = (movie) => {
        updateMoive(movie).then((updateMoive) => {
            Router.push('/movies/[id]', `/movies/${movie.id}`)
        })
    }
    // state = {
    //     movie: {
    //         name: '',
    //         description: '',
    //         rating: '',
    //         image: '',
    //         cover: '',
    //         longDesc: ''
    //     }
    // }

    // componentDidMount(){
    //     const {id} = this.props.query;
    //     getMoiveById(id).then(movie => {
    //         this.setState({movie})
    //     })
    // }

    render(){
        const { movie } = this.props;
        return (
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm 
                    initialData={movie}
                    submitButton="Update"
                    handleForSubmit={this.handleUpdateMovie} />
            </div>
        )
    }
}

export default EditMovie;