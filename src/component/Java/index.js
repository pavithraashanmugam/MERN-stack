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

                <h1> JAVA</h1>
                <div className={styles.cont}>
                <div className={styles.gallery}>
                    <h1>WHY JAVA ?</h1><br></br>
                    <h2>BE IN DEMAND</h2>
                    <p>Whether it's Android apps, web applications, banking, or trading software, Java is used everywhere! So, adding it to your toolbox is a must.</p><br></br>
                    <h2>LUCRATIVE SALARY</h2>
                    <p>The average salary for a Java developer is 6.3LPA+ according to Indeed</p><br></br>
                    <h2>BEGINNER FRIENDLY</h2>
                    <p>Simple syntax and strong community support makes Java a language that is easy for beginners to learn.</p><br></br>
                    </div>

                <div className={styles.gallery}>
                <h1>TOPICS</h1>
                    <p>Introduction</p>
                    <p>Variable and types</p>
                    <p>Operators</p>
                    <p>Conditional statements</p>
                    <p>Loop statements</p>
                    <p>Arrays</p>
                    <p>Strings</p>
                    <p>Constructors</p>
                    <p>Method overloading</p>
                    <p>Inheritance</p>
                    <p>Polymorphism</p>
                    <p>Interface</p>
                    <p>Recursion</p>
                    <p>Array list</p>
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
                    
                <Link to = "/jq">
                    <button type='button' className={styles.button}>
                         TAKE QUIZ
                    </button>
                </Link>
                </div>
                </div>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>INTRODUCTION</h1>
                    <YoutubeEmbed embedId="r59xYe3Vyks" /><br></br>
                    <YoutubeEmbed embedId="gzlhm0jco0g" /><br></br>
                    <YoutubeEmbed embedId="U8wrZRYAnmI" />
                 </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>VARIABLES AND TYPES</h1>
                    <YoutubeEmbed embedId="4ekASokneGU" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>OPERATORS</h1>
                    <YoutubeEmbed embedId="ss7BtLrbxp4" /><br></br>
                    <YoutubeEmbed embedId="f5YdkIzNmfM" /><br></br>
                    <YoutubeEmbed embedId="HBnB69yFf_4" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>CONDITIONAL STATEMENTS</h1>
                    <YoutubeEmbed embedId="WZXq5_9_JDs" /><br></br>
                    <YoutubeEmbed embedId="L5_7XQR0r0w" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>LOOP STATEMENTS</h1>
                    <YoutubeEmbed embedId="apW3UWr_dhA" /><br></br>
                    <YoutubeEmbed embedId="xwvdENKCkLg" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>ARRAYS</h1>
                    <YoutubeEmbed embedId="_NfwcH5zKpA" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>STRINGS</h1>
                    <YoutubeEmbed embedId="sliTbMkQBZ4" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>CONSTRUCTORS</h1>
                    <YoutubeEmbed embedId="0Jc_rT7t1W8" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>METHOD OVERLOADING</h1>
                    <YoutubeEmbed embedId="pBe4hLdrMHA" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>INHERITANCE</h1>
                    <YoutubeEmbed embedId="lz1Cx6GzOuc" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>POLYMORPHISM</h1>
                    <YoutubeEmbed embedId="GnLtvmeGAWA" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>INTERFACE</h1>
                    <YoutubeEmbed embedId="HxmP7ZVUeGU" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>RECURSION</h1>
                    <YoutubeEmbed embedId="1kUbxn9aba4" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>ARRAYLIST</h1>
                    <YoutubeEmbed embedId="VE0HeWFaAIQ" />
                </div><hr></hr><hr></hr>
    
               
    
    </div>
    
)
};

export default Java;