import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex min-h-screen ">
      <div
        className="w-4/6 bg-black/20 bg-blend-overlay bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(https://source.unsplash.com/1200x800?online-shop)`,
        }}
      ></div>
      <div className="w-4/12 p-16 ">
        <div className="flex flex-col items-start  gap-y-10 pt-16">
          <h3 className="text-3xl font-semibold">Create an account</h3>
          <div className="p-4 flex flex-col w-full gap-y-8">
            <input type="text" placeholder="Name" className="border-b px-5 py-1 outline-none" />
            <input type="text" placeholder="Username" className="border-b px-5 py-1 outline-none" />
            <input type="text" placeholder="Email" className="border-b px-5 py-1 outline-none" />
            <input type="password" placeholder="Password" className="border-b px-5 py-1 outline-none" />
          </div>
          <div className="flex flex-col w-full gap-y-3">
            <button className="w-full py-3 rounded-md bg-red-500 text-white ">Create Account</button>
            <p className="text-sm self-start">
              Already have account?{" "}
              <Link to={"/login"} className="underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
