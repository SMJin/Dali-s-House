import './css/MyHeader.css';
import MyButton from "./MyButton";

const MyHeader = () => {
    return (
        <header>
            <div>
                <MyButton
                text={"달리네 집"}
                type={"head_logo"}
                />
            </div>

            <div>
                <MyButton
                text={"봉사활동"}
                type={"head_menus"}
                />
            </div>
            <div>
                <MyButton
                text={"입양연결"}
                type={"head_menus"}
                />
            </div>
            <div>
                <MyButton
                text={"커뮤니티"}
                type={"head_menus"}
                />
            </div>
            <div>
                <MyButton
                text={"LOGIN"}
                type={"head_login"}
                />
            </div>
            <div>
                <MyButton
                text={"JOIN"}
                type={"head_login"}
                />
            </div>
        </header>
    );
}

export default MyHeader;