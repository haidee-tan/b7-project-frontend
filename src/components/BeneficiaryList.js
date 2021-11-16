const BeneficiaryList = (props) => {

    let {name} = props.beneficiaries

    return (
        <>
        
        <option>
            {name}
        </option>

        </>
    )
}

export default BeneficiaryList;