import Card from "../components/card/Card"

const teamMembers = [
    {
        name: "iiMcDog",
        img: "https://via.placeholder.com/250",
        text: "Lorem ipsum dolor sit amet",
        alt: "iiMcDog's profile picture"
    },
    {
        name: "Electronoob",
        img: "https://via.placeholder.com/250",
        text: "Lorem ipsum dolor sit amet",
        alt: "Electronoob's profile picture"
    },
    {
        name: "Sane",
        img: "https://via.placeholder.com/250",
        text: "Lorem ipsum dolor sit amet",
        alt: "Sane's profile picture"
    }
]

const TeamSection = (props) => {
    return (
        <section className="team">
            <h2>Team</h2>
            { teamMembers.map((teamMember) => {
                return <Card img={ teamMember.img } alt={ teamMember.alt } title={ teamMember.name } text={ teamMember.text } />
            }) }
        </section>
    )
}

export default TeamSection