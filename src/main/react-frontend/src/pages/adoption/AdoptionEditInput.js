import { useRef, useState } from 'react';
import "./css/AdoptionEditInput.css"

const AdoptionEditInput = ({type, name, placeholder, setState}) => {

    const isEmptyInput = useRef();
    const [value, setValue] = useState("");

    return (
        <div>
            {name} <input
                        className={["AdoptionEditInput", `AdoptionEditInput_${type}`].join(" ")} 
                        name={`AdoptionEditInput_${type}`} 
                        placeholder={placeholder} 
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                            setState(type, e.target.value);
                            if (e.target.value === '') {
                                isEmptyInput.current.style = "display:inline"
                            } else {
                                isEmptyInput.current.style = "display:none";
                            }
                        }}
                    />
            <span 
                className='AdoptionEditInput_isEmpty'
                ref={isEmptyInput}
            >{type} 값을 입력해주세요</span>
        </div>
    );
}

AdoptionEditInput.defaultProps = {
    type: 'default',
    name: '옵션',
    placeholder: '입력해주세요',
}

export default AdoptionEditInput;