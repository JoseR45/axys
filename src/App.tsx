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

       <Text value="Masasdasdasdasdasdasda" size="10px" font="family" color="red" />
     </div>
  )
}

export default App;
