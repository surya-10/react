import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

function Home(){
  return (
    <div class="container">
      <div class="div" id='first'>
        <h3>FREE</h3>
        <p class="price">$0<span class="span">/month</span></p>
        <div class="option">
          <div class="user">
          <i class="fa-sharp fa-solid fa-check"></i>
          <span> Single User</span>
          </div>
          <div class="storage">
          <i class="fa-sharp fa-solid fa-check"></i>
          <span> 5GB Storage</span>
          </div>
          <div class="project">
          <i class="fa-sharp fa-solid fa-check"></i>
            <span> Unlimited Public Projects</span>
          </div>
          <div class="community">
          <i class="fa-sharp fa-solid fa-check"></i>
            <span> Community Access</span>
          </div>
          <div class="private same">
          <i class="fa-solid fa-xmark"></i>
          <span> Unlimited Private Projects</span>
          </div>
          <div class="support same">
          <i class="fa-solid fa-xmark"></i>
          <span> Dedicated Phone Support</span>
          </div>
          <div class="sub-domain same">
          <i class="fa-solid fa-xmark"></i>
            <span> Free Subdomain</span>
          </div>
          <div class="report same">
          <i class="fa-solid fa-xmark"></i>
            <span> Monthly Status Reports</span>
          </div>
          <div class="btn">
            <button class="button">BUTTON</button>
          </div>
        </div>
        </div>
        <div class="div" id='second'>
        <h3>PLUS</h3>
        <p class="price">$9<span class="span">/month</span></p>
        <div class="option">
          <div class="user">
          <i class="fa-sharp fa-solid fa-check"></i>
          <span class="highlight"> 5 Users</span>
          </div>
          <div class="storage">
          <i class="fa-sharp fa-solid fa-check"></i>
          <span> 50GB Storage</span>
          </div>
          <div class="project">
          <i class="fa-sharp fa-solid fa-check"></i>
            <span> Unlimited Public Projects</span>
          </div>
          <div class="community">
          <i class="fa-sharp fa-solid fa-check"></i>
            <span> Community Access</span>
          </div>
          <div class="private">
          <i class="fa-sharp fa-solid fa-check"></i>
          <span> Unlimited Private Projects</span>
          </div>
          <div class="support">
          <i class="fa-sharp fa-solid fa-check"></i>
          <span> Dedicated Phone Support</span>
          </div>
          <div class="sub-domain">
          <i class="fa-sharp fa-solid fa-check"></i>
            <span> Free Subdomain</span>
          </div>
          <div class="report same">
          <i class="fa-solid fa-xmark"></i>
            <span> Monthly Status Reports</span>
          </div>
          <div class="btn">
            <button class="button">BUTTON</button>
          </div>
        </div>
      </div>

    <div class="div" id='third'>
        <h3>PRO</h3>
        <p class="price">$49<span class="span">/month</span></p>
        <div class="option">
          <div class="user">
          <i class="fa-sharp fa-solid fa-check"></i>
          <span class="highlight"> Unlimited Users</span>
          </div>
          <div class="storage">
          <i class="fa-sharp fa-solid fa-check"></i>
          <span> 150GB Storage</span>
          </div>
          <div class="project">
          <i class="fa-sharp fa-solid fa-check"></i>
            <span> Unlimited Public Projects</span>
          </div>
          <div class="community">
          <i class="fa-sharp fa-solid fa-check"></i>
            <span> Community Access</span>
          </div>
          <div class="private">
          <i class="fa-sharp fa-solid fa-check"></i>
          <span> Unlimited Private Projects</span>
          </div>
          <div class="support">
          <i class="fa-sharp fa-solid fa-check"></i>
          <span> Dedicated Phone Support</span>
          </div>
          <div class="sub-domain">
          <i class="fa-sharp fa-solid fa-check"></i>
            <span> <b>Unlimited</b> Free Subdomain</span>
          </div>
          <div class="report">
          <i class="fa-sharp fa-solid fa-check"></i>
            <span> Monthly Status Reports</span>
          </div>
          <div class="btn">
            <button class="button">BUTTON</button>
          </div>
        </div>
    </div>
    </div>
  )
}
