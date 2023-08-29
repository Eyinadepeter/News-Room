const Last = () => {
    return ( 
        <div className="fotter">
            <div className="first relative">
                <div className="image w-[30%] mx-5 relative">
                    <img src="./src/assets/images/image-retro-pcs.jpg" alt="" />
                </div>
                <div className="para absolute top-0 left-40 ">
                    <h1 className="text-[30px] font-primary font-black text-gray-500">
                    01
                    </h1>
                    <h2 className="text-[20px] font-primary font-black ">
                    Reviving Retro PCs
                    </h2>
                    <p className="text-[14px] w-[88%] py-3 text-gray-700">
                    What happens when old PCs are given modern upgrades?
                    </p>
                </div>
            </div>
            <div className="second">
                <div className="image w-[30%] mx-5 my-10">
                    <img src="./src/assets/images/image-top-laptops.jpg" alt="" />
                </div>
                <div className="para absolute top-[250%] left-40">
                    <h1 className="text-[30px] font-primary font-black text-gray-500">
                        02
                    </h1>
                    <h2  className="text-[20px] font-primary font-black">
                    Top 10 Laptops of 2022
                    </h2>
                    <p className="text-[14px] w-[88%] py-3 text-gray-700">
                    Our best picks for various needs and budgets. 
                    </p>
                </div>
            </div>
            <div className="third">
                <div className="image w-[30%] mx-5 my-10">
                    <img src="./src/assets/images/image-gaming-growth.jpg" alt="" />
                </div>
                <div className="para absolute top-[278%] left-40">
                    <h1 className="text-[30px] font-primary font-black text-gray-500">
                        03
                    </h1>
                    <h2  className="text-[20px] font-primary font-black">
                    The Growth of Gaming
                    </h2>
                    <p className="text-[14px] w-[88%] py-3 text-gray-700">
                    How the pandemic has sparked fresh opportunities.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Last;