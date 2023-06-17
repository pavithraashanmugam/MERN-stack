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

                <h1> ORACLE</h1>
                <div className={styles.cont}>
                <div className={styles.gallery}>
                    <h1>WHY ORACLE ?</h1><br></br>
                    <h2>REDUCE OPERATIONAL COST</h2>
                    <p>Reduce the costs of managing, securing, and maintaining your Oracle databases with machine learning-driven automation. </p><br></br>
                    <h2>SINGLE DATABASE</h2>
                    <p>Free application developers from complex transformations and redundant data with Oracle converged database.</p><br></br>
                    <h2>DEPLOY ANYWHERE</h2>
                    <p>Deploy Oracle Database wherever required—in your data center, public cloud, or private cloud.</p><br></br>
                    </div>

                <div className={styles.gallery}>
                <h1>TOPICS</h1>
                    <p>Introduction</p>
                    <p>Data Types in Oracle SQL Database</p>
                    <p>Types of SQL Statements</p>
                    <p>Tables</p>
                    <p>Commit and Rollback</p>
                    <p>Logical Operators</p>
                    <p>Arithmetic Operators</p>
                    <p>Comparision Operators</p>
                    <p>Like Operators</p>
                    <p>Types of SQL Functions</p>
                    <p>Convert Text from Lower to Upper Case and viseversa</p>
                    <p>Functions</p>
                    <p>Aggregate Function</p>
                    <p>Constraints</p>
                    <p>Join</p>
                    <p>Operator</p>
                    
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
                    
                <Link to = "/oq">
                    <button type='button' className={styles.button}>
                         TAKE QUIZ
                    </button>
                </Link>
                
                </div>
                </div>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>INTRODUCTION</h1>
                    <YoutubeEmbed embedId="ibOzwFRm32w" /><br></br>
                    <YoutubeEmbed embedId="wuCXTBR8Su8" /><br></br>
                    <YoutubeEmbed embedId="dmMloQbk844" />
                 </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Data Types in Oracle SQL Database</h1>
                    <YoutubeEmbed embedId="z36_kk21J9M" /><br></br>
                    <YoutubeEmbed embedId="WkSyM9mEfCQ" /><br></br>
                    
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Types of SQL Statements</h1>
                    <YoutubeEmbed embedId="kwnBFr_3NXE" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Tables</h1>
                    <YoutubeEmbed embedId="tWSsVMleAZ4" /><br></br>
                    <YoutubeEmbed embedId="asl5KOY5DnM" /><br></br>
                    <YoutubeEmbed embedId="U0OsWobsfsY" /><br></br>
                    <YoutubeEmbed embedId="qUjU7bfyxR0" /><br></br>
                    <YoutubeEmbed embedId="STG75BvfiDA" /><br></br>
                    <YoutubeEmbed embedId="crelkWWTRAg" /><br></br>
                    <YoutubeEmbed embedId="-9TXNNKqT50" /><br></br>
                    <YoutubeEmbed embedId="MGyNdL92uRM" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Commit and Rollback</h1>
                    <YoutubeEmbed embedId="Li6BjT_W8W8" /><br></br>
                    <YoutubeEmbed embedId="iB0RoMbEdVI" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Logical Operators</h1>
                    <YoutubeEmbed embedId="QtdjwDYgfHA" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Arithmetic Operators</h1>
                    <YoutubeEmbed embedId="K_0ECANZ0nU" />
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Comparision Operators</h1>
                    <YoutubeEmbed embedId="SkFGRNkyWe8" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Like Operators</h1>
                    <YoutubeEmbed embedId="cRf45DJABNE" /><br></br>
                    <YoutubeEmbed embedId="SEIWF99YReE" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Types of SQL Functions</h1>
                    <YoutubeEmbed embedId="7TRQ1y8Gpxc" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Convert Text from Lower to Upper Case and viseversa</h1>
                    <YoutubeEmbed embedId="4XcKHaCi9jc" /><br></br>
                    <YoutubeEmbed embedId="stvmU7EHJOA" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Functions</h1>
                    <YoutubeEmbed embedId="sbdgtEdDNmg" /><br></br>
                    <YoutubeEmbed embedId="X7tVSK1_k2w" /><br></br>
                    <YoutubeEmbed embedId="fXCM0q3Yab4" /><br></br>
                    <YoutubeEmbed embedId="GUKIKddjK6Q" /><br></br>
                    <YoutubeEmbed embedId="TZuohXvA8KU" /><br></br>
                    <YoutubeEmbed embedId="zmYJF8MRJyc" /><br></br>
                    <YoutubeEmbed embedId="-7Sc37OXfLk" /><br></br>
                    <YoutubeEmbed embedId="HM8FrsnTRXM" /><br></br>
                    <YoutubeEmbed embedId="DEb70tvUltA" /><br></br>
                    <YoutubeEmbed embedId="9rxIeQSZOaY" /><br></br>
                    <YoutubeEmbed embedId="NsEQ-T90Jz8" /><br></br>
                    <YoutubeEmbed embedId="UvbwMt4aID4" /><br></br>
                    <YoutubeEmbed embedId="o00qcNITnAE" /><br></br>
                    <YoutubeEmbed embedId="c_GkqYFTkM4" /><br></br>
                    <YoutubeEmbed embedId="f50V1hmeMto" /><br></br>
                    <YoutubeEmbed embedId="E_YlJTi5Lm0" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Aggregate Function</h1>
                    <YoutubeEmbed embedId="vP9cg_GiHeI" /><br></br>
                    <YoutubeEmbed embedId="RJvISbFjUmA" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Constraints</h1>
                    <YoutubeEmbed embedId="QK_A9_xyB3Q" /><br></br>
                    <YoutubeEmbed embedId="bZJOvtHOUXI" /><br></br>
                    <YoutubeEmbed embedId="q7Z4t0xYAII" /><br></br>
                    <YoutubeEmbed embedId="pl7nyuuBMq0" /><br></br>
                    <YoutubeEmbed embedId="yr39OeWfBXw" /><br></br>
                    <YoutubeEmbed embedId="iPVNeg31bOU" /><br></br>
                </div><hr></hr><hr></hr>


                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Join</h1>
                    <YoutubeEmbed embedId="D-jzH8Jdv44" /><br></br>
                    <YoutubeEmbed embedId="kSVA1Scu2hQ" /><br></br>
                    <YoutubeEmbed embedId="UAL7TZFqycQ" /><br></br>
                    <YoutubeEmbed embedId="uQNQPYkteWE" /><br></br>
                    <YoutubeEmbed embedId="ByR6sQ-N0Zs" /><br></br>
                    <YoutubeEmbed embedId="M41tfC50NuI" /><br></br>
                    <YoutubeEmbed embedId="Huxu7ibUjzQ" /><br></br>
                </div><hr></hr><hr></hr>

                <div className={styles.App}>
                    <br></br><br></br>
                    <h1>Operator</h1>
                    <YoutubeEmbed embedId="TxENx_eSONE" /><br></br>
                    <YoutubeEmbed embedId="m8xy5VZBKSs" /><br></br>
                    <YoutubeEmbed embedId="95okFotHopg" /><br></br>
                    <YoutubeEmbed embedId="kU6vNoSBg58" /><br></br>
                    <YoutubeEmbed embedId="IdxPjuJwhcI" /><br></br>
                </div><hr></hr><hr></hr>

                
    
               
    
    </div>
    
)
};

export default Java;
