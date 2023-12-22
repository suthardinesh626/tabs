import React from 'react'
import icon1 from '../asset/sidenav/Ellipse 112.png'
import icon2 from '../asset/sidenav/Path195.png'
import icon3 from '../asset/sidenav/pulse.png'
import icon4 from '../asset/sidenav/user.png'
import icon5 from '../asset/sidenav/Icon-Color.png'
import '../asset/style/sidenav.css'

const SideNav = () => {
    return (
        <div>
            <div className='icons'>
                <img src={icon1} alt="" />
                <img src={icon4} alt="" />
                <img src={icon3} alt="" />
                <img src={icon5} alt="" />
                <div className='shopify-icon'>
                    <img src={icon2} alt="not" />
                </div>
            </div>
        </div>
    )
}

export default SideNav