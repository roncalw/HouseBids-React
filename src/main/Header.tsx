import { Link } from "react-router-dom";
import logo from "./GloboLogo.png";

type Args = {
  subtitle: string;
};

const Header = ({ subtitle }: Args) => {
  return (
    <header className="row mb-4">
      <div className="col-2">
      <a href='https://www.codefest.com'>
        <img src={logo} className="logo" alt="logo" />
      </a>
      </div>
      <div className="col-10 mt-5">
        <span className="subtitle"> {subtitle}</span><br/> 
        Welcome to this example application!<br/>
        This app was built using React for the frontend and ASP.NET Core for the backend APIs.<br/>
        Click 
        <Link to={`/reactdoc`}>
         here
        </Link>
         for documentation on how this app was built!      
      </div>
    </header>
  );
};

export default Header;
