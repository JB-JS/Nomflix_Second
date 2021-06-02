import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import Poster from '../../components/Poster'
import Section from '../../components/Section'

const Container = styled.div`
  padding: 20px;
`

const HomePresenter = ({
  movies: { nowPlaying, popular, upcoming },
  loading,
  error,
}) => (
  <>
    <Helmet>
      <title>Movies - 영화 제공 서비스 Nomflix</title>
    </Helmet>

    {loading ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies">
            {upcoming.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color="rgb(233, 30, 0)" />}
      </Container>
    )}
  </>
)

HomePresenter.propTyeps = {
  movies: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

export default HomePresenter
