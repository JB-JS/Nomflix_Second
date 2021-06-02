import { useEffect, useState } from 'react'
import { moviesApi } from '../../api'
import HomePresenter from './HomePresenter'

const HomeContainer = () => {
  const [movies, setMovies] = useState({
    nowPlaying: null,
    upcoming: null,
    popular: null,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // componentDidMount
  useEffect(() => {
    try {
      Promise.all([
        moviesApi.nowPlaying(),
        moviesApi.upcoming(),
        moviesApi.popular(),
      ]).then((datas) => {
        const [
          {
            data: { results: nowPlaying },
          },
          {
            data: { results: upcoming },
          },
          {
            data: { results: popular },
          },
        ] = datas

        setMovies({
          nowPlaying,
          upcoming,
          popular,
        })
      })
    } catch (error) {
      setError("Can't find movie information")
    } finally {
      setLoading(false)
    }
  }, [])

  return <HomePresenter movies={movies} loading={loading} error={error} />
}

export default HomeContainer
