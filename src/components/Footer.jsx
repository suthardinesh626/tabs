import Delete from '../asset/Primary-Color.png'
import '../asset/style/footer.css'

const Footer = () => {
    return (
        <div className='Footer-main'>
            <div className='open-btn' >
                <p>Open</p>
            </div>
            <div className='tic-del'>
                <p className='items'>Close Ticket</p>
                <img className='items' src={Delete} alt="" />
            </div>
        </div>
    )
}

export default Footer