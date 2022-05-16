const MastheadSection = (props) => {

    const backgroundStyles = {
        backgroundImage: "url(" + props.backgroundImage + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };

    return (
        <section className="masthead" style={ backgroundStyles }>
            <h1>{ props.title }</h1>
            <p>{ props.paragraph }</p>
        </section>
    );
};

export default MastheadSection;