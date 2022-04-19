import {useParams} from "react-router-dom";
import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import CrudButton from "../../components/CrudButton";
import "./css/AdoptionEdit.css";
import AdoptionEditInput from './AdoptionEditInput';
import MyButton from '../../components/MyButton';
import AdoptionTumbnail from './AdoptionThumbnail';

const AdoptionEdit = () => {

    // const {id} = useParams();
    // console.log(`입력된 id : ${id}`);

    return (
        <div>
        <MyHeader />
        <div className='AdoptionEdit'>
            <div className='AdoptionEdit_left'>
            <div className={['AdoptionEdit_form', 'AdoptionEdit_form_user'].join(" ")}>
            <h2>입양 신청서 작성</h2>
            <h3>보호자 정보를 입력해주세요</h3>
                <AdoptionEditInput
                    type={'job'}
                    name="직업"
                    placeholder={"어떤 일을 하고 계신가요?"}
                />
                <AdoptionEditInput
                    type={'income'}
                    name="수입"
                    placeholder={"한달 평균 수입은 어떻게 되시나요?"}
                />
                <MyButton text={"+ 기타 정보 추가"} />    
            </div>

            <div className={['AdoptionEdit_form', 'AdoptionEdit_form_pet'].join(" ")}>
                <h3>반려동물 경험을 입력해주세요</h3>
                <h5>반려동물을 키워본 경험이 있나요?</h5>
                <MyButton type={"true_false"} text={"있습니다"} />
                <MyButton type={"true_false"} text={"없습니다"} />
                <AdoptionEditInput
                    type={'species'}
                    name="품종"
                    placeholder={"키워본 반려동물의 종은 무엇인가요?"}
                />
                <AdoptionEditInput
                    type={'period'}
                    name="기간"
                    placeholder={"같이 살았던 기간은 어느정도 인가요?"}
                />
                <MyButton text={"+ 기타 정보 추가"} />
            </div>

            <div className={['AdoptionEdit_form', 'AdoptionEdit_form_atmosphere'].join(" ")}>
                <h3>입양하는 환경을 입력해주세요</h3>
                <AdoptionEditInput 
                    type={'use_hour'}
                    name=""
                    placeholder={"하루에 몇 시간을 함께 보낼 수 있나요?"}
                />
                <AdoptionEditInput 
                    type={'use_money'}
                    name=""
                    placeholder={"한달에 반려동물에게 얼마정도 사용하실 수 있나요?"}
                />
                <AdoptionEditInput 
                    type={'use_family'}
                    name=""
                    placeholder={"가족 구성원은 몇 명인가요?"}
                />
                <AdoptionEditInput 
                    type={'use_permission'}
                    name=""
                    placeholder={"가족 구성원 모두에게 허가를 받으셨나요?"}
                />
            </div>
                <input type={'checkbox'} />
                <label>개인정보 수집 및 이용 동의</label>
                <div className='AdoptionEdit_form_permission'>
                    <h6>1. 해당 문서는 보호소에서 작성자님을 파악하는데 사용하는 문서 입니다.</h6>
                    <h6>2. 본 문서는 해당 보호소에만 전달되고 어디에도 공유되지 않으며 접수 1주일 후 파기됩니다.</h6>
                </div>
                <CrudButton 
                    text={'신청서 제출하기'}
                    type={'submit'}
                    onClick={() => alert("제출되었습니다.")}
                />
            </div>
            
                <div className='AdoptionEdit_right'>
                    <h5>신청하려는 반려동물 정보</h5>
                    <AdoptionTumbnail 
                        name={"점박이"}
                        age={"8개월"} 
                        sex={"여아"}
                        neutering={true}
                        identification={true}
                    />
                </div>
                {/* <CrudButton
                    text={'제출하기'}
                    type={'submit'}
                    onClick={() => alert("제출되었습니다.")}
                />
                <CrudButton
                    text={'수정하기'}
                    type={'edit'}
                    onClick={() => alert("수정되었습니다.")}
                />
                <CrudButton
                    text={'삭제하기'}
                    type={'delete'}
                    onClick={() => alert("삭제되었습니다.")}
                /> */}
        </div>
            <MyFooter />
        </div>
    );
}

export default AdoptionEdit;