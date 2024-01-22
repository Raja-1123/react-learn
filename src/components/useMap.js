import React from 'react'

const useMap = () => {
  const arr=[1,2,3,4,5,6,7]
  return (
    <div>
      {
        arr.map(
          (Value,index) => <li key={index}>{Value}</li>
        )
      }
    </div>
  )
}

export default useMap