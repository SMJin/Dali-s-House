import "./css/AdoptionEdit.css"

const AdoptionEditInput = ({type, name, placeholder}) => {
    return (
        <div>
            {name} <input 
                        className={["AdoptionEditInput", `AdoptionEditInput_${type}`].join(" ")} 
                        name={`AdoptionEditInput_${type}`} 
                        placeholder={placeholder} 
                    />
        </div>
    );
}

AdoptionEditInput.defaultProps = {
    type: 'default',
    name: '옵션',
    placeholder: '입력해주세요',
}

export default AdoptionEditInput;