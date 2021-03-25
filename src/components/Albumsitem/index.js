import React from 'react'

const Albumsitem = ({data:{image,desc}}) => {
    return (
        <div>
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height={225} src={image} />
                <div className="card-body">
                  <p className="card-text">{desc}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
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
