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
        <div>
            <div>{props.systemMsg}</div>
            {
                props.modalDispData === "error" ?
                <button onClick={handleErrorBtn}>Ok</button>
                :
                <button onClick={handleSuccessBtn}>Ok</button>
            }
        </div>
    )
}

export default DonationFormModal;