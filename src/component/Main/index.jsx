import styles from './styles.module.css';
import { Link} from 'react-router-dom';

import py from './py.webp';
import java from './java.png';
import c from './c.jpg';
import html from './html.png';
import kotlin from './kot.png';
import js from './js.png';
import orcl from './oracle.png';
import cp from './cplus.jpg';


const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
        };
    

    return(
        <div className={styles.main_container}>
            <h1>BRAIN TRIP</h1>
            <nav className={styles.navbar}>
            <Link to = "/">
                <button type='button' className={styles.white_btn}>
                     HOME
                </button>
            </Link>
            <Link to = "/instructor">
                <button type='button' className={styles.white_btn}>
                     INSTRUCTOR
                </button>
            </Link>
            <button className={styles.white_btn} onClick={handleLogout}>
                 LOGOUT
            </button>
            </nav>



            <image className={styles.gallery}>
            
            <img src={py} alt="Python" width="500" height="333"></img>
            <h2>PYTHON</h2><br></br>
            
            <Link to = "/python">
                        <button type='button' className={styles.course_btn}>
                            click to view
                        </button>
                        </Link>
                
            </image>
            <image className={styles.gallery}>
            
            <img src={c} alt="c programming" width="500" height="333"></img>
            <h2>C PROGRAMMING</h2><br></br>
            
            <Link to = "/c">
                        <button type='button' className={styles.course_btn}>
                            click to view
                        </button>
                        </Link>
            </image>
            <image className={styles.gallery}>
            
            <img src={java} alt="java" width="500" height="333"></img>
            <h2>JAVA</h2>
            
            <Link to = "/java">
                        <button type='button' className={styles.course_btn}>
                            click to view
                        </button>
                        </Link>
            </image>
            <image className={styles.gallery}>
            
            <img src={html} alt="html" width="500" height="333"></img>
            <h2>HTML</h2><br></br>
            
            <Link to = "/html">
                        <button type='button' className={styles.course_btn}>
                            click to view
                        </button>
                        </Link>
            </image>
            <image className={styles.gallery}>
            
            <img src={kotlin} alt="kotlin" width="500" height="333"></img>
            <h2>KOTLIN</h2><br></br>
            
            <Link to = "/kot">
                        <button type='button' className={styles.course_btn}>
                            click to view
                        </button>
                        </Link>
            </image>
            <image className={styles.gallery}>
            
            <img src={js} alt="javascript" width="500" height="333"></img>
            <h2>JAVA SCRIPT</h2><br></br>
            
            <Link to = "/js">
                        <button type='button' className={styles.course_btn}>
                            click to view
                        </button>
                        </Link>
            </image>
            <image className={styles.gallery}>
            
            <img src={orcl} alt="oracle" width="500" height="333"></img>
            <h2>SQL</h2><br></br>
            
            <Link to = "/orcl">
                        <button type='button' className={styles.course_btn}>
                            click to view
                        </button>
                        </Link>
            </image>
            <image className={styles.gallery}>
            
            <img src={cp} alt="cplusplus" width="500" height="333"></img>
            <h2>C++</h2><br></br>
            
            <Link to = "/cp">
                        <button type='button' className={styles.course_btn}>
                            click to view
                        </button>
                        </Link>
            </image>
        </div>
        
    )
};

export default Main;