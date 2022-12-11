import logo from "./logo.svg";
import "./App.css";
/// Links
/// Portfolio
// Home
// About Me
// Resume
// Contact

//Functions Javascript
//Display is HTML
//Style is CSS

///Tailwindcss is a css libary that has classes behind them to help you style your website

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-32 bg-amber-700">
        <div className="text-yellow-500 text-7xl absolute top-6 left-7 font-serif">
          Brian Lu
        </div>
        <div className="flex flex-row gap-x-6 cursor-pointer absolute top-[67px] border-solid border-b-2 right-5 text-lime-500 font-bold">
          <div className="hover:text-lime-900 "> Home</div>
          <div className="hover:text-lime-900 ">About Me</div>
          <div className="hover:text-lime-900 ">Portfolio</div>
          <div className="hover:text-lime-900 ">Resume</div>
          <div className="hover:text-lime-900 ">Contact </div>
        </div>
      </div>
      <div className="flex flex-row mt-20 bg-amber-200 py-10">
        <div className="flex flex-col text-center w-1/2 leading-10 gap-y-10">
          <div className="font-serif font-bold text-4xl underline">
            Who Am I?
          </div>
          <div className="font-serif font-bold text-xl">My name is Brian</div>
          <div> I'm a freshman at Stuyvesant</div>
        </div>
        <img
          className="w-1/3"
          alt=""
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        ></img>
      </div>
    </div>
  );
}

export default App;
