import React from 'react'
import TransactionList from './TransactionList';
import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import  Visa  from "../../assets/visa.png";

export default function ContentRight() {
  return (
    <section className="w-96 bg-gray-200 rounded-tl-70px overflow-hidden px-5">
    <div className="pt-12 flex justify-end space-x-9 items-center">
  <GrNotification size={20} />
  <BiUser size={20}/>
  <img 
    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user"
    className="h-9 w-9 object-cover rounded-full"
  />
    </div>
    <div className="card mt-9"> 
    <div className="relative p-5 text-white">
      <div className="text-lg">Luthfi Syarif</div>
      <div className="mt-10 space-y-2">
      <div>Amazon Platinum</div>
      <div>4752 ... ... 9812</div>
      <div className="flex justify-between relative"> 
      <span>$2.445.33</span>
      <img src={Visa} alt="visa" className="h-4" />
      </div>
    </div>
    </div>
    </div>
    <button className="py-3 rounded border border-indigo-400 text-indigo-400 border-dashed w-full mt-10"> 
      Add New Card
    </button>
    <div>
        <TransactionList/>
    </div>
    </section>
  )
}
