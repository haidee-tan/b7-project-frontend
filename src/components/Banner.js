import logo from "../assets/imgs/kaserolla-logo.png";

const Banner = (props) => {
    return (
        <>
        <div className="bannerContainer">
            <div className="bannerBox">
                <img src={logo} alt="logo" />
            </div>
        </div>
        </>
    )
}

export default Banner;