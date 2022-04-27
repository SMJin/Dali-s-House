import { useState } from 'react';
import axios from "axios";
import CrudButton from '../../components/CrudButton';
import EditInput from '../../components/EditInput';
import MyFooter from '../../components/MyFooter';
import MyHeader from '../../components/MyHeader';
import "./css/VolunteerActivityThumbnailEdit.css"

const VolunteerActivityThumbnailEdit = () => {

    const [state, setState] = useState({
        title: '',
        content: '',
        authorId: null,
        startTime: null,
        endTime: null,
        place: '',
        limitNumOfPeople: null,
        imgUrl: '',
    });

    const setVolunteerActivityThumbnail = (state_name, value) => {
        setState({
            ...state,
            [state_name]: value,
        });
    }

    const handleSubmit = () => {
        // if (state.title === '' || state.content === '' ||
        //     state.authorId === null || state.startTime === null || state.endTime === null ||
        //     state.place === '' || state.limitNumOfPeople === null || state.imgUrl === '') {
        //     alert("입력이 되지 않은 값이 있습니다 !")
        //     return;
        // }
        // alert(`제출되었습니다. :
        //     ${state.title},
        //     ${state.content},
        //     ${state.authorId},
        //     ${state.startTime},
        //     ${state.endTime},
        //     ${state.place},
        //     ${state.limitNumOfPeople},
        //     ${state.imgUrl}
        // `);

        const data = {
            "title": `${state.title}`,
            "content": `${state.content}`,
            "authorId": 1,
            "startTime": 220422,
            "endTime": 220427,
            "place": "단국대학교",
            "limitNumOfPeople": 10,
            "imgUrl": "/assets/vol_img.png"
        }

        console.log(data);
        axios({
            url: '/api/volunteerActivity/thumbnails',
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
        //     title: '',
        //     content: '',
        //     authorId: null,
        //     startTime: null,
        //     endTime: null,
        //     place: '',
        //     limitNumOfPeople: null,
        //     imgUrl: ''
        // });
    }

    return (
        <div className='VolunteerActivityThumbnailEdit'>
            <MyHeader />
            <div className='VolunteerActivityThumbnailEdit_form'>
                <h2>봉사활동 게시물을 작성해주세요.</h2>
                <EditInput 
                    type={'title'}
                    name={'제목'}
                    placeholder={'제목을 입력해주세요.'}
                    setState={setVolunteerActivityThumbnail}
                />
                <EditInput 
                    type={'content'}
                    name={'내용'}
                    placeholder={'내용을 입력해주세요.'}
                    setState={setVolunteerActivityThumbnail}
                />
                <CrudButton
                    text={'신청서 제출하기'}
                    type={'submit'}
                    onClick={handleSubmit}
                />
            </div>
            <MyFooter />
        </div>
    );
}

export default VolunteerActivityThumbnailEdit;