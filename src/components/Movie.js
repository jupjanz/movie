import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMovie, requestApiMovie } from '../actions/movie'

class Movie extends Component {
    constructor(props){
        super(props)
        this.state = {
            defaultMovie : "avengers"
        }
    }

    onChangeSearch = (e) => {
        const data = e.target.value
        this.setState({
            defaultMovie : data
        })
        this.props.searchMovie(data)
    }

    onClickSearch = () => {
        this.props.requestApiMovie()
    }


    componentDidMount(){ 
        this.props.searchMovie(this.state.defaultMovie)
        this.props.requestApiMovie()
    }


    render() {
        const {movie} = this.props
        console.log(movie && this.props.movie.results)
        return (
            <div>
                <div>
                <input placeholder="ใส่ขื่อ" onChange={this.onChangeSearch} defaultValue={this.state.defaultMovie} />
                <button class="btn btn-success" onClick={this.onClickSearch}> โหลด </button>
                </div>
                <div>
                   {movie && movie.results.map(item => (
                       <div key={item.id}>
                           <label className="d-flex justify-content-center">
                           <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}  alt="Movie"/> <br/>
                           </label>
                           {item.title}
                        </div>
                   ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie.movie,
    onSearchMovie: state.movie.onSearchMovie
})

const mapDispatchToProps = () => dispatch => {
    return {
        searchMovie: (movie) => dispatch(searchMovie(movie)),
        requestApiMovie: () => dispatch(requestApiMovie())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie)