import React from 'react'

function Circle({classname, children}) {
  return (
    <div className={classname}>{children}</div>
  )
}

export default Circle