
import './App.css';


function Navbar(){
  return(
    <header>
        <nav className="navbar">


            <span className="logo-text">

                <p className="p">Daily</p>
                <p className="pp">Garm</p>
            </span>

            <div className="nav-links">
                <ul>
                    <li> <a href="home">home</a> </li>
                    <li> <a href="about">about</a> </li>
                    <select name="option" id="option">
                        <option value="">Blog page</option>
                        <option value="">video</option>
                        <option value="">pics</option>
                    </select>
                    <li> <a href="contact">contact</a> </li>
                    <i className="fa fa-search"></i>
                   
                </ul>
            </div>
        </nav>
    </header>
  );
}


export default Navbar;
