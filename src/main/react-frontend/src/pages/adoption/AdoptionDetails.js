import {useParams} from "react-router-dom";
import MyHeader from "../../components/MyHeader";
import CrudButton from "../../components/CrudButton";

const AdoptionDetails = () => {

    const {id} = useParams();
    console.log(`입력된 id : ${id}`);

    return (
        <div>
            <MyHeader />
            <h3>입양 상세 페이지입니다.</h3>
            <div>
                <CrudButton
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
                />
            </div>
        </div>
    );
}

export default AdoptionDetails;