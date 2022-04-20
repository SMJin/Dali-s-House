import "./css/AdoptionThumbnailEdit.css"
import { useRef, useState } from 'react';
import MyButton from '../../components/MyButton';
import MyHeader from '../../components/MyHeader';
import EditInput from '../../components/EditInput';
import MyFooter from '../../components/MyFooter';
import CrudButton from '../../components/CrudButton';

const AdoptionThumbnailEdit = ({onCreate}) => {

    const [state, setState] = useState({
        name: '',
        age: '',
        sex: '',
        neutering: null,
        identification: null,
    });

    const adoptionThumbnail_state = (state_name, value) => {
        setState({
            ...state,
            [state_name]: value,
        })
    }

    const handleSubmit = () => {
        if (state.name === '' || state.age === ' ' || state.sex === ' ' ||
            state.neutering === null || state.identification === null) {
            alert("입력이 되지 않은 값이 있습니다 !")
            return;
        }
        alert(`제출되었습니다. : 
            ${state.name}, 
            ${state.age}, 
            ${state.sex}, 
            ${state.neutering}, 
            ${state.identification}`
        );
        onCreate(state.name, state.age, state.sex, state.neutering, state.identification);
        setState({
            name: '',
            age: '',
            sex: '',
            neutering: null,
            identification: null,
        });
    }

    return (
        <div className='AdoptionThumbnailEdit'>
            <MyHeader />
            <div className='AdoptionThumbnail_form'>
                <h2>입양 보낼 아이의 정보를 입력해주세요.</h2>
                <EditInput 
                    type={'name'}
                    name="이름"
                    placeholder={"반려동물의 이름은 무엇인가요?"}
                    setState={adoptionThumbnail_state}
                />
                <EditInput 
                    type={'age'}
                    name="나이"
                    placeholder={"반려동물의 나이는 얼마인가요?"}
                    setState={adoptionThumbnail_state}
                />
                <EditInput 
                    type={'sex'}
                    name="성별"
                    placeholder={"반려동물의 성별은 무엇인가요?"}
                    setState={adoptionThumbnail_state}
                />
                <h5>반려동물이 중성화 수술을 하였나요?</h5>
                <MyButton
                    type={"true_false"} 
                    text={"있습니다"} 
                    onClick={() => {state.neutering = true;}}
                />
                <MyButton 
                    type={"true_false"} 
                    text={"없습니다"} 
                    onClick={() => {state.neutering = false}}
                />
                <h5>반려동물이 인식표가 있나요?</h5>
                <MyButton 
                    type={"true_false"} 
                    text={"있습니다"} 
                    onClick={() => {state.identification = true;}}
                />
                <MyButton 
                    type={"true_false"} 
                    text={"없습니다"} 
                    onClick={() => {state.identification = false;}}
                />

                <div>
                    <CrudButton 
                        text={'제출하기'}
                        type={'submit'}
                        onClick={handleSubmit}
                    />
                </div>
            </div>
            <MyFooter />
        </div>
    );
}

export default AdoptionThumbnailEdit;