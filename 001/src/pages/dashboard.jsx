import './dashboard.css';
import background from './img/bg.png';
import wheel from './img/wheel.png';
import $ from 'jquery';

function Dashboard() {

    $(document).ready(function() {
        $(".left-bar-text").mouseenter(function(e) {
            var $target = $(e.currentTarget);
            console.log(1);
            $($target).addClass("left-bar-text-animate").delay(1000).queue(function(next){
                $($target).removeClass("left-bar-text-animate");
                console.log(2);
                next();
            }); 
        });
    })

    return(
        <div className="container">
            <div className="left-bar">
                <div>
                    <img src={wheel} alt="wheel" className="wheel"/>
                </div>
                <div className="left-bar-settings">
                    <p>
                        theme
                    </p>
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
                <img src={background} alt="background" className="background"/>
            </div>
        </div>
    )
}

export default Dashboard;