import {useState} from "react";
import founder1 from "../assets/imgs/founders/founder1.png";
import founder2 from "../assets/imgs/founders/founder2.png";

const Home = (props) => {
    let [guestEmail, setGuestEmail] = useState("");
    let genEmail = "feedback@kaserolla.com";

    return(
        <div className="page">
            <div className="welcome">
                <h1>Welcome to Kaserolla!</h1>
            </div>
            <div className="mvBox">
                <div className="vision">
                    <h3>Vision</h3>
                    <p>
                        We envision a world without hunger. We dream of a world where all will have food on their plates.
                    </p>
                </div>
                <div className="mission">
                    <h3>Mission</h3>
                    <p>
                        Our mission is to fight hunger the best we can. We shall serve as a hub that can reallocate food to where they are needed the most.
                    </p>
                </div>
            </div>

            <div id="founders">
                <h2>Founders</h2>
                <div className="founderContainer">
                    <div className="founderBox">
                        <div>
                            <img className="founderImg"
                            src={founder1} alt="Founder" />
                        </div>
                        <div className="founderDetail">
                            <h4>Kayla Basha</h4>
                            <div>
                                <p>
                                    Kayla Basha is a chef previously working at Bahay Kubo Restaurant. Seeing how those with much have little regard for the food that they eat, she longs to provide food to those who will value them more. That longing pushed her to stay committed in building her own organization that will serve that purpose.
                                </p>
                                <p>
                                    And yes, she still cooks savory dishes, but now with a better purpose.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="founderBox"> 
                        <div>
                            <img className="founderImg" src={founder2} alt="Founder" />
                        </div>
                        <div className="founderDetail">
                            <h4>Shin Kamesh</h4>
                            <div>
                                <p>
                                    Shin Kamesh has a promising career in the corporate world. But seeing the greed of many has quenched her passion to render her best. Now on her own, she wants to belong to a committed group that aims to give rather than to take.
                                </p>
                                <p>
                                    She joined Kayla in this journey of orchestrating a team of dedicated people to bring food to those in need.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactBox">
                <h2>Contact Kaserolla</h2>
                <div className="contactContainer">
                    <div className="contactBox1">
                        <p>
                            You may send your questions and suggestions to: <span className="beneWebsite">feedback@kaserolla.com</span>.
                        </p>
                        <p>
                            You may also send feedback through the form below.
                        </p>
                    </div>
                    <div className="contactBox2">
                        <form action={`mailto:${genEmail}`} method="post" encType="text/plain">
                            <div>
                                <label htmlFor="guest-email-add">Your email address:</label>
                                <input type="email" id="guest-email-add" value={guestEmail} onChange={e => setGuestEmail(e.target.value)}/>
                            </div>
                            <textarea placeholder="Your message here."></textarea>
                            <div>
                                <input type="submit" className="submitBtn"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;