import { useState } from 'react';
import CrudButton from '../../components/CrudButton';
import EditInput from '../../components/EditInput';
import MyFooter from '../../components/MyFooter';
import MyHeader from '../../components/MyHeader';
import "./css/VolunteerActivityThumbnailEdit.css"

const VolunteerActivityThumbnailEdit = ({onCreate}) => {

    const [state, setState] = useState({
        title: '',
        content: '',
    });

    const setVolunteerActivityThumbnail = (state_name, value) => {
        setState({
            ...state,
            [state_name]: value,
        });
    }

    const handleSubmit = () => {
        if (state.title === '' || state.content === ' ') {
            alert("입력이 되지 않은 값이 있습니다 !")
            return;
        }
        alert(`제출되었습니다. : 
            ${state.title}, 
            ${state.content}
        `);
        onCreate(state.name, state.content);
        setState({
            name: '',
            age: '',
        });
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