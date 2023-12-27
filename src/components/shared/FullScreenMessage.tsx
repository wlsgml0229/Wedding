import classNames from "classnames/bind"
import styles from "./FullScreenMessage.module.scss"

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
  type: "loading" | "error"
}

function Error() {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("ico-error")}
    >
      <g data-name="9-sad" id="_9-sad">
        <rect height="4" width="4" x="32" />
        <rect height="4" width="4" x="36" />
        <rect height="4" width="4" x="28" />
        <rect height="4" width="4" x="24" />
        <rect height="4" width="4" x="20" y="4" />
        <rect height="4" width="4" x="16" y="4" />
        <rect height="4" width="4" x="44" y="4" />
        <rect height="4" width="4" x="40" y="4" />
        <rect height="4" width="4" x="32" y="60" />
        <rect height="4" width="4" x="36" y="60" />
        <rect height="4" width="4" x="28" y="60" />
        <rect height="4" width="4" x="24" y="60" />
        <rect height="4" width="4" x="20" y="56" />
        <rect height="4" width="4" x="16" y="56" />
        <rect height="4" width="4" x="44" y="56" />
        <rect height="4" width="4" x="40" y="56" />
        <rect
          height="4"
          transform="translate(96 -28) rotate(90)"
          width="4"
          x="60"
          y="32"
        />
        <rect
          height="4"
          transform="translate(100 -24) rotate(90)"
          width="4"
          x="60"
          y="36"
        />
        <rect
          height="4"
          transform="translate(92 -32) rotate(90)"
          width="4"
          x="60"
          y="28"
        />
        <rect
          height="4"
          transform="translate(88 -36) rotate(90)"
          width="4"
          x="60"
          y="24"
        />
        <rect
          height="4"
          transform="translate(80 -36) rotate(90)"
          width="4"
          x="56"
          y="20"
        />
        <rect
          height="4"
          transform="translate(76 -40) rotate(90)"
          width="4"
          x="56"
          y="16"
        />
        <rect
          height="4"
          transform="translate(104 -12) rotate(90)"
          width="4"
          x="56"
          y="44"
        />
        <rect
          height="4"
          transform="translate(100 -16) rotate(90)"
          width="4"
          x="56"
          y="40"
        />
        <rect
          height="4"
          transform="translate(36 32) rotate(90)"
          width="4"
          y="32"
        />
        <rect
          height="4"
          transform="translate(40 36) rotate(90)"
          width="4"
          y="36"
        />
        <rect
          height="4"
          transform="translate(32 28) rotate(90)"
          width="4"
          y="28"
        />
        <rect
          height="4"
          transform="translate(28 24) rotate(90)"
          width="4"
          y="24"
        />
        <rect
          height="4"
          transform="translate(28 16) rotate(90)"
          width="4"
          x="4"
          y="20"
        />
        <rect
          height="4"
          transform="translate(24 12) rotate(90)"
          width="4"
          x="4"
          y="16"
        />
        <rect
          height="4"
          transform="translate(52 40) rotate(90)"
          width="4"
          x="4"
          y="44"
        />
        <rect
          height="4"
          transform="translate(48 36) rotate(90)"
          width="4"
          x="4"
          y="40"
        />
        <rect height="4" width="4" x="12" y="8" />
        <rect height="4" width="4" x="48" y="8" />
        <rect height="4" width="4" x="8" y="12" />
        <rect height="4" width="4" x="8" y="48" />
        <rect height="4" width="4" x="12" y="52" />
        <rect height="4" width="4" x="48" y="52" />
        <rect height="4" width="4" x="52" y="48" />
        <rect height="4" width="4" x="52" y="12" />
        <rect
          height="4"
          transform="translate(92 92) rotate(180)"
          width="4"
          x="44"
          y="44"
        />
        <rect
          height="4"
          transform="translate(36 92) rotate(180)"
          width="4"
          x="16"
          y="44"
        />
        <rect
          height="4"
          transform="translate(84 84) rotate(180)"
          width="4"
          x="40"
          y="40"
        />
        <rect
          height="4"
          transform="translate(44 84) rotate(180)"
          width="4"
          x="20"
          y="40"
        />
        <rect
          height="4"
          transform="translate(76 76) rotate(180)"
          width="4"
          x="36"
          y="36"
        />
        <rect
          height="4"
          transform="translate(68 76) rotate(180)"
          width="4"
          x="32"
          y="36"
        />
        <rect
          height="4"
          transform="translate(60 76) rotate(180)"
          width="4"
          x="28"
          y="36"
        />
        <rect
          height="4"
          transform="translate(52 76) rotate(180)"
          width="4"
          x="24"
          y="36"
        />
        <rect height="4" width="4" x="16" y="20" />
        <rect height="4" width="4" x="16" y="24" />
        <rect height="4" width="4" x="20" y="20" />
        <rect height="4" width="4" x="20" y="24" />
        <rect height="4" width="4" x="40" y="20" />
        <rect height="4" width="4" x="40" y="24" />
        <rect height="4" width="4" x="44" y="20" />
        <rect height="4" width="4" x="44" y="24" />
      </g>
    </svg>
  )
}

function Heart() {
  return (
    <svg
      id="Layer_1"
      className={cx("ico-heart")}
      version="1.1"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <polygon
          className={cx("st0")}
          points="114,34 114,24 104,24 104,14 74,14 74,24 64,24 54,24 54,14 24,14 24,24 14,24 14,34 4,34 4,64 14,64 14,74 24,74 24,84 34,84 34,94 44,94 44,104 54,104 54,114 64,114 124,54 124,34"
        />
      </g>
      <g>
        <rect className={cx("st1")} height="10" width="10" x="24" y="34" />
      </g>
      <g>
        <g>
          <rect className={cx("st2")} height="10" width="10" x="64" y="104" />
        </g>
        <g>
          <rect className={cx("st2")} height="10" width="10" x="74" y="94" />
        </g>
        <g>
          <rect className={cx("st2")} height="10" width="10" x="84" y="84" />
        </g>
        <g>
          <rect className={cx("st2")} height="10" width="10" x="94" y="74" />
        </g>
        <g>
          <rect className={cx("st2")} height="10" width="10" x="104" y="64" />
        </g>
        <g>
          <rect className={cx("st2")} height="10" width="10" x="114" y="54" />
        </g>
      </g>
    </svg>
  )
}
function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx("container")}>
      {type === "loading" ? (
        <Heart />
      ) : (
        <>
          <Error /> 에러가 발생했어요. 잠시후 시도 해주세요.
        </>
      )}
    </div>
  )
}

export default FullScreenMessage
