import React from 'react';

// importing useState hook 
import { useState , useEffect } from 'react';

// local styles
import styles from './Main.module.css'

// react bootstrap imports below
import {Dropdown} from 'react-bootstrap';

// importing nessacary icons for this component from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

// importing coudown package added to the test project 
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
      isPlaying
      duration={60}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[5, 5, 5, 5]}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  )
  
  const Main = () => {
    
   
        const [currentCount, setCount] = useState(60);
        const timer = () => setCount(currentCount - 1);
    
        useEffect(
            () => {
                if (currentCount <= 0) {
                    return;
                }
                const id = setInterval(timer, 1000);
                return () => clearInterval(id);
            },
            [currentCount]
        );

    return (
        <div className={styles.mainContent}>
            <div class='justify-content-around navBar align-items-center'>
                <div className='p-2 mt-1'><h3 className={styles.title}>Venus</h3></div>
                <div className='p-2 mt-1'>
                    <button className='rounded text-light border-0 navBtn'>Connect</button>
                </div>
                <div className='p-2 dropDown mt-1'>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Dashboard
                    </Dropdown.Toggle>

                    <Dropdown.Menu id='dropMenu'>
                        <Dropdown.Item className='link' href="#/action-1">DashBoard</Dropdown.Item>
                        <Dropdown.Item className='link' href="#/action-1">Vote</Dropdown.Item>
                        <Dropdown.Item className='link' href="#/action-1">BTC</Dropdown.Item>
                        <Dropdown.Item className='link' href="#/action-1">Market</Dropdown.Item>
                        <Dropdown.Item className='link' href="#/action-1">Vault</Dropdown.Item>
                        <Dropdown.Item className='link' href="#/action-1">Transactions</Dropdown.Item>
                        <Dropdown.Item className='link' href="#/action-1">BTC Prediction</Dropdown.Item>
                        <Dropdown.Item className='link' href="#/action-1">forum</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>
            <h4 className='text-light mt-5 dashboard-header'>Dashboard</h4>
            <div className='d-flex main-content'>
                <div className='firstBlcok d-flex flex-column w-40'>
                    <div className='d-flex justify-content-between align-items-center mt-3 block'>
                        <div className='d-flex align-items-center w-100'>
                            <img className={styles.coinLogo} src={require(('../../assets/xvsLogo.png'))} alt='XVS logo' />
                            <h4 className='text-light mb-0'>0 XVS</h4>
                        </div>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-light' />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3 block'>
                        <div className='d-flex align-items-center w-100'>
                            <img className={styles.coinLogo} src={require(('../../assets/vaiLogo.png'))} alt='XVS logo' />
                            <h4 className='text-light mb-0'>0 VAI</h4>
                        </div>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-light' />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3 goldBox'>
                        <div className='d-flex flex-column w-100'>
                            <h2 className='text-light mb-1'>$0</h2>
                            <h6 className='text-light'>Avaliable Credit</h6>
                            <div className='d-flex justify-content-between goldenBoxFooter'>
                              <h6 className='text-light'>Borrow Limit</h6>
                              <h5 className='text-light'>0%</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row secondBlock justify-content-around">
                    <div class="p-2 text-center d-flex flex-column justify-content-center">
                        <h5 className='text-light'>Supply Balance</h5>
                        <h4 className='text-light mt-5'>0$</h4>
                    </div>
                    <div class="p-2 mt-4 d-flex flex-column justify-content-center">
                    {UrgeWithPleasureComponent()}
                    <h4 className='text-light text-center mt-3'>{currentCount} Secondes</h4>
                    </div>
                    <div class="p-2 text-center d-flex flex-column justify-content-center">
                        <h5 className='text-light'>Borrow Balance</h5>
                        <h4 className='text-light mt-5'>0$</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

// {require('../../assets/btc.png')}