import React from 'react'

function Card({title="Default",btnText="Default",cardDesc="Default",img="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}) {
  return (
    <div className="card" style={{width: "18rem"}}>
            <img
              src={img}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {cardDesc}
              </p>
              <a href="/" className="btn btn-success">{btnText}</a>
            </div>
          </div>
  )
}

export default Card