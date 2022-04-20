import "./css/MyPageButton.css";

const MyPageButton = ({text, type, onClick}) => {

    const btnType =  ['my_volunteer', 'my_favorite_volunteer'].includes(type) ? type : 'default';

    return (
        <button className={["MyPageButton", `MyPageButton_${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    );
}

MyPageButton.defaultProps = {
    text : 'MyPageButton',
    type : 'default',
    onClick : () => {
        alert('MyPageButton 이 눌렸습니다!');
    }
};

export default MyPageButton;
