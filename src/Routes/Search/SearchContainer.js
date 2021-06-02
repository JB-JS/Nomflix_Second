import { useState } from 'react'
import { moviesApi, tvApi } from '../../api'
import SearchPresenter from './SearchPresenter'

const SearchContainer = () => {
  const [result, setResult] = useState({
    movieResults: null,
    tvResults: null,
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()

    if (searchTerm !== '') searchByTerm()
  }

  const onChange = (e) => {
    const {
      target: { value },
    } = e

    setSearchTerm(value)
  }

  const searchByTerm = () => {
    setLoading(true)
    try {
      Promise.all([
        moviesApi.search(searchTerm),
        tvApi.search(searchTerm),
      ]).then((datas) => {
        const [
          {
            data: { results: movieResults },
          },
          {
            data: { results: tvResults },
          },
        ] = datas

        setResult({
          movieResults,
          tvResults,
        })
      })
    } catch {
      setError("Can't find results")
    } finally {
      setLoading(false)
    }
  }

  return (
    <SearchPresenter
      result={result}
      onSubmit={onSubmit}
      onChange={onChange}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
    />
  )
}

export default SearchContainer
