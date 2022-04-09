import {useParams} from "react-router-dom";

const AdoptionDetails = () => {

    const {id} = useParams();
    console.log(`입력된 id : ${id}`);

    return (
      <div>입양 상세 페이지입니다.</div>
    );
}

export default AdoptionDetails;