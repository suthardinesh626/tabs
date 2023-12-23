import React from "react";
import message from "../asset/sidenav/Screenshot 2023-12-21 193603.png";
import attach from "../asset/sidenav/Icon-Color.png";
import pdf from "../asset/sidenav/Path 172.png";
import download from "../asset/sidenav/Path 171.png";
import back from '../asset/sidenav/Primary-Color (1).png'
import forwaed from '../asset/sidenav/Primary-Color (2).png'
import bolt from '../asset/sidenav/bolt.png'
import '../asset/style/chat.css'

const Chat = () => {
  return (
    <div className="chat">
      <div className="top-nav" >
        <div className="topnav-in">
          <img src={message} alt="" />
          <h3>How can I get refund for my order?</h3>
        </div>
        <button className="tag">Tag</button>
        <button className="tag">Tag2</button>
      </div>
      <div className="message-area">
        <p>Hi,</p>
        <p className="text">
          Do you guys have an estimate for how long we'll have to wait for these
          two-factor authentication? I'm getting some pressure from our head of
          IT who's pushing to switch to one of your competitors.
        </p>
        <p>Thanks,</p>
        <p>Mark</p>

        <div className="attach" >
          <img src={attach} alt="" />
          <p>1 attachment</p>
        </div>
        <div className="attach-pdf">
          <img src={pdf} alt="" />
          <div className="pdf-down">
            <div className="pdf-main">
              <p className="pdf-text1" >Document.pdf</p>
              <p className="pdf-text2">115 KB</p>
            </div>
            <div className="download-logo">
              <img src={download} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="between-text">
        <p className="between-text1" >Hi Team Mate this is a note</p>
        <p className="between-text2" >Private Note/Public Note (display in help center)</p>
      </div>
      <div className="bottom-nav">
        <img src={message} alt="" />
        <h3>How can I get refund for my order?</h3>
      </div>

      <div className="just-div"></div>

      <div className="ford-back-area">
        <div className="ford-back-btn">
          <div className="back">
            <img src={back} alt="" />
            <p>Reply</p>
          </div>
          <div className="ford">
            <p>Forward</p>
            <img src={forwaed} alt="" />
          </div>
        </div>
        <div className="chat-box">
          <div className="text-area">
            <div className="type">
              <img src={bolt} alt="" />
              <p>Quick Reply</p>
            </div>
            <img src={attach} alt="" />
          </div>
          <div>
            <button className="send-btn">send</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Chat;
