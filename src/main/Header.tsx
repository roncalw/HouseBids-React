import { Link } from "react-router-dom";
import logo from "./GloboLogo.png";

type Args = {
  subtitle: string;
};

const Header = ({ subtitle }: Args) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
      <a href='https://www.codefest.com'>
        <img src={logo} className="logo" alt="logo" />
      </a>
      </div>
      <div className="col-7 mt-5">
        <span className="subtitle"> {subtitle}</span><br/> 
        React app that shows a list of houses; click to edit or to add a bid.<br/>
        Click 
        <Link to={`/reactdoc`}>
         here
        </Link>
         for documentation!      
      </div>
    </header>
  );
};

export default Header;
