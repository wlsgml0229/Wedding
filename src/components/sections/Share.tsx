import classNames from "classnames/bind"
import styles from "./Share.module.scss"
import Section from "@shared/Section"
import { useEffect } from "react"
import { format, parseISO } from "date-fns"
import { ko } from "date-fns/locale"

import { CopyToClipboard } from "react-copy-to-clipboard"

const cx = classNames.bind(styles)

declare global {
  interface Window {
    Kakao: any
  }
}

interface ShareProps {
  groomName: string
  brideName: string
  date: string
}

function Share({ groomName, brideName, date }: ShareProps) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }
    }
    console.log(window)
  }, [])

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `${groomName} 그리고 ${brideName} 결혼합니다.`,
        description: `${format(parseISO(date), "M월 d일 eeee aaa h시", {
          locale: ko,
        })}`,
        imageUrl:
          "https://www.shutterstock.com/shutterstock/photos/2196822215/display_1500/stock-vector-married-couple-with-floral-decoration-icon-hand-drawn-style-vector-design-illustrations-2196822215.jpg",
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: "청첩장보기",
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }
  return (
    <Section title="공유하기">
      <div className={cx("wrap-share")}>
        <button onClick={handleShareKakao}>
          <IconKakao />
        </button>
        <CopyToClipboard
          text={window.location.origin}
          onCopy={() => {
            window.alert("복사가 완료되었습니다 ✨")
          }}
        >
          <button>
            <IconClipboard />
          </button>
        </CopyToClipboard>
      </div>
    </Section>
  )
}

function IconKakao() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title />
      <g
        data-name="kakao talk chat media social"
        id="kakao_talk_chat_media_social"
      >
        <path d="M29.88,13.06a1,1,0,0,0-1,1c0,5.42-5.78,9.83-12.88,9.83a15.91,15.91,0,0,1-2.19-.16,1,1,0,0,0-.89.34,13.88,13.88,0,0,1-4,3,8.32,8.32,0,0,0,.71-3.91,1,1,0,0,0-.56-.81c-3.75-1.83-6-4.92-6-8.28C3.12,8.63,8.9,4.22,16,4.22A14.15,14.15,0,0,1,26.87,8.79,1,1,0,1,0,28.4,7.5C25.64,4.2,21,2.22,16,2.22,7.79,2.22,1.12,7.53,1.12,14.06c0,4,2.44,7.6,6.56,9.8a8.82,8.82,0,0,1-1.29,3.91A.85.85,0,0,0,6.3,28a1.39,1.39,0,0,0,.54,1.52,1.35,1.35,0,0,0,1.52.07,18.49,18.49,0,0,0,5.72-3.8,18.71,18.71,0,0,0,1.92.11c8.21,0,14.88-5.31,14.88-11.83A1,1,0,0,0,29.88,13.06Z" />
        <path d="M10.79,17.62A1,1,0,0,0,12.08,17l1.06-2.76L14.21,17a1,1,0,0,0,.93.64,1.13,1.13,0,0,0,.36-.06,1,1,0,0,0,.58-1.3l-2-5.18a1,1,0,0,0-1.87,0l-2,5.18A1,1,0,0,0,10.79,17.62Z" />
        <path d="M17.51,10.5a1,1,0,0,0-1,1v5.18a1,1,0,0,0,1,1h2.56a1,1,0,0,0,0-2H18.51V11.5A1,1,0,0,0,17.51,10.5Z" />
        <path d="M8.46,17.68a1,1,0,0,0,1-1V12.5h.75a1,1,0,0,0,0-2H6.71a1,1,0,0,0,0,2h.75v4.18A1,1,0,0,0,8.46,17.68Z" />
        <path d="M22.46,10.5a1,1,0,0,0-1,1v5.18a1,1,0,0,0,2,0v-1.2L25,17.32a1,1,0,0,0,.77.36A1,1,0,0,0,26.53,16l-2-2.34,1.8-1.41a1,1,0,0,0-1.23-1.58L23.46,12V11.5A1,1,0,0,0,22.46,10.5Z" />
      </g>
    </svg>
  )
}

function IconClipboard() {
  return (
    <svg
      height="22px"
      version="1.1"
      viewBox="0 0 18 22"
      width="18px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <desc />
      <defs />
      <g
        fill="none"
        fill-rule="evenodd"
        id="Page-1"
        stroke="none"
        stroke-width="1"
      >
        <g
          fill="#000000"
          id="Core"
          transform="translate(-171.000000, -127.000000)"
        >
          <g id="content-paste" transform="translate(171.000000, 127.000000)">
            <path
              d="M16,2 L11.8,2 C11.4,0.8 10.3,0 9,0 C7.7,0 6.6,0.8 6.2,2 L2,2 C0.9,2 0,2.9 0,4 L0,20 C0,21.1 0.9,22 2,22 L16,22 C17.1,22 18,21.1 18,20 L18,4 C18,2.9 17.1,2 16,2 L16,2 Z M9,2 C9.6,2 10,2.4 10,3 C10,3.6 9.6,4 9,4 C8.4,4 8,3.6 8,3 C8,2.4 8.4,2 9,2 L9,2 Z M16,20 L2,20 L2,4 L4,4 L4,7 L14,7 L14,4 L16,4 L16,20 L16,20 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Share
