import React, { useEffect, useState} from 'react'
import data from './data'
export const Colors = () => {
  let [colors, setColors] = useState([]);
  useEffect(() =>{
    setColors(data)
  })
  return (
    <>
    <div className='colorsMain'>
    <div className='clrCategories'>
      <strong>Minimal</strong>
      <strong>Normal</strong>
      <strong>Playfull</strong>
      <strong>Cheerfull</strong>
    </div>
    <div className='pelatteContainer'>
      <div className='filterMenu'>
        <ul>
          <li>Dark</li>
          <li>Light</li>
          <li>Dim</li>
          <li>Contrast</li>
          <li>The odd</li>
          <li>Faded</li>
          <li>Autumn</li>
          <li>Summer</li>
          <li>Winter</li>
          <li>Spicy</li>
        </ul>
      </div>
      <div className='pelattes'>
        {
          colors.map((color) =>{
            return(
              <>
              <div className='pelatte' key = {color.id} style= {{height: `${color.colors.length*40}px`}}>
                {color.colors.map((val) =>{
                  return(
                    <div style={{backgroundColor: val}}> </div>
                  )
                })}
              </div>
              </>
            )
          })
        }
      </div>
    </div>
    </div>
    </>
  )
}

export default Colors