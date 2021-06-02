import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import noPosterSmall from '../assets/noPosterSmall.png'

const Container = styled.div``

const Image = styled.div`
  height: 180px;
  background: url(${(props) => props.bgUrl}) no-repeat center / cover;
  transition: opacity 0.3s ease-in-out;
`

const Rating = styled.span`
  position: absolute;
  right: 5px;
  bottom: 5px;
  opacity: 0;
`

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`

const Title = styled.div`
  margin-bottom: 5px;
`

const Year = styled.span`
  font-size: 8px;
`

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgUrl={
              imageUrl
                ? `https://image.tmdb.org/t/p/w500${imageUrl}`
                : noPosterSmall
            }
          />
          <Rating>
            <span role="img" aria-label="rating">
              ⭐️
            </span>
            {rating}/10
          </Rating>
        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year} </Year>
      </Container>
    </Link>
  )
}

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
}

export default Poster
