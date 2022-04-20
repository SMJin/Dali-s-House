import MyFooter from '../../components/MyFooter';
import MyHeader from '../../components/MyHeader';
import "./css/VolunteerActivityEdit.css"

const VolunteerActivityEdit = () => {
    return (
        <div>
            <MyHeader />
            <div className='VolunteerActivityEdit'>
                <div className='VolunteerActivityEdit_left'>
                    <h2>봉사활동 신청서 작성</h2>
                </div>
                <div className='VolunteerActivityEdit_right'>

                </div>
            </div>
            <MyFooter />
        </div>
    );
}

export default VolunteerActivityEdit;