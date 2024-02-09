import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
  <Detail1
  head="FREE"
  dollar="$0"
  super="/month"
  list1="Single User"
  list2="5GB Storage"
  list3="Unlimited Public Projects"
  list4="Community Access"
  list5="Unlimited Private Project"
  list6="Dedicated Phone Support"
  list7="Free Subdomain"
  list8="Monthly Status Reports"
  access1="✔️" yes1="1"
  access2="✔️" yes2="1"
  access3="✔️" yes3="1"
  access4="✔️" yes4="1"
  access5="❌" yes5="0.5"
  access6="❌" yes6="0.5"
  access7="❌" yes7="0.5"
  access8="❌" yes8="0.5"
  clr="black"
  />

   <Detail1
  head="PLUS"
  dollar="$9"
  super="/month"
  list1="5 Users"
  list2="50GB Storage"
  list3="Unlimited Public Projects"
  list4="Community Access"
  list5="Unlimited Private Projects"
  list6="Dedicated Phone Support"
  list7="Free Subdomain"
  list8="Monthly Status Reports"
  access1="✔️"yes1="1"
  access2="✔️"yes2="1"
  access3="✔️"yes3="1"
  access4="✔️"yes4="1"
  access5="✔️"yes5="1"
  access6="✔️"yes6="1"
  access7="✔️"yes7="1"
  access8="❌"yes8="0.5"
  clr="black"/>
  <Detail1
  head="PRO"
  dollar="$49"
  super="/month"
  list1="Unlimited Users"
  list2="150GB Storage"
  list3="Unlimited Public Projects"
  list4="Community Access"
  list5="Unlimited Private Projects"
  list6="Dedicated Phone Support"
  list7="Unlimited Free Subdomains"
  list8="Monthly Status Reports"
  access1="✔️"yes1="1"
  access2="✔️"yes2="1"
  access3="✔️"yes3="1"
  access4="✔️"yes4="1"
  access5="✔️"yes5="1"
  access6="✔️"yes6="1"
  access7="✔️"yes7="1"
  access8="✔️"yes8="1"
  clr="black"/>
  </div>
  </div>
  );
}

export default App;
function Detail1(props){
  return(
<div className="card">
  <p className="head">{props.head}</p>
  <p><span className="dollar">{props.dollar}</span>{props.super}</p>
  <hr></hr>
  <ul>
    <li style={{opacity:props.yes1}}><span>{props.access1}</span>{props.list1}</li>
    <li style={{opacity:props.yes2}}><span>{props.access2}</span>{props.list2}</li>
    <li style={{opacity:props.yes3}}><span>{props.access3}</span>{props.list3}</li>
    <li style={{opacity:props.yes4}}><span>{props.access4}</span>{props.list4}</li>
    <li style={{opacity:props.yes5}}><span>{props.access5}</span>{props.list5}</li>
    <li style={{opacity:props.yes6}}><span>{props.access6}</span>{props.list6}</li>
    <li style={{opacity:props.yes7}}><span >{props.access7}</span>{props.list7}</li>
    <li style={{opacity:props.yes8}}><span >{props.access8}</span>{props.list8}</li>
  </ul>
  <input type="button" className='btn' value="BUTTON"></input>
</div>
  ) ;
}
