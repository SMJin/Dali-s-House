import "./css/TopVolunteerList.css";
const TopVolunteerList = () => {
  return (
    <div className="TopVolunteerList">
      <div className="TopVolunteerListBox">
        <div className="listbox">
          <div className="rank">1</div>
          <img class="icon" src={process.env.PUBLIC_URL + `/assets/icon.png`} />
          <div className="text">
            <h4>Journey</h4>
            <h5>명예달리단</h5>
            <h>
              <b>39시간</b>
            </h>
          </div>
        </div>
        <div className="listbox">
          <div className="rank">2</div>
          <img class="icon" src={process.env.PUBLIC_URL + `/assets/icon.png`} />
          <div className="text">
            <h4>Journey</h4>
            <h5>명예달리단</h5>
            <h>
              <b>39시간</b>
            </h>
          </div>
        </div>
        <div className="listbox">
          <div className="rank">3</div>
          <img class="icon" src={process.env.PUBLIC_URL + `/assets/icon.png`} />
          <div className="text">
            <h4>Journey</h4>
            <h5>명예달리단</h5>
            <h>
              <b>39시간</b>
            </h>
          </div>
        </div>
        <div className="listbox">
          <div className="rank">4</div>
          <img class="icon" src={process.env.PUBLIC_URL + `/assets/icon.png`} />
          <div className="text">
            <h4>Journey</h4>
            <h5>명예달리단</h5>
            <h>
              <b>39시간</b>
            </h>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopVolunteerList;
