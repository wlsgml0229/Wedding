import { Wedding } from "@/models/wedding"
import { useModalContext } from "@contexts/ModalContext"
import { useCallback, useEffect, useRef } from "react"
function AttendCountModal({ wedding }: { wedding: Wedding }) {
  const { open, close } = useModalContext() // 캐시된함수
  const haveSeenModal = localStorage.getItem("@have-seen-modal")

  const closeModal = useCallback(() => {
    localStorage.setItem("@have-seen-modal", "true")
    close()
  }, [close])

  const $input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log("hi")
    if (haveSeenModal === "true") {
      return
    }

    open({
      title: `현재 참석자: ${wedding.attendCount}`,
      body: (
        <div>
          <input
            ref={$input}
            placeholder="참석 가능 인원을 추가해주세요"
            style={{ width: "100%" }}
            type="number"
          />
        </div>
      ),
      onLeftButtonClick: () => {
        closeModal()
      },
      onRightButtonClick: () => {
        if (!$input.current) {
          return
        }
        //서버 데이터를 업데이트
        fetch("http://localhost:8888/wedding", {
          method: "PUT",
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + Number($input.current.value),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        closeModal()
      },
    })
  }, [open, close, wedding, haveSeenModal, closeModal])
  return null
}

export default AttendCountModal