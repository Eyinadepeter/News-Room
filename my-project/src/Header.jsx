const Header = () => {
    return ( 
        <div className="header container flex flex-row justify-between">
            <h2 className="logo container text-[50px] px-7 font-primary font-black ">W.</h2>
            <ul className="hidden lg:flex md:flex flex-row justify-between space-x-9 py-7">
                <li>Home</li>
                <li>News</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
            <div className="hambugger py-8 px-5 lg:hidden md:hidden">
                <img src="./src/assets/images/icon-menu.svg" alt="hambugger"/>
            </div>
        </div>
     );
}
 
export default Header;