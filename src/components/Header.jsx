import React from 'react'
import '../asset/style/header.css'
import mesage from '../asset/sidenav/Screenshot 2023-12-21 193603.png'

const Header = () => {
    return (
        <div className='main-head'>
            <div className='header'>
                <img src={mesage} alt="" />
                <h4 className='head'>How can I get refund for my order?</h4>
                <div className='head-side'>
                    <div className='side-nav'>
                        <p className='mini-head'>Ticket</p>
                        <p className='code'>#5555</p>
                    </div>
                    <div className='side-nav'>
                        <p className='mini-head'>status</p>
                        <p className='status'>Open</p>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <p className='part line'>Conversation</p>
                <p className='part'>Attachment</p>
                <p className='part'>History</p>
            </div>
        </div>
    )
}

export default Header