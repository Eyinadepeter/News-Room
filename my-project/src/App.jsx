import "./index.css"
import Header from "./Header"
import Sidebar from "./sidebar"
import Last from "./last-div"

function App() {

  return (
    <div className="news">
        <Header/>
        <div className="container">
          <img src="./src/assets/images/image-web-3-mobile.jpg" alt="" className="mx-[30px] w-[85%] lg:hidden md:hidden" />
          <img src="./src/assets/images/image-web-3-desktop.jpg" alt="" className="hidden lg:flex md:flex px-8 w-[79%]" />
          
          <div className="words">
            <h1 className="text-[50px] font-primary font-black px-7 py-6 lg:w-80 md:w-80 ">The Bright Future of  Web 3.0 ?</h1>
            </div>
            <div  className="text-[15px] font-primary px-7 py-[-10px] text-left lg:w-[20%]">
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
           <button className="bg-red-600 text-[15px] w-[150px] h-[30px] text-center text-white font-san my-5 tracking-[2px]" type="button">READ MORE</button>
          </div>

        </div>
        <div className="sidebar my-9">
          <Sidebar/>
        </div>
        <div className="footer">
          <Last/>
        </div>
    </div>
    
  ) 
}

export default App
