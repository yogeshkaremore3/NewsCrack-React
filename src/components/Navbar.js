// import PropTypes from 'prop-types'
import React,{useState}  from "react";
import { useNavigation } from "react-router-dom";

import { Link } from "react-router-dom";



 const Navbar=(props)=> {

  // const navigate = useNavigation()


  const [country, setcountry] = useState('')
  const upclicked=(event)=>{


    props.setCountry(event.target.value);
    // navigate(`http://localhost:3000?a=${country}`)


      
    

  }

    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsCrack
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
               <li>
              <select className="form-select bg-dark text-white" value={country} onChange={(e)=>{upclicked(e);setcountry(e.target.value)}} style={{backgroundColor:'white'}} aria-label="Default select example">
              <option selected value="in">India</option>
              <option value="us">United States</option>
              <option value="gb">United Kingdom</option>
              <option value="jp">Japan</option>
              <option value="ru">Russia</option>
              <option value="ua">Ukraine</option>
              <option value="sg">Singapore</option>
              <option value="za">South Africa</option>
              <option value="ar">Argentina</option>
              <option value="gr">Greece</option>
              <option value="nl">Netherlands</option>
              <option value="au">Australia</option>
              <option value="hk">Hong Kong</option>
              <option value="nz">New Zealand</option>
              <option value="kr">South Korea</option>
              <option value="at">Austria</option>
              <option value="hu">Hungary</option>
              <option value="ng">Nigeria</option>
              <option value="se">Sweden</option>
              <option value="be">Belgium</option>
              <option value="no">Norway</option>
              <option value="ch">Switzerland</option>
              <option value="br">Brazil</option>
              <option value="id">Indonesia</option>
              <option value="ph">Philippines</option>
              <option value="tw">Taiwan</option>
              <option value="bg">Bulgaria</option>
              <option value="ie">Ireland</option>
              <option value="pl">Poland</option>
              <option value="th">Thailand</option>
              <option value="ca">Canada</option>
              <option value="il">Israel</option>
              <option value="pt">Portugal</option>
              <option value="tr">Turkey</option>
              <option value="cn">China</option>
              <option value="it">Italy</option>
              <option value="ro">Romania</option>
              <option value="ae">UAE</option>
              <option value="co">Colombia</option>
              <option value="cu">Cuba</option>
              <option value="lv">Latvia</option>
              <option value="sa">Saudi Arabia</option>
              <option value="cz">Czech Republic</option>
              <option value="lt">Lithuania</option>
              <option value="rs">Serbia</option>
              <option value="eg">Egypt</option>
              <option value="my">Malaysia</option>
              <option value="ve">Venuzuela</option>
              <option value="fr">France</option>
              <option value="mx">Mexico</option>
              <option value="sk">Slovakia</option>
              <option value="de">Germany</option>
              <option value="ma">Morocco</option>
              <option value="si">Slovenia</option>
             </select>
             </li>
           
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/General">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }


export default Navbar;
