import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="movies-slider-container">
          {moviesList.map(movie => (
            <MovieItem key={movie.id} movieDetails={movie} />
          ))}
        </div>
      </Slider>
    </div>
  )
}

export default MoviesSlider
