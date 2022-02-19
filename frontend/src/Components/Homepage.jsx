import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Homepage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handlechange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email == "prasad@gmail.com" && password == "Masai") {
      navigate("dashboard");
    } else {
      alert("invalid Credentials");
      navigate("/");
    }
  };

  return (
    <>
      <h1>Company Employee Records</h1>
      <hr />
      <div>
        <h3> Employer Login </h3>
        <form className="loginform">
          <input
            type="email"
            placeholder="  Enter Your Email"
            name="email"
            // value=""
            onChange={handlechange}
          />

          <input
            type="password"
            placeholder="  Enter Your Password"
            name="password"
            // value=""
            onChange={handlechange}
          />

          <input type="submit" value="Login" onClick={handleSumbit} />
        </form>
      </div>
    </>
  );
};
