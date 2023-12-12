import React from 'react'

export default function FirstBtn({ color, src }) {
  // const color = props.color
  // const src = props.src
  // const { color, src } = props
  // console.log(props);
  return (
    <button className='btn' style={{ background: color, fontFamily: 'inherit', border: 'none' }}>{src}</button>
  )
}

