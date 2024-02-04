import React from "react"
interface ErrorBoundaryProps {
  children: React.ReactNode
  fallbackUI?: React.ReactNode
}
interface ErrorBoundaryState {
  hasError: boolean
}
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props)
    this.state = { hasError: false }
  }
  //return 값으로 state가 업데이트 하위자식에서 에러발생 -> hasError : true
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  // 에러감지 -> 로깅처리
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("error", error)
    console.log("errorInfo", errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallbackUI ?? <h1>에러가 발생했습니다.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
