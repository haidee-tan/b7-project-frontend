import logo from "../assets/imgs/kaserolla-logo.png";

const Banner = (props) => {
    return (
        <>
        <div>
            <div className="bannerBox">
                <img src={logo} alt="logo" />
            </div>
        </div>
        </>
    )
}

export default Banner;