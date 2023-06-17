import styles from './styles.module.css';
import { Link} from 'react-router-dom';
import YoutubeEmbed from '../../Youtubeembed';


const Javascript = () => {
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

                <h1> JAVASCRIPT</h1>
                <div className={styles.cont}>
                <div className={styles.gallery}>
                    <h1>WHY JAVA SCRIPT ?</h1><br></br>
                    <h2>VERSATILITY</h2>
                    <p>You Can Create Visual Effects and Other Eye-catching Aesthetic Features. JavaScript is Versatile. It’s a Valuable Tool for Game Designers</p><br></br>
                    <h2>BEGINNER FRIENDLY</h2>
                    <p>JavaScript is Ideal for Newbies. JavaScript is Easy to Learn</p><br></br>
                    <h2>BE IN DEMAND</h2>
                    <p>Whether it's web applications, banking, or trading software, Javascript is used everywhere! So, adding it to your toolbox is a must.</p><br></br>
                </div>

                <div className={styles.gallery}>
                <h1>TOPICS</h1>
                    <p>Introduction</p>
                    <p>Variables and Constants</p>
                    <p>Data Types</p>
                    <p>Type Conversion & coercion</p>
                    <p>Operators</p>
                    <p>Conditional Statements</p>
                    <p>Switch statement</p>
                    <p>Template Literal</p>
                    <p>Loops</p>
                    <p>Objects</p>
                    <p>Functions and Variables</p>
                    <p>Array</p>
                    <p>Set and Map</p>
                    
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
                    
                <Link to = "/jsq">
                    <button type='button' className={styles.button}>
                         TAKE QUIZ
                    </button>
                </Link>
                </div>
                </div>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>INTRODUCTION</h1>
                    <YoutubeEmbed embedId="PlbupGCBV6w" /><br></br>
                    <YoutubeEmbed embedId="POPLF-Qc0OU" /><br></br>
                    <YoutubeEmbed embedId="BxZKLKfjaRg" />
                 </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Variables and Constants</h1>
                    <YoutubeEmbed embedId="TOkU5HxES1o" /><br></br>
                    <YoutubeEmbed embedId="Wsy7nhFnfbM" /><br></br>
                    
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Data Types</h1>
                    <YoutubeEmbed embedId="nCwQY8inRvU" /><br></br>
                    <YoutubeEmbed embedId="4GXpB9EMLWM" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Type Conversion & coercion</h1>
                    <YoutubeEmbed embedId="wFiVtqe1osM" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Operators</h1>
                    <YoutubeEmbed embedId="otYwi_wW9Hk" /><br></br>
                    <YoutubeEmbed embedId="gG0ynX_Sfx4" /><br></br>
                    <YoutubeEmbed embedId="uuRJ1aCj8Ro" /><br></br>
                    <YoutubeEmbed embedId="VBCOx4CqBz0" /><br></br>
                    <YoutubeEmbed embedId="gG0ynX_Sfx4" /><br></br>
                    <YoutubeEmbed embedId="uuRJ1aCj8Ro" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Conditional Statements</h1>
                    <YoutubeEmbed embedId="o_iO9WuoWaM" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Switch statement</h1>
                    <YoutubeEmbed embedId="SJPsOFfvEQA" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Template Literal</h1>
                    <YoutubeEmbed embedId="K4Kh5gw4PRE" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Loops</h1>
                    <YoutubeEmbed embedId="h84MlHv6g4Q" /><br></br>
                    <YoutubeEmbed embedId="jcwTB9fBzP0" /><br></br>
                    <YoutubeEmbed embedId="EBHOo-6xn4A" /><br></br>
                    <YoutubeEmbed embedId="-PVcUUj_ke4" /><br></br>
                    <YoutubeEmbed embedId="c69Y2GpF6-U" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Objects</h1>
                    <YoutubeEmbed embedId="S1dWe3f2zm0" /><br></br>
                    <YoutubeEmbed embedId="weEDSjNYzv4" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Functions and Variables</h1>
                    <YoutubeEmbed embedId="jwOW-qlJtxg" /><br></br>
                    <YoutubeEmbed embedId="pCU7vicLCgA" /><br></br>
                    <YoutubeEmbed embedId="37ly8tCGFWA" /><br></br>
                    <YoutubeEmbed embedId="nnAU1dLY7gY" /><br></br>
                    <YoutubeEmbed embedId="tJOJPealurs" /><br></br>
                    <YoutubeEmbed embedId="tV7ZqcB9J3Y" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Array</h1>
                    <YoutubeEmbed embedId="TScHu-37Cqw" /><br></br>
                    <YoutubeEmbed embedId="eADCg1R5_sk" /><br></br>
                    <YoutubeEmbed embedId="Yv1h-QKt_KQ" /><br></br>
                    <YoutubeEmbed embedId="c69Y2GpF6-U" /><br></br>
                    <YoutubeEmbed embedId="giNjEgYTd9E" /><br></br>
                    <YoutubeEmbed embedId="hP0Rl5euD_o" /><br></br>
                    <YoutubeEmbed embedId="oQ7Le6SuLNA" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Set and Map</h1>
                    <YoutubeEmbed embedId="YiIKUhtqeRM" /><br></br>
                    <YoutubeEmbed embedId="flveJ5_-iFA" /><br></br>
                </div><hr></hr><hr></hr>

                
    
               
    
    </div>
    
)
};

export default Javascript;
