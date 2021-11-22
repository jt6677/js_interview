import React from 'react'
export default function ShowXY() {
  const [strXY, setStrXY] = useState('0,0')
  const onMouseMove = (e) => {
    let str = e.pageX + ',' + e.pageY
    setStrXY(str)
    console.log(str)
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  })
  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove) //eslint-disable
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [input])
  return (
    <div>
      <h1>{strXY}</h1>
    </div>
  )
}
