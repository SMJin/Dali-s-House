import './Adoption.css';

const Adoption = () => {

    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";

    return (
        <div>
            <h1>입양 페이지</h1>
            <img className="tmpPuppy" src={process.env.PUBLIC_URL + `/assets/puppy.jpg`}  alt={"puppy"}/>
        </div>
    );
}

export default Adoption;