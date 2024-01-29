import React, {
  ComponentProps,
  createContext,
  useContext,
  useState,
} from "react"
import { createPortal } from "react-dom"

import Modal from "@shared/Modal"

//모달의 props 추출
type ModalProps = ComponentProps<typeof Modal>
type ModalOptions = Omit<ModalProps, "open">
interface ModalContextValue {
  open: (options: ModalProps) => void
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
  const open = (options: ModalOptions) => {
    setModalState({ ...options, open: true })
  }
  const close = () => {
    setModalState(defaultValues)
  }

  const values = {
    open,
    close,
  }
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
  if (value === null) {
    throw new Error("ModalContext 안에서 사용해주세요")
  }
  return value
}

export default ModalContext