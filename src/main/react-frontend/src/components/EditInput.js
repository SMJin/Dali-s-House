import { useRef, useState } from 'react';
import "./css/EditInput.css"

const EditInput = ({type, name, placeholder, setState}) => {

    const isEmptyInput = useRef();
    const [value, setValue] = useState("");

    return (
        <div>
            {name} <input
                        className={["EditInput", `EditInput_${type}`].join(" ")} 
                        name={`${type}`} 
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
                className='EditInput_isEmpty'
                ref={isEmptyInput}
            >{type} 값을 입력해주세요</span>
        </div>
    );
}

EditInput.defaultProps = {
    type: 'default',
    name: '옵션',
    placeholder: '입력해주세요',
}

export default EditInput;