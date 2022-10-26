import './dashboard.css';
import background from './img/bg.png';
import wheel from './img/wheel.png';
import $ from 'jquery';
import { useState } from 'react';
import * as fs from 'fs';

function Dashboard() {

    $(function() {

        $(".left-bar-text").mouseenter(function(e) {
            var $target = $(e.currentTarget);
            $($target).addClass("left-bar-text-animate").delay(2000).queue(function(next){
                $($target).removeClass("left-bar-text-animate");
                next();
            }); 
        });

        $(".background").click(function() {
            if ($(".left-bar-settings").hasClass("open")) {
                wheelClick();
                $(".wheel").removeClass("do-the-thing")
            } 
        });

        $(".center").click(function() {
            if ($(".left-bar-settings").hasClass("open")) {
                wheelClick();
                $(".wheel").removeClass("do-the-thing")
            } 
        });

        let a = 0;


        const handleSwitch = (element) => {
            let theme = element.getAttribute("theme")
            const box = document.querySelector(".box")
            const container = document.querySelector(".container")
            const wheel = document.querySelector(".wheel")
            const target = document.querySelector(".box-switch-active")

            const posY = element.offsetTop 
            const posX = element.offsetLeft
    
            const width = element.offsetWidth
            const height = element.offsetHeight

            box.classList.remove("light", "dark", "black")
            container.classList.remove("light", "dark", "black")
            wheel.classList.remove("light", "dark", "black")
            let b = 0;

            if (a === 1) {
                localStorage.setItem("theme", `${theme}`);
            } 

            if (localStorage.getItem("theme") && a === 0) {
                document.querySelector(".background").style.opacity = localStorage.getItem("bg");
                if (localStorage.getItem("theme") === "light") {
                    theme = "light"
                } else if (localStorage.getItem("theme") === "dark") {
                    theme = "dark";
                    target.style.cssText = `
                    width: ${width}px;
                    height: ${height}px;
                    top: ${posY}px;
                    left: 60px;
                    `
                    $(".active").removeClass("active")
                    $(".box-switch-item").children(1).addClass("active")
                    b = 1;

                } else {
                    theme = "black"
                    target.style.cssText = `
                    width: ${width}px;
                    height: ${height}px;
                    top: ${posY}px;
                    left: 117px;
                    `
                    $(".active").removeClass("active")
                    $(".box-switch-item").children(2).addClass("active")
                    b = 1;

                }
                a = 1;
            }
            if (localStorage.getItem("theme")){}
            else {
                localStorage.setItem("theme", "light");
            }

            var classes = $(".box").attr("class");
            classes = `${theme} ${classes}`;
            $(".box").attr("class", classes);
            $(".container").addClass(`${theme}`)
            $(".wheel").addClass(`${theme}`)


            if (b !== 1) {
            target.style.cssText = `
                width: ${width}px;
                height: ${height}px;
                top: ${posY}px;
                left: ${posX}px;
            `
             }
        }

        const SwitchItems = document.querySelectorAll(".box-switch-item")
        SwitchItems.forEach((element) => {
            if (element.classList.contains("active")) handleSwitch(element)
            element.addEventListener("click", (event) => {
                SwitchItems.forEach((item) => item.classList.remove("active"))
                event.currentTarget.classList.add("active")
                handleSwitch(element)
            })
        })

        var img = document.querySelector(".background");
        var range = document.getElementById("range");
        if (localStorage.getItem("bg")) {
            range.defaultValue = (localStorage.getItem("bg") * 100)
        } else {
            range.defaultValue = 100;
        }

        range.addEventListener("change", function() {
            
            let opacity = (this.value / this.max)
            localStorage.setItem("bg", `${opacity}`);
            img.style.opacity = opacity;

        });

        $("input[type=checkbox]" ).click(function(e) {
            var $target = $(e.currentTarget);
            console.log($target[0].id);
            }); 




    })


    const [wheelState, setWheelState] = useState(false);

    function wheelClick(){
        setWheelState(wheelState => !wheelState);
        $(".wheel").toggleClass("do-the-thing")
       
    }
    
    let toggleClassBox = wheelState ? 'open': '';

    


    return(
        <div className="container light">
            <div className="left-bar">
                <div>
                    <img src={wheel} alt="wheel" onClick={wheelClick} className="wheel light"/>
                </div>
                <div className={` ${toggleClassBox} left-bar-settings`}>
                    <div className={`box white`}> 
                                <div className="box-header">
                                    <p className="box-header-title">Thema</p>
                                    <ul className="box-switch">
                                        <span className="box-switch-active"></span>
                                        <li className="box-switch-item active" theme="light">
                                            <div className="box-switch-content">
                                                <span data-feather="sun"></span>
                                                Licht
                                            </div>
                                        </li>
                                        <li className="box-switch-item" theme="dark">
                                            <div className="box-switch-content">
                                                <span data-feather="moon"></span>
                                                Donker
                                            </div>
                                        </li>
                                        <li className="box-switch-item" theme="black">
                                            <div className="box-switch-content">
                                                <span data-feather="star"></span>
                                                Nacht
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-main">
                                    <p className="box-header-title title2">Achtergrond helderheid</p>
                                    <input className="range-slider__range" id="range" type="range" min="10" max="100"/>


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
            <div className="center">
                <div className="center-text-container">
                    <p className="center-text a1">
                        Tijden
                    </p>
                    <p className="center-text a2">
                        Regelmatige
                    </p>

                    <p className="center-text a3">
                        Onregelematige
                    </p>
                </div>
                  <p className="w1">werkwoorden</p>
                <p className="w2">werkwoorden</p>
              
                <div className="time-container">
                    
                    <form action="#">
                    <p>
                        <input type="checkbox" id="Conditionnel-Passé" />
                        <label htmlFor="Conditionnel-Passé" id="Conditionnel-Passé">Conditionnel Passé</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Conditionnel/Fut.du-Passé" />
                        <label htmlFor="Conditionnel/Fut.du-Passé">Conditionnel/Fut.du Passé</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Futur" />
                        <label htmlFor="Futur">Futur</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Futur-Antérieur" />
                        <label htmlFor="Futur-Antérieur">Futur Antérieur</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Futur-Proche" />
                        <label htmlFor="Futur-Proche">Futur Proche</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Imparfait" />
                        <label htmlFor="Imparfait">Imparfait</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Impératif" />
                        <label htmlFor="Impératif">Impératif</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Participe-Présent" />
                        <label htmlFor="Participe-Présent">Participe Présent</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Passé-Composé" />
                        <label htmlFor="Passé-Composé">Passé Composé</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Passé-Simple" />
                        <label htmlFor="Passé-Simple">Passé Simple</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Plus-que-Parfait" />
                        <label htmlFor="Plus-que-Parfait">Plus-que-Parfait</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Présent" />
                        <label htmlFor="Présent">Présent</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Subjonctif Passé" />
                        <label htmlFor="Subjonctif Passé">Subjonctif Passé</label>
                    </p>
                    <p>
                        <input type="checkbox" id="Subjonctif Présent" />
                        <label htmlFor="Subjonctif Présent">Subjonctif Présent</label>
                    </p>
                    </form>

                </div>
                <div className="regular-container">
                </div>
                <div className="unregular-container">
                </div>
            </div>

            <div>
                <img src={background} alt="background" className="background" />
            </div>
        </div>
    )
}

export default Dashboard;