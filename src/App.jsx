/* eslint-disable react/prop-types */
import './App.css'
import { react } from "react";

function App(){
const Free = {
  type : "FREE",
  type1 : "$0/month",
  User:{
    value:"single user",
    style:"abled",
  },
  Storage:{
    value:"50GB storage",
    style:"abled",
  },
  Projects:{
    value:"Unlimited Public Projects",
    style:"abled",
  },
  Access:{
    value:"Community Access",
    style:"abled",
  },
  Project:{
    value:"Unlimited Private Projects",
    style:"disabled",
  },
  Support:{
    value:"Dedicated Phone Support",
    style:"disabled",
  },
  Domain:{
    value:"Free Subdomain",
    style:"disabled",
  },
  Reports:{
    value:"Monthly Status Reports",
    style : "disabled",
  },
};
const Plus = {
  type : "PLUS",
  type1 :"$9/month",
  User:{
    value:"5 user",
    style:"abled",
  },
  Storage:{
    value:"50GB storage",
    style:"abled",
  },
  Projects:{
    value:"Unlimited Public Projects",
    style:"abled",
  },
  Access:{
    value:"Community Access",
    style:"abled",
  },
  Project:{
    value:"Unlimited Private Projects",
    style:"abled",
  },
  Support:{
    value:"Dedicated Phone Support",
    style:"abled",
  },
  Domain:{
    value:"Free Subdomain",
    style:"abled",
  },
  Reports:{
    value:"Monthly Status Reports",
    style : "disabled",
  },
};
const Pro = {
  type : "PRO",
  type1 : "$49/month",
  User:{
    value:"Unlimited user",
    style:"abled",
  },
  Storage:{
    value:"50GB storage",
    style:"abled",
  },
  Projects:{
    value:"Unlimited Public Projects",
    style:"abled",
  },
  Access:{
    value:"Community Access",
    style:"abled",
  },
  Project:{
    value:"Unlimited Private Projects",
    style:"abled",
  },
  Support:{
    value:"Dedicated Phone Support",
    style:"abled",
  },
  Domain:{
    value:"Free Subdomain",
    style:"abled",
  },
  Reports:{
    value:"Monthly Status Reports",
    style : "abled",
  },
};

return(
  <>
  <Card model={Free} />
  <Card model={Plus} />
  <Card model={Pro} />
  </>
)
}
export default App

function Card( {model}){
  return(
    <div className='price-card'>
      <h3 className='type'>{model.type}</h3>
      <h6 className='type1'>{model.type1}</h6>
      <p className={model.User.style}>{model.User.value}</p>
      <p className={model.Storage.style}>{model.Storage.value}</p>
      <p className={model.Projects.style}>{model.Projects.value}</p>
      <p className={model.Access.style}>{model.Access.value}</p>
      <p className={model.Project.style}>{model.Project.value}</p>
      <p className={model.Support.style}>{model.Support.value}</p>
      <p className={model.Domain.style}>{model.Domain.value}</p>
      <p className={model.Reports.style}>{model.Reports.value}</p>
      <button>BUTTON</button>
    </div>
  );
}