import React, {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import { createPortal } from "react-dom"

import Modal from "@shared/Modal"

//모달의 props 추출
type ModalProps = ComponentProps<typeof Modal>
type ModalOptions = Omit<ModalProps, "open">
interface ModalContextValue {
  open: (options: ModalOptions) => void
  close: () => void
}

const Context = createContext<ModalContextValue | undefined>(undefined)

const defaultValues: ModalProps = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
}
function ModalContext({ children }: { children: React.ReactNode }) {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues)
  const $potal_root = document.getElementById("root-portal")

  const open = useCallback((options: ModalOptions) => {
    setModalState({ ...options, open: true })
  }, [])

  const close = useCallback(() => {
    setModalState(defaultValues)
  }, [])

  const values = useMemo(
    () => ({
      open,
      close,
    }),
    [open, close],
  )
  return (
    <Context.Provider value={values}>
      {children}
      {$potal_root !== null
        ? createPortal(<Modal {...modalState} />, $potal_root)
        : null}
    </Context.Provider>
  )
}

export function useModalContext() {
  const value = useContext(Context)
  if (!value) {
    throw new Error("ModalContext 안에서 사용해주세요")
  }
  return value
}

export default ModalContext
