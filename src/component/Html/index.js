import styles from './styles.module.css';
import { Link} from 'react-router-dom';
import YoutubeEmbed from '../../Youtubeembed';



const Html = () => {
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

                <h1> HTML</h1>
                <div className={styles.cont}>
                <div className={styles.gallery}>
                    <h1>WHY HTML ?</h1><br></br>
                    <h2>BIGINNER FRIENDLY</h2>
                    <p>A simple language that helps to build and design an amazing web application.</p>
                    <p> Building websites allows you to do fun and creative work, from anywhere in the world, and it even pays well. Web development is one of the most future-proof and highest-paying industries in the world.</p><br></br>
                    <h2>BUILD WEBPAGES</h2>
                    <p> It's an all-in-one package that takes you from knowing nothing about HTML , to building beautiful websites using tools and technologies that professional web developers use every single day.</p><br></br>
                    </div>

                <div className={styles.gallery}>
                    <h1>TOPICS</h1>
                    <p>Introduction</p>
                    <p>Creating first webpage</p>
                    <p>Line breaks, spacing and comments</p>
                    <p>Ordered unordered list</p>
                    <p>Creating table</p>
                    <p>Creating a web link</p>
                    <p>Adding an image</p>
                    <p>Nested elements</p>
                    <p>One line and multi line text box</p>
                    <p>Audio element</p>
                    <p>Video element</p>
                    <p>Doctype</p>
                    <p>Attributes</p>
                    <p>Iframe element</p>
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
                    
                <Link to = "/hq">
                    <button type='button' className={styles.button}>
                         TAKE QUIZ
                    </button>
                </Link>
                </div>
                </div>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>INTRODUCTION</h1>
                    <YoutubeEmbed embedId="dD2EISBDjWM" />
                 </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>CREATING FIRST WEB PAGE</h1>
                    <YoutubeEmbed embedId="-USAeFpVf_A" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>LINE BREAKS, SPACING & COMMENTS</h1>
                    <YoutubeEmbed embedId="i3GE-toQg-o" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>ORDERED & UNORDERED LIST</h1>
                    <YoutubeEmbed embedId="09oErCBjVns" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>CREATING TABLE</h1>
                    <YoutubeEmbed embedId="wvR40su_XBM" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>CREATING A WEB LINK</h1>
                    <YoutubeEmbed embedId="U4UHoiK6Oo4" /><br></br>
                    <YoutubeEmbed embedId="bCt2FnyY7AE" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>ADDING AN IMAGE</h1>
                    <YoutubeEmbed embedId="Zy4KJeVN7Gk" /><br></br>
                    <YoutubeEmbed embedId="dM12ctixdT4" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>NESTED ELEMENTS</h1>
                    <YoutubeEmbed embedId="rO6_MZLIzCg" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>TEXT BOX </h1>
                    <YoutubeEmbed embedId="wvU1mmJn_UI" /><br></br>
                    <YoutubeEmbed embedId="f9QXNFVlsls" /><br></br>
                    <YoutubeEmbed embedId="onKF88kRK3Q" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>AUDIO ELEMENT</h1>
                    <YoutubeEmbed embedId="TybmJxXRV80" /><br></br>
                    <YoutubeEmbed embedId="2aenvVrYWjg" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>VIDEO ELEMENT</h1>
                    <YoutubeEmbed embedId="iIgFqkDs4tY" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>DOCTYPE</h1>
                    <YoutubeEmbed embedId="c625P4B0OY0" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>ATTRIBUTES</h1>
                    <YoutubeEmbed embedId="iWWTtYGZ4YA" /><br></br>
                    <YoutubeEmbed embedId="sx4kaeyzQzw" /><br></br>
                    <YoutubeEmbed embedId="s3h5FLBon88" /> <br></br>
                    <YoutubeEmbed embedId="X_OROia6aPo" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>IFREAME ELEMENTS</h1>
                    <YoutubeEmbed embedId="7PORMYx30xE" />
                </div><hr></hr><hr></hr>
    
               
    
    </div>
    
)
};

export default Html;