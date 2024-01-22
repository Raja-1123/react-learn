import React from 'react'

const useFilter = () => {
    const arr=['one', 'two', 'three', 'four', 'five'];
    const arr1=[10, 20, 30, 40, 50, 60, 70]
    const value = arr1.filter(number => number>30)
    const filtered = arr.filter(day => day.includes('f'));
  return (
    <div>
        {filtered.map(
            (items) => <li >{items}</li>
        )}
        {
        value.map(
            (value) => <li>{value}</li>
        )
        }
    </div>
  )
}

export default useFilter