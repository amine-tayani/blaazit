import { useState, useEffect } from "react"
import axios from "axios"

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get(url)
      setData(response.data)
      setLoading(false)
    }

    fetchData()
  }, [url])

  return { loading, data }
}
