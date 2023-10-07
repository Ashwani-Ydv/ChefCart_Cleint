import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { useNavigate, useHistory } from "react-router-dom";

const registerUser = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    // You can set up the user's display name here if you wish
    // await user.updateProfile({ displayName: name });
    // Redirect or handle successful registration
  } catch (err) {
    setError(err.message);
  }
};

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const navigate = useNavigation();
  const history = useNavigate();

  const handleSubmit = (e) => {
    if (!values.name || !values.email || !values.password) {
      setError("Fill all fields");
      return;
    }
    setError("");
    setSubmitButtonDisable(true);
    console.log("values", values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisable(false);
        const user = res.user;
        console.log(user);
        await updateProfile(user, {
          displayName: values.name,
        });
        history("/");
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        console.log(err.message);
        setError(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-96 bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-md"
              // value={name}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
              // value={email}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-md"
              // value={password}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <div className="mt-5">
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <Link>
              <button
                type="submit"
                // disabled={setSubmitButtonDisable}
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 disabled:bg-slate-500"
                onClick={handleSubmit}
              >
                Register
              </button>
            </Link>
          </div>
        </form>
        <div className="mt-5 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
