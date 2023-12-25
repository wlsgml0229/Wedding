import React, { useEffect, useState } from "react"

import classNames from "classnames/bind"
import styles from "./App.module.scss"
import { FullScreenMessage } from "./components/shared/FullScreenMessage"

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState(null)
  const [loading, setLooading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLooading(true)
    fetch("http://localhost:8888/weddinsg")
      .then((res) => {
        if (res.ok === false) {
          throw new Error("청첩장 정보를 불러오는데 실패했습니다.")
        }
        return res.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        setError(true)
      })
      .finally(() => {
        setLooading(false)
      })
  }, [])
  if (loading) {
    return <FullScreenMessage type="loading" />
  }
  if (error) {
    return <FullScreenMessage type="error" />
  }
  return <div className={cx("container")}>{JSON.stringify(wedding)}</div>
}

export default App
