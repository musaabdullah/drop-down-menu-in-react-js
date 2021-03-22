import style from './style.module.css';
import './app.css';
import * as Ticon from 'react-icons/ti'; 
function App() {
  return (
    <div className="App">
        <ul className="nav">
          <li className="nav__item"><a href="#">Home</a></li>
          <li className="nav__item"><a href="#"><span>Products</span><span> <Ticon.TiArrowSortedDown/></span></a>
          <ul>
            <li className="nav__subitem"><a href="#">Laptop</a></li>
            <li className="nav__subitem"><a href="#">Pc</a></li>
          </ul>
          </li>
          <li className="nav__item"><a href="#"><span>Services</span><span><Ticon.TiArrowSortedDown/></span></a>
           <ul>
             <li className="nav__subitem"><a href="#">Work</a></li>
           </ul>
          </li>
          <li className="nav__item"><a href="#"><span>About</span><span><Ticon.TiArrowSortedDown/></span></a>
          <ul>
            <li className="nav__subitem"><a href="#">Padding</a></li>
            <li className="nav__subitem"><a href="#">Margin</a></li>
            <li className="nav__subitem"><a href="#">decoration</a></li>
            <li className="nav__subitem"><a href="#">width</a></li>
          </ul>
          </li>
        </ul>
    </div>
  );
}

export default App;
