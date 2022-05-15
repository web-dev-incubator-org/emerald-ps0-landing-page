import NavbarSection from './sections/Navbar';
import MastheadSection from './sections/Masthead';
import BasicTextSection from './sections/BasicText';
import TeamSection from './sections/Team';
import './App.css';

const App = () => {

    const placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere maximus metus non rhoncus. Integer vehicula lacus risus, ut rutrum metus venenatis eget. Curabitur mollis felis tellus, at tempor diam vestibulum commodo.";

    return (
        <div className="App">
            <NavbarSection />
            <MastheadSection title="Eat, Code, Repeat" backgroundImage="" paragraph={ placeholderText } />
            <BasicTextSection title="Mission" backgroundImage="" paragraph={ placeholderText } />
            <TeamSection />
        </div>
    );
};

export default App;