import styles from './styles.module.css';
import { Link} from 'react-router-dom';
import YoutubeEmbed from '../../Youtubeembed';





const Cplus = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
        };
        return(
            <div className={styles.main}>
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
                <h1> C++ </h1>
                <div className={styles.cont}>
                    <div className={styles.gallery}>
                        <h1>WHY C++ ?</h1><br></br>
                        <h2>C++ POWERS THE WORLD</h2>
                        <p>Whether it be operatings systems like Windows, web browsers like Chrome, or game engines like Unity 3D, C++ is everywhere!</p><br></br>
                        <h2>BEGINNER FRIENDLY</h2>
                        <p>Due to the straightforwardness of the language, it serves as a solid introduction to programming for any beginner</p><br></br>
                        <h2>LUCRATIVE SALARY</h2>
                        <p>The average salary of a C++ developer is 5.4 LPA according to Glassdoor</p><br></br>
                    </div>

                    <div className={styles.gallery}>
                        <h1>TOPICS</h1>
                        <p>Introduction</p>
                        <p>Hello world programming</p>
                        <p>Variable and datatypes</p>
                        <p>Control structure</p>
                        <p>Conditional control structure</p>
                        <p>Switch case control structure</p>
                        <p>Loop conditional structure</p>
                        <p>While, do while loop conditional structure</p>
                        <p>Arithmetic operator</p>
                        <p>Arrays, 2D arrays</p>
                        <p>Pointers</p>
                        <p>Dynamic memory allocation</p>
                        <p>Function, inline function and parameters</p>
                        <p>Function overloading</p>
                        <p>Exception handling</p>
                        <p>File handling</p>
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
                    
                <Link to = "/cpq">
                    <button type='button' className={styles.button}>
                         TAKE QUIZ
                    </button>
                </Link>
                    </div>
                </div>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>INTRODUCTION</h1>
                    <YoutubeEmbed embedId="AKNGgAXTark" />
                 </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>HELLO WORLD PROGRAMMING</h1>
                    <YoutubeEmbed embedId="bJ0n_B7TrnQ" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>VARIABLES AND DATATYPES</h1>
                    <YoutubeEmbed embedId="D6nYXIZdrMg" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>OPERATORS AND ITS TYPES</h1>
                    <YoutubeEmbed embedId="AZvKbSdvoRU" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>CONTROL STRUCTURES</h1>
                    <YoutubeEmbed embedId="0YS8mLNrqhw" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>CONDITIONAL CONTROL STRUCTURE</h1>
                    <YoutubeEmbed embedId="6EuqroZibF0" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>SWITCH CASE CONDITIONAL CONTROL STRUCTURE</h1>
                    <YoutubeEmbed embedId="P3MK9jVdHrE" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>LOOP CONTROL STRUCTURE</h1>
                    <YoutubeEmbed embedId="167Olz6lLxw" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>WHILE  LOOP CONTROL STRUCTURE</h1>
                    <YoutubeEmbed embedId="qUXOFkRxXO0" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>DO WHILE CONTROL STRUCTURE</h1>
                    <YoutubeEmbed embedId="db6BHFdpibs" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>ARITHMETIC OPERATORS</h1>
                    <YoutubeEmbed embedId="rkVw-oDyS3g" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>ARRAYS</h1>
                    <YoutubeEmbed embedId="ibeGtDEQGz0" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>ARRAY OPERATIONS</h1>
                    <YoutubeEmbed embedId="NfoW4-QXS9o" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>2D ARRAY</h1>
                    <YoutubeEmbed embedId="OJC84pYXB_U" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>POINTERS</h1>
                    <YoutubeEmbed embedId="fBlM7pR2r_Q" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>DYNAMIC MEMORY ALLOCATION</h1>
                    <YoutubeEmbed embedId="UY2_lLpDu7U" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>FUNCTIONS</h1>
                    <YoutubeEmbed embedId="p8ehAjZWjPw" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>INLINE FUNCTION AND PARAMETERS</h1>
                    <YoutubeEmbed embedId="fjHz9GPr6qM" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>FUNCTION OVERLOADING</h1>
                    <YoutubeEmbed embedId="dh0mKAPFzlQ" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>EXCEPTION HANDLING</h1>
                    <YoutubeEmbed embedId="EyXXLpFriMc" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>FILE HANDLING</h1>
                    <YoutubeEmbed embedId="TF2-F2duY6c" />
                </div><hr></hr><hr></hr>
    
    </div>
    
)
};

export default Cplus;