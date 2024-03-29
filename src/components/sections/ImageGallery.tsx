import Section from "@shared/Section"
import classNames from "classnames/bind"
import { useState } from "react"
import ImageViewer from "../imageViewer"
import styles from "./ImageGallery.module.scss"

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx > -1

  const handleSelectedIdx = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="갤러리">
        <ul className={cx("wrap-images")}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx("wrap-image")}
              onClick={() => handleSelectedIdx(idx)}
            >
              <picture>
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img src={`${src}.jpg`} alt="사진첩 이미지"></img>
              </picture>
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
