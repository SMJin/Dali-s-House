import "./css/AdoptionBest.css"
import MyImage from '../../components/MyImage';

const AdoptionBest = ({name}) => {
    return (
        <div className='AdoptionBest'>
            <MyImage type={"img_best"} />
            <div className='AdoptionBest_text'>
                <span className='AdoptionBest_RoundMark'>보호소</span>
                <h3><b>{name}</b>에게<br />가족이 생겼어요!</h3>
                <h5>{name}의 입양 절차를<br />따라가볼까요?</h5>
            </div>
        </div>
    );
}

AdoptionBest.defaultProps = {
    name: '달리',
}

export default AdoptionBest;