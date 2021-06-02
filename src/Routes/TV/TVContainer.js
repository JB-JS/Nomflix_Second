import { useEffect, useState } from 'react'
import { tvApi } from '../../api'
import TVPresenter from './TVPresenter'

const TVContainer = () => {
  const [TV, setTV] = useState({
    topRated: null,
    popular: null,
    ariringToday: null,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // componentDidMount
  useEffect(() => {
    try {
      Promise.all([
        tvApi.topRated(),
        tvApi.popular(),
        tvApi.airingToday(),
      ]).then((datas) => {
        const [
          {
            data: { results: topRated },
          },
          {
            data: { results: popular },
          },
          {
            data: { results: airingToday },
          },
        ] = datas

        setTV({
          topRated,
          popular,
          airingToday,
        })
      })
    } catch (error) {
      setError("Can't find movie information")
    } finally {
      setLoading(false)
    }
  }, [])

  return <TVPresenter TV={TV} loading={loading} error={error} />
}

export default TVContainer
