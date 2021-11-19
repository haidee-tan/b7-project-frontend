import {useState} from "react";
import founder1 from "../assets/imgs/founders/founder1.png";
import founder2 from "../assets/imgs/founders/founder2.png";

const Home = (props) => {
    let [guestEmail, setGuestEmail] = useState("");
    let genEmail = "feedback@kaserolla.com";

    return(
        <div className="page">
            <div>
                <h2>Welcome to Kaserolla!</h2>
            </div>
            <div>
                <h3>Vision</h3>
                <p>We dream of a world where all will have food on their plates.</p>
            </div>
            <div>
                <h3>Mission</h3>
                <p>We shall serve as a hub that can reallocate food to where they are needed the most.</p>
            </div>
            <div id="founders">
                <h3>Founders</h3>
                <div>
                    <div className="founder-box">
                        <div>
                            <img src={founder1} alt="Founder" />
                        </div>
                        <div>
                            <h4>Kayla Basha</h4>
                            <div>
                                <p>
                                    Kayla Basha is a chef previously working at Krusty Krubs. Seeing how those with much have little regard for the food that they eat, she longs to provide food to those who will value them more. That longing pushed her to stay committed in building her own organization that will serve that purpose.
                                </p>
                                <p>
                                    And yes, she still cooks savory dishes, but now with a better purpose.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="founder-box">
                        <div>
                            <img src={founder2} alt="Founder" />
                        </div>
                        <div>
                            <h4>Shin Kamesh</h4>
                            <div>
                                <p>
                                    Shin Kamesh has a promising career in the corporate world. But seeing the greed of many has quenched her passion to render her best. Now on her own, she wants to belong to a committed group that aims to give rather than to take.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>Contact Kaserolla</h3>
                <div>
                    <div>
                        <p>You may send your questions and suggestions to:</p>
                        <p>feedback@kaserolla.com</p>
                    </div>
                    <div>
                        <p>You may also send feedback through the form below.</p>
                        <form action={`mailto:${genEmail}`} method="post" encType="text/plain">
                            <div>
                                <label htmlFor="guest-email-add">Your email address:</label>
                                <input type="email" id="guest-email-add" value={guestEmail} onChange={e => setGuestEmail(e.target.value)}/>
                            </div>
                            <div>
                                <textarea placeholder="Your message here."></textarea>
                            </div>
                            <div>
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;