import React from 'react'

function PortfolioItem({handdlePortfolioClick,item}) {
  return (
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div onClick={()=>handdlePortfolioClick(item)} className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={item.img} alt="..." />
                        </div>
                    </div>
  )
}

export default PortfolioItem