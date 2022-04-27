import "./css/AdoptionThumbnailEdit.css"
import { useState } from 'react';
import axios from "axios";
import MyButton from '../../components/MyButton';
import MyHeader from '../../components/MyHeader';
import EditInput from '../../components/EditInput';
import MyFooter from '../../components/MyFooter';
import CrudButton from '../../components/CrudButton';

const AdoptionThumbnailEdit = () => {

    const [state, setState] = useState({
        name: '',
        breedOf: '',
        ageYear: '',
        ageMonth: '',
        sex: '',
        neutering: null,
        identification: null,
        imgUrl: '',
    });

    const adoptionThumbnail_state = (state_name, value) => {
        setState({
            ...state,
            [state_name]: value,
        })
    }

    const handleSubmit = () => {
        if (state.name === '' || state.ageYear === '' || state.ageMonth === '' ||
            state.sex === '' || state.breedOf === '' ||
            state.neutering === null || state.identification === null) {
            alert("입력이 되지 않은 값이 있습니다 !")
            return;
        }
        alert(`제출되었습니다. : 
            ${state.name},
            ${state.breedOf}, 
            ${state.ageYear},
            ${state.ageMonth}, 
            ${state.sex}, 
            ${state.neutering}, 
            ${state.identification}`
        );

        const data = {
            "name": `${state.name}`,
            "breedOf": `${state.breedOf}`,
            "ageYear": parseInt(`${state.ageYear}`),
            "ageMonth": parseInt(`${state.ageMonth}`),
            "sex": Boolean(`${state.ageYear}`),
            "neutering": Boolean(`${state.neutering}`),
            "identification": Boolean(`${state.identification}`),
            "imgUrl": " ",
        };
        console.log(data);
        axios({
            url: '/api/adoptionThumbnails',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data,
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });

        // setState({
        //     name: '',
        //     breedOf: '',
        //     ageYear: '',
        //     ageMonth: '',
        //     sex: '',
        //     neutering: null,
        //     identification: null,
        //     imgUrl: '',
        // });
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
                    type={'breedOf'}
                    name="품종"
                    placeholder={"반려동물의 품종은 무엇인가요?"}
                    setState={adoptionThumbnail_state}
                />
                <EditInput 
                    type={'ageYear'}
                    name="나이(년)"
                    placeholder={"반려동물은 몇 년을 살았나요?"}
                    setState={adoptionThumbnail_state}
                />
                <EditInput
                    type={'ageMonth'}
                    name="나이(달)"
                    placeholder={"그리고 몇 달을 살았나요?"}
                    setState={adoptionThumbnail_state}
                />
                <h5>반려동물의 성별은 무엇인가요?</h5>
                <MyButton
                    type={"true_false"}
                    text={"남아"}
                    onClick={() => {state.sex = true;}}
                />
                <MyButton
                    type={"true_false"}
                    text={"여아"}
                    onClick={() => {state.sex = false;}}
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


            </div>
            <MyFooter />
        </div>
    );
}

export default AdoptionThumbnailEdit;