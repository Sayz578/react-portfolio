import React from 'react'

const HeaderBottomPage = ({title, subtitle}) => {
  return (
    <div className="header-bottom__about">
            <div className="container">
                <div className="header-content__about">

                    <h1 className="header-title">{title}</h1>
                    <span className="header-sub__about">home/
                        <span>{subtitle}</span>
                    </span>
                </div>

            </div>
        </div>
  )
}

export default HeaderBottomPage