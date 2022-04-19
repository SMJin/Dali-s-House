import "./css/Tag.css"

const NameTag = ({name, amount}) => {

    return (
        <div className="Tag">
            {name} <span className='Tag_amount'>{amount}</span> 명
        </div>
    );
}

export default NameTag;