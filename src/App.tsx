import { HR } from "./shared/HR/hr";
import { Ticker } from "./shared/Ticker/ticker";

function App() {
  return (
    <div>
      <Ticker speed={100} from="right">
        <p style={{ fontSize: "3rem" }}>BACKEND.</p>
        <p style={{ fontSize: "3rem" }}>FRONTEND.</p>
        <p style={{ fontSize: "3rem" }}>DEVOPS.</p>
        <p style={{ fontSize: "3rem" }}>DESIGN.</p>
        <p style={{ fontSize: "3rem" }}>DATABASE.</p>
        <p style={{ fontSize: "3rem" }}>ANALIST.</p>
      </Ticker>

      <Ticker speed={100} from="left">
        <p style={{ fontSize: "3rem" }}>BACKEND.</p>
        <p style={{ fontSize: "3rem" }}>FRONTEND.</p>
        <p style={{ fontSize: "3rem" }}>DEVOPS.</p>
        <p style={{ fontSize: "3rem" }}>DESIGN.</p>
        <p style={{ fontSize: "3rem" }}>DATABASE.</p>
        <p style={{ fontSize: "3rem" }}>ANALIST.</p>
      </Ticker>
      <HR from="center" />
    </div>
  );
}

export default App;
