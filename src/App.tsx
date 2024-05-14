import SpellCardPane from "./components/pane";
import Interface from "./Interface";

function App() {
  return (
    <div className="flex">
      <div className="config-pane">
        <SpellCardPane />
      </div>
      <Interface />
    </div>
  );
}

export default App;
