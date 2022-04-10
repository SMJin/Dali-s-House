import './css/CrudButton.css';

const CrudButton = ({text, type, onClick}) => {

    const btnType = ['submit', 'edit', 'delete'].includes(type) ? type : 'default';

    return (
      <button className={["CrudButton", `CrudButton_${btnType}`, "spin", "circle"].join(" ")} onClick={onClick}>
          {text}
      </button>
    );
}

CrudButton.defaultProps = {
    text: "CrudButton",
    type: "default",
    onClick : () => {
        alert('CrudButton 이 눌렸습니다!');
    }
};

export default CrudButton;