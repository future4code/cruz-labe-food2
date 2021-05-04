import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/urls"

export const useRequestData = (path, initialState) => {
  const [data, setData] = useState(initialState)
  const token = localStorage.getItem("token")

  const getData = () => {
    axios
      .get(`${BASE_URL}${path}`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => console.log(err.message))
  }

  useEffect(() => {
    getData()
  }, [path, getData])

  return [data, getData]
}
