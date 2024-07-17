function Todoitem(props){
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
    function handledelete(removeid){
        var temp = activityArr.filter(function(item){
            if(item.id === removeid) {
                return false
            }else{
                return true
            }
        })
        setactivityArr(temp)
    }
    return(
        <div className="flex justify-between">
        <p>{props.index}.{props.activity}</p>
        <button className="text-red-400" onClick={()=>handledelete(props.id)}>Delete</button>
        </div>
    )
}

export default Todoitem