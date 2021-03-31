import React from 'react'

const Albumsitem = ({data:{id,image,name},onDelete}) => {
    return (
        <div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height={225} src={image} />
                <div className="card-body">
                  <p className="card-text">{name}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>onDelete(id)}>Update</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary" >Delete</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Albumsitem
