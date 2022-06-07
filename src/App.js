import "./App.css";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import BreakLength from "./BreakLength";
import SessionLength from "./SessionLength";
import Timer from "./Session";
import TimerControl from "./TimerControl";
import Author from "./Author";

function App() {
  return (
    <AppContainer>
      <AppHeader />
      <BreakLength />
      <SessionLength />
      <Timer />
      <TimerControl />
      <Author />
    </AppContainer>
  );
}

export default App;
