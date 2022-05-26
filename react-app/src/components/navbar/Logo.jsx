import image from '../../assets/emerald.png'

const Logo = () => {
    return (
        <div className="flex-wrapper">
            <img src={ image } alt="Team Emerald" className="logo" />
            <h1>Team Emerald</h1>
        </div>
    );
};

export default Logo;