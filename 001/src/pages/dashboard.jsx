import './dashboard.css';
import background from './img/bg.png';
import wheel from './img/wheel.png';
import $ from 'jquery';
import { useState } from 'react';

function Dashboard() {

    $(document).ready(function() {
        $(".left-bar-text").mouseenter(function(e) {
            var $target = $(e.currentTarget);
            $($target).addClass("left-bar-text-animate").delay(1000).queue(function(next){
                $($target).removeClass("left-bar-text-animate");
                next();
            }); 
        });

        let a = 0;

        $(".wheel").mouseenter(function() {
            if (a === 300) {
                a = 0
            } else {
                a = a + 60
            }
            $(this).css({"transform": "rotate(" + a + "deg)"});
        });
   
        const handleSwitch = (element) => {
            const theme = element.getAttribute('theme')
            const box = document.querySelector('.box')
            
            box.classList.remove('light', 'dark', 'black')

            var classes = $(".box").attr('class');
            classes = `${theme}` +' ' + classes;
            $(".box").attr('class', classes);
            const posY = element.offsetTop
            const posX = element.offsetLeft

            const width = element.offsetWidth
            const height = element.offsetHeight

            const target = document.querySelector('.box-switch-active')
            target.style.cssText = `
                width: ${width}px;
                height: ${height}px;
                top: ${posY}px;
                left: ${posX}px;
            `
        }

        const SwitchItems = document.querySelectorAll('.box-switch-item')
        SwitchItems.forEach((element) => {
            if (element.classList.contains('active')) handleSwitch(element)
            element.addEventListener('click', (event) => {
                SwitchItems.forEach((item) => item.classList.remove('active'))
                event.currentTarget.classList.add('active')
                handleSwitch(element)
            })
        })






    })

    const [wheelState, setWheelState] = useState(false);

    function wheelClick(){
        setWheelState(wheelState => !wheelState);
    }
    
    let toggleClassBox = wheelState ? 'open': '';

    return(
        <div className="container">
            <div className="left-bar">
                <div>
                    <img src={wheel} alt="wheel" onClick={wheelClick} className="wheel"/>
                </div>
                <div className={` ${toggleClassBox} left-bar-settings`}>
                    <div className={`box white`}>
                                <div className="box-header">
                                    <p className="box-header-title">Theme</p>
                                    <ul className="box-switch">
                                        <span className="box-switch-active"></span>
                                        <li className="box-switch-item active" theme="light">
                                            <div className="box-switch-content">
                                                <span data-feather="sun"></span>
                                                Light
                                            </div>
                                        </li>
                                        <li className="box-switch-item" theme="dark">
                                            <div className="box-switch-content">
                                                <span data-feather="moon"></span>
                                                Dark
                                            </div>
                                        </li>
                                        <li className="box-switch-item" theme="black">
                                            <div className="box-switch-content">
                                                <span data-feather="star"></span>
                                                Black
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-main">
                                    <ul className="box-menu">                   
                                    </ul>
                                </div>
                    </div>
                </div>
               
                <div className="left-bar-text-container">
                    <div>
                        <p className="left-bar-text">l</p>
                    </div>
                    <div>
                        <p className="left-bar-text">n</p>
                    </div>
                    <div>
                        <p className="left-bar-text">.</p>
                    </div>
                    <div>
                        <p className="left-bar-text">n</p>
                    </div>
                    <div>
                        <p className="left-bar-text">e</p>
                    </div>
                    <div>
                        <p className="left-bar-text">d</p>
                    </div>
                    <div>
                        <p className="left-bar-text">r</p>
                    </div>
                    <div>
                        <p className="left-bar-text">o</p>
                    </div>
                    <div>
                        <p className="left-bar-text">o</p>
                    </div>
                    <div>
                        <p className="left-bar-text">w</p>
                    </div>
                    <div>
                        <p className="left-bar-text">k</p>
                    </div>
                    <div>
                        <p className="left-bar-text">r</p>
                    </div>
                    <div>
                        <p className="left-bar-text">e</p>
                    </div>
                    <div>
                        <p className="left-bar-text">&nbsp;w</p>
                    </div>
                    <div>
                        <p className="left-bar-text">e</p>
                    </div>
                    <div>
                        <p className="left-bar-text">s</p>
                    </div>
                    <div>
                        <p className="left-bar-text">n</p>
                    </div>
                    <div>
                        <p className="left-bar-text">a</p>
                    </div>
                    <div>
                        <p className="left-bar-text">r</p>
                    </div>
                    <div>
                        <p className="left-bar-text">F</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={background} alt="background" className="background" />
            </div>
        </div>
    )
}

export default Dashboard;