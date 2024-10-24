import About from "./components/About";
import Contact from "./components/Contact";
import Event from "./components/Event";
import Friends from "./components/Friends";
import Header from "./components/Header";
import Home from "./components/Home";
import RSVP from "./components/RSVP";
import Story from "./components/Story";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Home />
        <About />
        <Story />
        <Friends />
        <Event />
        <RSVP />
        <Contact />
      </div>
    </>
  );
}

export default App;
