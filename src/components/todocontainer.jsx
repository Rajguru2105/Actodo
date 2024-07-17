import AddTodoform from "./addtodoform";
import AddTodoList from "./addtodolist";
import { useState } from "react";
function Todocontainer() {
  const [activityArr,setactivityArr] = useState([
    {
      id:1,
      activity:"Go for a walk"
    }
  ])
  return (
    <div>
      <div className="flex gap-10 flex-wrap">
        <AddTodoform activityArr={activityArr} setactivityArr={setactivityArr}/>
        <AddTodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
      </div>
    </div>
  );
}

export default Todocontainer;
