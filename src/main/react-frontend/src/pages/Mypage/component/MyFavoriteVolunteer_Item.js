import { useNavigate } from "react-router-dom";
import "./css/MyFavoriteVolunteer_Item.css";
import ProgressBar from "./ProgressBar";

const MyFavoriteVolunteer_Item = ({ id, title, organ, recruitment_cur, recruitment_limit,  completed }) => {
  const navigate = useNavigate();

  return (
 <>
      <div className="MyFavoriteVolunteerItem_imgWrapper">
      <img className="MyFavoriteVolunteerItem_Image"
      src={process.env.PUBLIC_URL + `assets/myFavoriteVolunteer/myFavoriteVolunteer_${id}.png`}/>
      </div>
      <div className="MyFavoriteVolunteerItem_Title">{title}</div>
      <div className="MyFavoriteVolunteerItem_organ">
      {organ}
      </div>
      
      <div className="ProgressBar">
        <ProgressBar key={id} completed={completed} />
        <div className ="MyFavoriteVolunteerItem_recuriment_wrapper">
        <div className ="MyFavoriteVolunteerItem_completed">
        <span>{`${completed}%`}</span>
        </div>
        <div className="MyFavoriteVolunteerItem_recuriment">
      <div className ="MyFavoriteVolunteerItem_recuriment_cur">
      {recruitment_cur}명 / 
      </div>
      <div className ="MyFavoriteVolunteerItem_recuriment_limit">
       {recruitment_limit}명 
       </div>
       </div>
      </div>



          </div>
     
    </>
  );
};
export default MyFavoriteVolunteer_Item;
