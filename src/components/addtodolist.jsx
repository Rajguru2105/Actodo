import Todoitem from "./todoitem";
function AddTodoList(props) {
  const activityArr = props.activityArr
  const setactivityArr = props.setactivityArr
  return (
    <div className="bg-[#BDB4EA] border rounded-md flex-grow p-2">
      <h1 className="text-2xl font-medium">Today's Activity</h1>
      {activityArr.length === 0?<p>You haven't added any activity yet</p>:""}
      {
        activityArr.map(function(item,index){
          return <Todoitem id={item.id} index={index+1} activity={item.activity} activityArr={activityArr} setactivityArr={setactivityArr}/>
        })
      }
    </div>
  );
}

export default AddTodoList;
