import { useEffect, useState } from 'react'

import { moviesApi, tvApi } from '../../api'
import DetailPresenter from './DetailPresenter'

const DetailContainer = ({
  match: {
    params: { id },
    url,
  },
  location: { pathname },

  history: { push },
}) => {
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isMovie] = useState(pathname.includes('/movie/'))

  useEffect(() => {
    const parsedId = parseInt(id, 10)

    if (isNaN(parsedId)) {
      return push('/')
    }

    let result = {}

    async function fetchResult() {
      try {
        if (isMovie) {
          const a = await moviesApi.movieDetail(parsedId)
          result = a.data
        } else {
          const a = await tvApi.tvDetail(parsedId)
          result = a.data
        }

        setResult(result)
        setLoading(false)
      } catch (error) {
        setError("Can't find anything")
        setLoading(false)
      }
    }

    fetchResult()
  }, [setResult, setLoading, push, id, isMovie])

  return (
    <DetailPresenter
      result={result}
      loading={loading}
      error={error}
      id={id}
      pathname={pathname}
      url={url}
    />
  )
}

export default DetailContainer
