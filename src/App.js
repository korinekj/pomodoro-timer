import "./App.css";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import BreakLength from "./BreakLength";
import SessionLength from "./SessionLength";
import Timer from "./Session";

function App() {
  return (
    <AppContainer>
      <AppHeader />
      <BreakLength />
      <SessionLength />
      <Timer />
    </AppContainer>
  );
}

export default App;
