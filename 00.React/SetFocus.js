import React, { useRef, useEffect } from 'react'

export default function SetFocused() {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <form>
      <input type="text" placeholder="Email" ref={inputRef} />
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  )
}
