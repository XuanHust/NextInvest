import { useEffect } from "react"
import { useBreadcrumb } from "../contexts/breadcrumb"

const useTextBreadcrumb = (textBreadcrumb?: any) => {
  const { setTextBreadcrumb } = useBreadcrumb()

  useEffect(() => {
    return () => {
      setTextBreadcrumb('');
    }
  }, [textBreadcrumb])
  return setTextBreadcrumb
}

export default useTextBreadcrumb