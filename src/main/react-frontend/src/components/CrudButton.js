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
};

export default CrudButton;