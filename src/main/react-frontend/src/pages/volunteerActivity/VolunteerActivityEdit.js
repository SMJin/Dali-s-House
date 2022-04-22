import "./css/VolunteerActivityEdit.css"
import { useState } from 'react';
import CrudButton from '../../components/CrudButton';
import EditInput from '../../components/EditInput';
import MyButton from '../../components/MyButton';
import MyFooter from '../../components/MyFooter';
import MyHeader from '../../components/MyHeader';

const VolunteerActivityEdit = () => {

    const [state, setState] = useState({
        name: '',
        birthYear: '',
        birthMonth: '',
        birthDay: '',
        sex: null,
        tel: '',
        email: '',
    });

    const setVolunteerActivity = (state_name, value) => {
        setState({
            ...state,
            [state_name]: value,
        });
    };

    return (
        <div>
            <MyHeader />
            <div className='VolunteerActivityEdit'>
                <div className='VolunteerActivityEdit_left'>
                    <h2>봉사활동 신청서 작성</h2>
                    <EditInput 
                        type={'name'}
                        name={'이름'}
                        placeholder={'이름을 입력하세요'}
                        setState={setVolunteerActivity}
                    />
                    <EditInput 
                        type={'birth'}
                        name={'생일'}
                        placeholder={'생일을 입력하세요'}
                        setState={setVolunteerActivity}
                    />
                    <h5>성별</h5>
                    <MyButton type={"true_false"} text={"남자"} />
                    <MyButton type={"true_false"} text={"여자"} />
                    <EditInput 
                        type={'tel'}
                        name={'휴대폰번호'}
                        placeholder={'번호를 입력하세요'}
                        setState={setVolunteerActivity}
                    />
                    <EditInput 
                        type={'email'}
                        name={'이메일주소'}
                        placeholder={'주소를 입력하세요'}
                        setState={setVolunteerActivity}
                    />

                    <div className='VolunteerActivityEdit_left_submit'>
                        <input type={'checkbox'} />
                        <label>개인정보 수집 및 이용 동의</label>
                        <div className='VolunteerActivityEdit_left_submit_permission'>
                            <h6>1. 개인정보 수집 이용목적<br /> 봉사참여 신청, 상담 및 관련 서비스 제공</h6>
                            <h6>2. 개인정보 수집항목<br /> [필수]이름, 출생년도, 휴대폰 번호, 이메일 주소</h6>
                            <h6>3. 개인정보 보유 이용기간<br /> 준영구</h6>
                            <h6>4. 귀하는 개인정보 수집 이용에 동의하지 않을 수 있습니다. 단, 봉사활동을 위한 최소한의 정보인 필수정보는 미 입력시 봉사활동 참여가 제한됨을 알려드립니다.</h6>
                        </div>
                        <CrudButton
                            text={'신청서 제출하기'}
                            type={'submit'}
                            onClick={() => alert("제출되었습니다.")}
                        />
                    </div>
                </div>
                <div className='VolunteerActivityEdit_right'>

                </div>
            </div>
            <MyFooter />
        </div>
    );
}

export default VolunteerActivityEdit;