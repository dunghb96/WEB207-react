import React from 'react'
import Albumsitem from '../Albumsitem'

const Albums = (props) => {
    return (
        <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {props.data.map((album,index)=>{
              return <Albumsitem key={index} data={album} />
            })}
          </div>
        </div>
      </div>
    )
}

export default Albums
