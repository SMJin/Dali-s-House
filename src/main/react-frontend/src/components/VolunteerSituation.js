import "./css/VolunteerSituation.css";

const VolunteerSituation = ({ vol, adopt, dona, spon }) => {
  return (
    <div className="VolunteerSituation">
      <div className="VolunteerSituation_title_box">
        <div className="VolunteerSituation_title">
          이번주
          <br />
          달리단 활동
        </div>
      </div>
      <div className="VolunteerSituation_itembox">
        <div className="VolunteerSituation_itembox_top">
          <div className="VolunteerSituation_itembox_left">
            <div className="VolunteerSituation_itembox_text">봉사 참여</div>
            {vol}
            <div className="VolunteerSituation_itembox_count">명</div>
          </div>
          <div className="VolunteerSituation_itembox_right">
            <div className="VolunteerSituation_itembox_text">임보·입양</div>
            {adopt}
            <div className="VolunteerSituation_itembox_count">명</div>
          </div>
        </div>
        <div className="hr" />
        <div className="VolunteerSituation_itembox_bottom">
          <div className="VolunteerSituation_itembox_left">
            <div className="VolunteerSituation_itembox_text">기부 참여</div>
            {dona}
            <div className="VolunteerSituation_itembox_count">명</div>
          </div>
          <div className="VolunteerSituation_itembox_right">
            <div className="VolunteerSituation_itembox_text">후원 참여</div>
            {spon}
            <div className="VolunteerSituation_itembox_count">명</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerSituation;
