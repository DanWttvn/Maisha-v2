import { useEffect, useRef, useState, MutableRefObject } from 'react'

export default (first = true, distance = '100px'): { isNear: boolean, elementRef: MutableRefObject<any> } => {
  const [ isNear, setNear ] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const element = elementRef.current

    const onChange: IntersectionObserverCallback = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setNear(true)
        first && observer.disconnect()
      } else {
        !first && setNear(false)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    })

    if (element) observer.observe(element)

    return () => observer && observer.disconnect()
  })
  
  return { isNear, elementRef }
}
