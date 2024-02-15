import React from 'react'
import spinner from'./spinner1.gif' 

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center" style={{backgroundColor:"white"}}><img src={spinner} alt="Loading" /></div>
  )
}
