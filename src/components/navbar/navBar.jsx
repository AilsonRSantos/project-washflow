import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-regular-svg-icons"
import {faUser} from "@fortawesome/free-regular-svg-icons"

const Navigation = () => {
  return (
      <div className="containerNav">
        <div className="tittle">
          <h1>DashBord</h1>
        </div>
        <div className="info">
          <div className="image">
          <FontAwesomeIcon icon={faBell}/>
          <div className="user">
          <FontAwesomeIcon icon={faUser}/>
          </div>
          </div>
          <div className="info-enterprise">
            <p>nome cliente</p>
            <p>nome empresa</p>
          </div>
        </div>
      </div>

  );
};

export default Navigation;
