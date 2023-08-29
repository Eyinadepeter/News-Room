const Sidebar = () => {
    return ( 
       <div className="header bg-slate-900 text-white px-5 py-3 w-[87%] mx-5">
        <h1 className="text-4xl text-yellow-500 font-primary font-extrabold">New</h1>
        <div className="first py-8">
            <h1 className="font-bold text-xl">Hydrogen VS Electric Cars</h1>
            <p className="text-s py-4">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className="line w-[98%] h-[1px] bg-white"></div>
        <div className="second  py-8">
            <h1 className="font-bold text-xl">The Downsides of AI Artistry </h1>
            <p className="text-s py-4">What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <div className="line w-[98%] h-[1px] bg-white"></div>
        <div className="third py-8" >
            <h1 className="font-bold text-xl">Is VC Funding Drying Up? </h1>
            <p className="text-s py-4">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
       </div>
     );
}
 
export default Sidebar;