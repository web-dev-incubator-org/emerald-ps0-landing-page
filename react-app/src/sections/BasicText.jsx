const BasicTextSection = (props) => {

    const backgroundStyles = {
        backgroundImage: "url(" + props.backgroundImage + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    };

    return (
        <section className="basic-text" style={ backgroundStyles }>
            <h2>{ props.title }</h2>
            <p>{ props.paragraph }</p>
        </section>
    );
};

export default BasicTextSection;