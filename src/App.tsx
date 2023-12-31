import React, { useEffect, useState } from "react"

import classNames from "classnames/bind"
import styles from "./App.module.scss"
import FullScreenMessage from "@shared/FullScreenMessage"

import Heading from "@components/sections/Heading"
import Video from "@components/sections/Video"

import { Wedding } from "@models/wedding"
import ImageGallery from "./components/sections/ImageGallery"
import Intro from "./components/sections/Intro"
import Invitation from "./components/sections/Invitation"
import Calendar from "./components/sections/Calendar"
import Map from "./components/sections/Map"

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLooading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLooading(true)
    fetch("http://localhost:8888/wedding")
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
  if (!wedding) {
    return null
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding
  return (
    <div className={cx("container")}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      {JSON.stringify(wedding)}
    </div>
  )
}

export default App
