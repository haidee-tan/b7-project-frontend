const DonationFormModal = (props) => {
    const handleErrorBtn = () => {
        props.setDonationModalDisp(false);
        props.setSystemMsg("");
    }
    const handleSuccessBtn = () => {
        handleErrorBtn();
        props.setModalDisp(false);
    }
    return(
        <div className="modal">
            <h3>
                {
                    props.modalDispData === "error" ?
                    "Oh no! :("
                    : "Kaserolla served!"
                }
            </h3>
            <div className="modal-body">{props.systemMsg}</div>
            <div className="btn-box">
                {
                    props.modalDispData === "error" ?
                    <button onClick={handleErrorBtn}>Ok</button>
                    :
                    <button onClick={handleSuccessBtn}>Ok</button>
                }
            </div>
        </div>
    )
}

export default DonationFormModal;