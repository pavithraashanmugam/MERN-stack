import styles from './styles.module.css';
import { Link} from 'react-router-dom';
import YoutubeEmbed from '../../Youtubeembed';


const Python = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
        };
        return(
            <div >
                <nav className={styles.navbar}>
                <Link to = "/">
                    <button type='button' className={styles.white_btn}>
                         HOME
                    </button>
                </Link>
                
                <button className={styles.white_btn} onClick={handleLogout}>
                     LOGOUT
                </button>
                </nav>

                <h1> PYTHON</h1>
                <div className={styles.cont}>
                <div className={styles.gallery}>
                    <h1>WHY PYTHON ?</h1><br></br>
                    <h2>VERSATILITY</h2>
                    <p>Machine Learning, AI, Web Development, Hacking, IoT, and more. Python is used everywhere.</p><br></br>
                    <h2>BEGINNER FRIENDLY</h2>
                    <p>A simple and powerful syntax makes Python one of the easiest languages to learn.</p><br></br>
                    <h2>BE IN DEMAND</h2>
                    <p>Python is the fastest growing language according to Stack Overflow with an average fresher salary of 5 LPA+ according to Glassdoor.</p><br></br>
                    </div>

                <div className={styles.gallery}>
                <h1>TOPICS</h1>
                    <p>Introduction</p>
                    <p>Variables and List in Python</p>
                    <p>Data type and Operations in Python</p>
                    <p>Working in PyCharm and User input in Python</p>
                    <p>Loops in Python</p>
                    <p>Arrays</p>
                    <p>Functions and Arguments</p>
                    <p>Factorial</p>
                    <p>Class and Object</p>
                    <p>Types of Variables and Methods</p>
                    <p>Inheritance and Polymorphism</p>
                    <p>Duck Typing</p>
                    <p>Overloading</p>
                    <p>Iterator and Generators</p>
                    <p>Exception Handling and MultiThreading</p>
                    <p>Searching and Sorting in Python</p>
                </div>

                <div className={styles.gallery}>
                    <h1>CERTIFICATION</h1>
                    <h4>QUIZ RULES</h4>
                    <p>Attempt all the 10 questions.</p><br></br>
                    <p>Questions cannot be skipped.</p><br></br>
                    <p>Each question carries ONE mark.</p><br></br>
                    <p>No negative marks.</p><br></br>
                    <p>You can view your results at the end of the quiz.</p><br></br>
                    <p>Grab your certificates after quiz.</p><br></br>
                    
                    <Link to = "/pq">
                    <button type='button' className={styles.button}>
                         TAKE QUIZ
                    </button>
                </Link>
                
                </div>
                </div>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>INTRODUCTION</h1>
                    <YoutubeEmbed embedId="hEgO047GxaQ" /><br></br>
                    <YoutubeEmbed embedId="mbryl4MZJms" /><br></br>
                    <YoutubeEmbed embedId="DWgzHbglNIo" />
                 </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Variables and List in Python</h1>
                    <YoutubeEmbed embedId="TqPzwenhMj0" /><br></br>
                    <YoutubeEmbed embedId="Eaz5e6M8tL4" /><br></br>
                    <YoutubeEmbed embedId="_OZIAHg5i7M" /><br></br>
                    <YoutubeEmbed embedId="QYUbLevwgDQ" /><br></br>

                </div><hr></hr><hr></hr>

                

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Data type and Operations in Python</h1>
                    <YoutubeEmbed embedId="gCCVsvgR2KU" /><br></br>
                    <YoutubeEmbed embedId="v5MR5JnKcZI" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Working in PyCharm and User input in Python</h1>
                    <YoutubeEmbed embedId="akcEaEH91gI" /><br></br>
                    <YoutubeEmbed embedId="4OX49nLNPEE" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Loops in Python</h1>
                    <YoutubeEmbed embedId="PqFKRqpHrjw" /><br></br>
                    <YoutubeEmbed embedId="HZARImviDxg" /><br></br>
                    <YoutubeEmbed embedId="0ZvaDa8eT5s" /><br></br>
                    <YoutubeEmbed embedId="yCZBnjF4_tU" /><br></br>
                    <YoutubeEmbed embedId="k8SXsT5TLxQ" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Arrays</h1>
                    <YoutubeEmbed embedId="6a39OjkCN5I" /><br></br>
                    <YoutubeEmbed embedId="9c9qhIcB3NA" /><br></br>
                    <YoutubeEmbed embedId="NYPKbmE0H6E" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Functions and Arguments</h1>
                    <YoutubeEmbed embedId="BVfCWuca9nw" /><br></br>
                    <YoutubeEmbed embedId="ijXMGpoMkhQ" /><br></br>
                    <YoutubeEmbed embedId="eci9iU_s6Ag" /><br></br>
                    <YoutubeEmbed embedId="kB829ciAXo4" /><br></br>
                    <YoutubeEmbed embedId="fsAzeNZXvkE" /><br></br>
                    <YoutubeEmbed embedId="hYzwCsKGRrg" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Factorial</h1>
                    <YoutubeEmbed embedId="gfhtaP5Wq7M" /><br></br>
                    <YoutubeEmbed embedId="XkL3SUioNvo" /><br></br>
                    <YoutubeEmbed embedId="TqqQld6m6A0" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Class and Object</h1>
                    <YoutubeEmbed embedId="8O5kX73OkIY" /><br></br>
                    <YoutubeEmbed embedId="UDmJGvM-OUw" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Types of Variables and Methods</h1>
                    <YoutubeEmbed embedId="WIP3-woodlU" /><br></br>
                    <YoutubeEmbed embedId="RSQjxL5WRNM" /><br></br>
                    <YoutubeEmbed embedId="lVfGQOzzRCM" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Inheritance and Polymorphism</h1>
                    <YoutubeEmbed embedId="Cn7AkDb4pIU" /><br></br>
                    <YoutubeEmbed embedId="6P-P879BcHQ" /><br></br>
                    <YoutubeEmbed embedId="P1vH3Pfw6BI" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Duck Typing</h1>
                    <YoutubeEmbed embedId="CuK0g8OFzwo" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Overloading</h1>
                    <YoutubeEmbed embedId="9wd50TKv_OQ" /><br></br>
                    <YoutubeEmbed embedId="CcTzTuIsoFk" /><br></br>
                    <YoutubeEmbed embedId="P1vH3Pfw6BI" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Iterator and Generators</h1>
                    <YoutubeEmbed embedId="Dyu08G2l71c" /><br></br>
                    <YoutubeEmbed embedId="mziIj4M_uwk" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Exception Handling and MultiThreading</h1>
                    <YoutubeEmbed embedId="6SPDvPK38tw" /><br></br>
                    <YoutubeEmbed embedId="GqHLztqy0PU" /><br></br>
                    
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <YoutubeEmbed embedId="UldZOLylez4" /><br></br>
                    <YoutubeEmbed embedId="DE-ye0t0oxE" /><br></br>
                    <YoutubeEmbed embedId="Vca808JTbI8" /><br></br>
                    <YoutubeEmbed embedId="5KjapFQNxUo" /><br></br>
                </div><hr></hr><hr></hr>
    
               
    
    </div>
    
)
};

export default Python;
