import React from 'react'
import face6 from '../asset/face6.png'
import face1 from '../asset/face1.png'
import HighPrioroity from '../asset/High Priority.png'
import '../index.css'

const SideBar = () => {
    return (
        <div className='Sidebar'>
            <div className='Image-bg'></div>
            <img src={face6} alt="" />
            <p className='user-name' >Mark Rogers</p>
            <p className='user-email'>markrogers@gmail.com</p>
            <div className='option-section'>
                <div className='option'>
                    <h4 className='tag-text' >Tags</h4>
                    <select className='select-opt' name="" id="">
                        <option value="">FaceBook Integration</option>
                    </select>
                </div>
                <div className='option'>
                    <h4 className='tag-text'>Category</h4>
                    <select className='select-opt'  name="" id="">
                        <option  value="">Refund and Billing</option>
                    </select>
                </div>
                <div className='option'>

                    <h4 className='tag-text'>Group</h4>
                    <select className='select-opt' name="" id="">
                        <option   value="">Refund and Billing</option>
                    </select>
                </div>
                <div className='option'>
                    <h4 className='tag-text'>Priority</h4>
                    <select className='select-opt' name="" id="">
                        <option   value=""><img src={face1}/> Urgent</option>
                    </select> 
                </div>
                <div className='option'>
                    <h4 className='tag-text'>Type</h4>
                    <select className='select-opt' name="" id="">
                        <option value="">FaceBook Integeration</option>
                    </select>
                </div>
                <div className='option'>
                    <h4 className='tag-text'>Agent</h4>
                    <select className='select-opt' name="" id="">
                        <option value="">Agent 1</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SideBar