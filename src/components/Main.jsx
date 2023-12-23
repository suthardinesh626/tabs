import React, { useRef } from 'react';
import Header from './Header';
import Chat from './Chat';
import SideNav from './SideNav';
import SideBar from '../components/SideBar';
import Footer from './Footer'
import '../asset/style/main.css';

const Main = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  const handleDragStart = (e, target) => {
    e.dataTransfer.setData('target', target);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const target = e.dataTransfer.getData('target');

    if (target === 'Left') {
      [leftContentRef.current.innerHTML, rightContentRef.current.innerHTML] = [
        rightContentRef.current.innerHTML,
        leftContentRef.current.innerHTML,
      ];
    } else if (target === 'right') {
      [rightContentRef.current.innerHTML, leftContentRef.current.innerHTML] = [
        leftContentRef.current.innerHTML,
        rightContentRef.current.innerHTML,
      ];
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className='main-page'>
      <div className='main-body'>
        <div
          className='Left'
          draggable='true'
          onDragStart={(e) => handleDragStart(e, 'Left')}
          onDrop={handleDrop}
          onDragOver={allowDrop}
        >
          <div ref={leftContentRef}>
            <Header />
            <div className='chat-nav'>
              <Chat />
              <SideNav />
            </div>
          </div>
        </div>
        <div
          className='right'
          draggable='true'
          onDragStart={(e) => handleDragStart(e, 'right')}
          onDrop={handleDrop}
          onDragOver={allowDrop}
        >
          <div className="grand-side"  ref={rightContentRef}>
            <SideBar />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
