import styles from './styles.module.css';
import { Link} from 'react-router-dom';
import YoutubeEmbed from '../../Youtubeembed';




const Cprogramming = () => {
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
                <h1> C PROGRAMMING</h1>
                <div className={styles.cont}>
                <div className={styles.gallery}>
                    <h1>WHY C PROGRAMMING?</h1><br></br>
                    <h2>C POWERS THE WORLD</h2>
                    <p>Whether it be operatings systems like Windows, web browsers like Chrome, or game engines like Unity 3D, C is everywhere!</p><br></br>
                    <h2>BEGINNER FRIENDLY</h2>
                    <p>Due to the straightforwardness of the language, it serves as a solid introduction to programming for any beginner</p><br></br>
                    <h2>LUCRATIVE SALARY</h2>
                    <p>The average salary of a C developer is 5.4 LPA according to Glassdoor</p><br></br>
                </div>
                
                <div className={styles.gallery}>
                        <h1>TOPICS</h1>
                        <p>Introduction</p>
                        <p>Variable</p>
                        <p>Data types</p>
                        <p>Get user input</p>
                        <p>Operators</p>
                        <p>Type conversion</p>
                        <p>Boolean and coMparision operators</p>
                        <p>Conditional statement</p>
                        <p>Loops</p>
                        <p>Functions</p>
                        <p>Recursion</p>
                        <p>Arrays</p>
                        <p>Strings</p>
                        <p>Pointers</p>
                        <p>Enumerations</p>
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
                    
                <Link to = "/cq">
                    <button type='button' className={styles.button}>
                         TAKE QUIZ
                    </button>
                </Link>
                </div>
                </div>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>INTRODUCTION</h1>
                    <YoutubeEmbed embedId="KnvbUiSxvbM" />
                 </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>VARIABLES</h1>
                    <YoutubeEmbed embedId="h4VBpylsjJc" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>DATATYPES</h1>
                    <YoutubeEmbed embedId="sARaqR0hRI4" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>GET USER INPUT</h1>
                    <YoutubeEmbed embedId="17gp5DJEyiw" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>OPERATORS</h1>
                    <YoutubeEmbed embedId="_57FcSBtJNU" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>TYPE CONVERSION</h1>
                    <YoutubeEmbed embedId="xi2wf0Zy2Y4" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>BOOLEAN AND COMPARISION OPERATOR</h1>
                    <YoutubeEmbed embedId="TybmJxXRV80" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>CONDITIONAL STATEMENT</h1>
                    <YoutubeEmbed embedId="K8mntKyBJGc" /><br></br>
                    <YoutubeEmbed embedId="u6mb8NNwojA" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>LOOPS </h1>
                    <YoutubeEmbed embedId="WgS_SF1VrEk" /><br></br>
                    <YoutubeEmbed embedId="Xtl1oGtcX-8" /><br></br>
                    <YoutubeEmbed embedId="DpPf9XskST8" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>FUNCTIONS</h1>
                    <YoutubeEmbed embedId="Npo1u37lcg8" /><br></br>
                    <YoutubeEmbed embedId="ej-GOnj7mj0" /><br></br>
                    <YoutubeEmbed embedId="OJvwk3pLK34" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>RECURSION</h1>
                    <YoutubeEmbed embedId="rkVw-oDyS3g" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>ARRAYS</h1>
                    <YoutubeEmbed embedId="MOeGnamlUP4" /><br></br>
                    <YoutubeEmbed embedId="ATA6dYDz954" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>STRINGS</h1>
                    <YoutubeEmbed embedId="l7zI3nswO1g" /><br></br>
                    <YoutubeEmbed embedId="XdnmsKUvGsc" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>POINTERS</h1>
                    <YoutubeEmbed embedId="KGhacRRMnDw" /><br></br>
                    <YoutubeEmbed embedId="LscgaBzlGdE" /><br></br>
                    <YoutubeEmbed embedId="JYHpD9huNR4" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>ENUMERATION</h1>
                    <YoutubeEmbed embedId="-N212LgGqik" />
                </div><hr></hr><hr></hr>
    </div>
    
)
};

export default Cprogramming;