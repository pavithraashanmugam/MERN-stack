import styles from './styles.module.css';
import { Link} from 'react-router-dom';
import YoutubeEmbed from '../../Youtubeembed';


const Java = () => {
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

                <h1> KOTLIN</h1>
                <div className={styles.cont}>
                <div className={styles.gallery}>
                    <h1>WHY KOTLIN ?</h1><br></br>
                    <h2>EASE TO USE</h2>
                    <p>Kotlin is an expressive and concise programming language that reduces common code errors and easily integrates into existing apps.</p><br></br>
                    <h2>LUCRATIVE SALARY</h2>
                    <p>The average salary for a Kotlin developer is 6.3LPA+ according to Indeed</p><br></br>
                    <h2>BEGINNER FRIENDLY</h2>
                    <p>Simple syntax and strong community support makes Kotlin a language that is easy for beginners and newbies to learn and develop applications.</p><br></br>
                    </div>

                <div className={styles.gallery}>
                <h1>TOPICS</h1>
                    <p>Introduction</p>
                    <p>Variables and Data Types</p>
                    <p>Function Class & String Interpolation</p>
                    <p>Data type</p>
                    <p>Expression</p>
                    <p>Loops</p>
                    <p>Functions and Methods</p>
                    <p>Java Interoperability</p>
                    <p>Constructors</p>
                    <p>Inheritance</p>
                    <p>Visibility Modifier</p>
                    <p>Class</p>
                    <p>Lambdas and Higher Order Functions</p>
                    <p>Kotlin List</p>
                    <p>Kotlin Map</p>
                    <p>Kotlin Set</p>
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
                    
                <Link to = "/kq">
                    <button type='button' className={styles.button}>
                         TAKE QUIZ
                    </button>
                </Link>
                
                </div>
                </div>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>INTRODUCTION</h1>
                    <YoutubeEmbed embedId="VEqhzCFmEQI" /><br></br>
                    <YoutubeEmbed embedId="iC8LRjd67Ds" /><br></br>
                    <YoutubeEmbed embedId="toesg2HLMSs" /><br></br>
                    <YoutubeEmbed embedId="mcCt-Dv1lg8" /><br></br>
                    <YoutubeEmbed embedId="sX_-bEpV6M0" /><br></br>
                    <YoutubeEmbed embedId="QUI0PopN1nw" /><br></br>
                    <YoutubeEmbed embedId="G6oVG5XetnE" /><br></br>
                    <YoutubeEmbed embedId="MM1jRsXiWBg" /><br></br>
                 </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Variables and Data Types</h1>
                    <YoutubeEmbed embedId="TGYehzj_NFI" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Function Class & String Interpolation</h1>
                    <YoutubeEmbed embedId="KQbVF-GVDU0" /><br></br>
                    <YoutubeEmbed embedId="5GyB6Ndy818&list" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Data type </h1>
                    <YoutubeEmbed embedId="qAJTqI_aKJU" /><br></br>
                    <YoutubeEmbed embedId="SItGASY92HE" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Expression</h1>
                    <YoutubeEmbed embedId="CkvYXSpXS2s" /><br></br>
                    <YoutubeEmbed embedId="2V6et2FdS8I" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Loops</h1>
                    <YoutubeEmbed embedId="S_DDdmsOyVE" /><br></br>
                    <YoutubeEmbed embedId="ugz2W_yF208" /><br></br>
                    <YoutubeEmbed embedId="FSHjROeqT38" /><br></br>
                    <YoutubeEmbed embedId="cWuVrCxtRqM" /><br></br>
                    <YoutubeEmbed embedId="sLdcnko9LwE" /><br></br>
                    <YoutubeEmbed embedId="fVK7JeHZ3dQ" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Functions and Methods</h1>
                    <YoutubeEmbed embedId="YxixgkS_B1s" /><br></br>
                    <YoutubeEmbed embedId="w3MMiPwU80k" /><br></br>
                    <YoutubeEmbed embedId="X8K4eNgzk1s" /><br></br>
                    <YoutubeEmbed embedId="6oFvZKF6KKg" /><br></br>
                    <YoutubeEmbed embedId="ikUF1z_WOZc" /><br></br>
                    <YoutubeEmbed embedId="J2We4LfGZhc" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Java Interoperability</h1>
                    <YoutubeEmbed embedId="UiIfCzu9fT" /><br></br>
                    <YoutubeEmbed embedId="GSAuDYM_xrA" /><br></br>
                    <YoutubeEmbed embedId="E6WndBrdkSc" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Constructors</h1>
                    <YoutubeEmbed embedId="5YtmN2V9Om4" /><br></br>
                    <YoutubeEmbed embedId="4i3bN80YkYM" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Inheritance</h1>
                    <YoutubeEmbed embedId="903Kv9ByDK0" /><br></br>
                    <YoutubeEmbed embedId="0Zb0TwD9xzg" /><br></br>
                    <YoutubeEmbed embedId="4vHAl7DyMjQ" /><br></br>
                    <YoutubeEmbed embedId="DmSLv-fX8PA" /><br></br>
                    <YoutubeEmbed embedId="0JT2M2jb7Lo" /><br></br>
                    <YoutubeEmbed embedId="jea0OEGHi38" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1> Visibility Modifier</h1>
                    <YoutubeEmbed embedId="0JT2M2jb7Lo" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Class</h1>
                    <YoutubeEmbed embedId="nN5KhABIbHQ" /><br></br>
                    <YoutubeEmbed embedId="Z6xj7hta7Ac" /><br></br>
                    <YoutubeEmbed embedId="1rW52kazuJk" /><br></br>
                    <YoutubeEmbed embedId="PMwiMNeFSM0" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Lambdas and Higher Order Functions</h1>
                    <YoutubeEmbed embedId="S0Vkldrh0SE" /><br></br>
                    <YoutubeEmbed embedId="IuPULpQ0q8I" /><br></br>
                    <YoutubeEmbed embedId="dwko93d33Ko" /><br></br>
                    <YoutubeEmbed embedId="kQ7Q8YI9Etk" /><br></br>
                    <YoutubeEmbed embedId="osnaXRyQ350" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Kotlin List</h1>
                    <YoutubeEmbed embedId="Je_YXshSFmY" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Kotlin Map</h1>
                    <YoutubeEmbed embedId="73RTzuFWqm4" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Kotlin Set</h1>
                    <YoutubeEmbed embedId="MJkCDXhLtDI" />
                </div><hr></hr><hr></hr>

                
    
               
    
    </div>
    
)
};

export default Java;
