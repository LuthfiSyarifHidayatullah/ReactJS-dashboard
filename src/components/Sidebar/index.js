import React from "react";
import Logo from "../../assets/logo.png";
import { BiHomeAlt, BiGridAlt, BiCreditCardAlt, BiUser, } from "react-icons/bi";
import { RiSettings5Line } from "react-icons/ri";

export default function Sidebar() {
    const menu = [
        {name: "Home", icon: <BiHomeAlt/> },
        {name: "Account", icon: <BiGridAlt/> },
        {name: "Cards", icon: <BiCreditCardAlt/> },
        {name: "Contact", icon: <BiUser/> },
        {name: "Loan Calculator", icon: <RiSettings5Line/> },
    ];

    const schedulePayments = ["Monthly Rent", "Food Payment", "Utility Bills"]

  return <div className="h-screen border-r border-gray-200 w-64 px-9 py-9 space-y-20">
    <div>
        <div className="flex flex-row items-center pt-6">
        <img src={Logo} alt="whez" className="w-9 h-9" />
        <div className="font-semibold ">Whez Banking</div>
    </div>
    </div>
    <div className="space-y-24"> 
    <div>
    <ul className="space-y-7 ">  
        <div className="mb-4 text-indigo-700">Menu</div>
        {menu.map ((val, index) => {
            return (
            <li key={index} className="flex flex-row items-center text-gray-500">
              <div className="mr-5">{val.icon}</div>  
              <div>{val.name}</div>    
                </li>
            );
        })}
    </ul>
    </div>
    <div>
        <div className="mb-7 text-indigo-700"  >Schedule Payments</div>
        <div className="space-y-7">
            {schedulePayments.map((val, index) => {
                return (
                <div className="flex items-center text-gray-400">
                 <div className="h-4 w-4 border border-indigo-500 mr-4 rounded-full" /> 
                 {val}
                    </div>
                );
            })}
        </div>
    </div>
    </div>
  </div>;
}
