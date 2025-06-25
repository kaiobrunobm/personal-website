
import React, { useMemo, useState, useEffect } from "react";
interface useOnScreenProps {
  ref: React.RefObject<HTMLDivElement | null>
}

const useOnScreen: React.FC<useOnScreenProps> = ({ ref }) => {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])


  useEffect(() => {
    if (ref.current == null) {
      console.log(ref.current)
    } else {
      observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [])

  return isIntersecting
}

export default useOnScreen;
