import "./css/MyButton.css";

const MyButton = ({text, type, onClick}) => {

    const btnType =  ['head_menus', 'head_logo', 'head_login',
                        'true_false'].includes(type) ? type : 'default';

    return (
        <button className={["MyButton", `MyButton_${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    );
}

MyButton.defaultProps = {
    text : 'MyButton',
    type : 'default',
    onClick : () => {
        alert('MyButton 이 눌렸습니다!');
    }
};

export default MyButton;