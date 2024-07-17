import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login(props) {
  const navigate = useNavigate();
  const [ruser, setruser] = useState(true);
  const [euser, setesuser] = useState("");
  const [epass, setepass] = useState("");
  const user = props.user;
  function Checkuser() {
    var usercheck = false;
    user.forEach(function (item) {
      if (item.username === euser && item.password === epass) {
        console.log("Login Succesful");
        usercheck = true;
        navigate("/Landing",{state:{user:euser}});
      }
    });
    if (usercheck === false) {
      console.log("Login Failed");
      setruser(false);
    }
  }
  function handleuser(evt) {
    setesuser(evt.target.value);
  }
  function handlepass(evt) {
    setepass(evt.target.value);
  }
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey hii</h1>
        {ruser ? 
          <p>I help you manage your activity after you login :)</p>
        :
          <p className="text-red-500">Please Signup Before you login</p>
        }
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="border border-black rounded-md bg-transparent w-52 p-1"
            placeholder="Username"
            value={euser}
            onChange={handleuser}
          />
          <input
            type="text"
            className="border border-black rounded-md bg-transparent w-52 p-1"
            placeholder="Password"
            value={epass}
            onChange={handlepass}
          />
          <button
            className="bg-[#8272DA] w-24 p-1 rounded-md"
            onClick={Checkuser}
          >
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link to={"Signup"} className="underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
