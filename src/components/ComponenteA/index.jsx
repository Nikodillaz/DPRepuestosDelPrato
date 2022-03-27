import React from 'react'

const ComponenteA = (props) => {

  const {firstName} = props; 
  return (
    <>
      <h5>ComponenteA</h5>
      <h5>{firstName}</h5>
    </>
  )
}

export default ComponenteA