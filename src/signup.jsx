import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(props) {
  const navigate =useNavigate()
  const user = props.user
  const setuser =props.setuser
  const [euser,setesuser] = useState("")
  const [epass,setepass] = useState("")
  const [rpass,setrpass] = useState("")
  function handleuser(evt){
    setesuser(evt.target.value)
  }
  function handlepass(evt){
    setepass(evt.target.value)
  }
  function adduser(){
    setuser([...user,{username:euser,password:epass}])
    if(epass !== rpass) {
      alert("Enter proper password")
    }
    navigate("/")
  }
  function handlerpass(evt){
    setrpass(evt.target.value)
  }
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey hii</h1>
        <p>You can Signup here :)</p>
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="border border-black rounded-md bg-transparent w-52 p-1"
            placeholder="Username"
            onChange={handleuser}
            value={euser}
          />
          <input
            type="text"
            className="border border-black rounded-md bg-transparent w-52 p-1"
            placeholder="Password"
            onChange={handlepass}
            value={epass}
          />
          <input
            type="text"
            className="border border-black rounded-md bg-transparent w-52 p-1"
            placeholder="Confirm Password"
            onChange={handlerpass}
            value={rpass}
          />
          <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={adduser}>Sign Up</button>
          <p>
            Alerdy have an account?{" "}
            <Link to={"/"} className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
