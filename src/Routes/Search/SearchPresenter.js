import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import Poster from '../../components/Poster'
import Section from '../../components/Section'

const Container = styled.div`
  padding: 20px;
`

const Form = styled.form`
  width: 100%;
  margin-bottom: 50px;
`

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 28px;
`

const SearchPresenter = ({
  result: { movieResults, tvResults },
  onSubmit,
  onChange,
  searchTerm,
  loading,
  error,
}) => (
  <Container>
    <Helmet>
      <title>Search - 영화 제공 서비스 NomFlix</title>
    </Helmet>
    <Form onSubmit={onSubmit}>
      <Input
        onChange={onChange}
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
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
        {tvResults && tvResults.length > 0 && (
          <Section title="Tv Show Results">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                rating={show.vote_average}
                imageUrl={show.poster_path}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color="rgb(233, 30, 0)" />}
        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message text="Nothing Found" color="rgb(255, 199, 100)" />
          )}
      </>
    )}
  </Container>
)

SearchPresenter.propTypes = {
  result: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
}

export default SearchPresenter
