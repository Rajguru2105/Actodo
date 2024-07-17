import Header from "./components/header";
import Card from "./components/card";
import Todocontainer from "./components/todocontainer";
import { useLocation } from "react-router-dom";
function App() {
  const data = useLocation()
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header username={data.state.user}/>
        <div className="flex justify-between my-5 gap-7 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Mumbai"} />
          <Card
            bgcolor={"#FD6663"}
            title={"20 December"}
            subtitle={"4:03:24"}
          />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>
        <Todocontainer />
      </div>
    </div>
  );
}

export default App;
