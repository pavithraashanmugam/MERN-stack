import styles from './styles.module.css';
import { Link} from 'react-router-dom';
import t from "./teach.jpg";
import r from "./reward.jpg";
import i from "./inspire.jpg";


const Instructor = () => {
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
                     INSTROCTOR
                </button>
            </Link>
            <button className={styles.white_btn} onClick={handleLogout}>
                 LOGOUT
            </button>
            </nav>

            <div className={styles.main_container}>
                <h1>Want to become an INSTRUCTOR?</h1><br></br>
                <h2>Come teach with us...!</h2>
                <h3>Become an instructor and change lives.</h3><br></br>
                <Link to = "/">
                        <button type='button' className={styles.green_btn}>
                            GET STARTED
                        </button><br></br>
                        </Link>
             </div>

            <div className={styles.gallery1}>
            
            </div>

            <div className={styles.gallery}>
            <img src={t} alt="teach" width="70" height="70"></img>
            <h2>Teach your way</h2>
            <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
            </div>

            <div className={styles.gallery}>
            <img src={r} alt="reward" width="70" height="70"></img>
            <h2>Teach your way</h2>
            <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
            </div>

            <div className={styles.gallery}>
            <img src={i} alt="inspire" width="70" height="70"></img>
            <h2>Teach your way</h2>
            <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
            </div>

            </div>
            

    
    
    
)
};

export default Instructor;