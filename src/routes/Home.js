import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

// Class Component
class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {   // async: 비동기 함수 getMovies()
        const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // axios.get()이 API로부터 데이터를 fetch 할 때까지 기다림
        this.setState({ movies, isLoading: false });
        // state 객체의 movies: movies
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;   // isLoading == this.state.isLoading

        return (
            <section className="container">
                {isLoading ?
                    <div className="loader">
                        <span className="loader__text">Loading</span>
                    </div>
                    :
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie key={movie.id} id={movie.id} year={movie.year}
                                title={movie.title} summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres} />
                        ))}
                    </div>
                }
            </section>);
    }
}

export default Home;