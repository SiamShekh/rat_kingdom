import mountain_images from "../../assets/images/mountain_shadow.webp";

const Login = () => {
  return (
    <div className="max-h-screen h-screen w-full relative bg-black">
      <img
        src={mountain_images}
        alt="mountain"
        draggable={false}
        className="w-full h-full absolute top-0 left-0 object-cover z-0"
      />
      <div className="absolute z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <p className="text-5xl rounded-full border p-5 font-montserrat font-bold border-t-0">
          WELCOME
        </p>
        <form className="mt-6 flex flex-col gap-4">

          <label className="input input-bordered bg-black/40 backdrop-blur-md text-white flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>

          <label className="input input-bordered bg-black/40 backdrop-blur-md text-white flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" value="password" />
          </label>
          <button className="bg-black/40 backdrop-blur-md text-white p-2 font-montserrat rounded-md text-2xl" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
