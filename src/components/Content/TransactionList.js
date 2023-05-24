import React from 'react'
import { IoMdWater, IoMdCheckbox, IoMdClipboard, IoMdStar, IoMdNotifications } from "react-icons/io";

export default function TransactionList() {
    const today = [
        {
        name : "Water Bill",
        status : "Unsuccessfully",
        price : "$230",
    },
    ];
    const yesterday = [
        {
        name : "Income: Salary Oct",
        status : "panding",
        price : "$230",
    },
    {
        name : "Electric Bill",
        status : "success",
        price : "$230",
    },
    {
        name : "Income : Jane transfers",
        status : "Unsuccessfully",
        price : "$230",
    },
    {
        name : "Internet Bill",
        status : "warning",
        price : "$230",
    },
    ];

    const bgColors = (status) => {
        switch (status) {
            case 'success': 
            return 'bg-blue-500'

            case 'panding': 
            return 'bg-teal-400'

            case 'warning': 
            return 'bg-yellow-500'

            default : 
            return 'bg-red-500';
        }
    }
  
    const icons = (status) => {
        switch (status) {
            case 'success': 
            return <IoMdCheckbox color='white'/>

            case 'panding': 
            return <IoMdClipboard color='white'/>

            case 'warning': 
            return <IoMdStar color='white'/>

            default : 
            return <IoMdNotifications color='white'/>;
        }
    }
    return (
    <section>
    <div className='mt-11'>
        <h3 >Today</h3>
        <div>
            {today.map((val,index)=>{
                return <div className="flex flex-row items-center border-b-gray-200 py-3 ">
                    <div key={index} className='h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3 '>
                        <IoMdWater color="white"/>
                         </div>
                         <div className='flex-1'> 
                         <div className='text-lg font-medium'>{val.name}</div>
                            <div className='text-sm'>{val.status}</div>
                         </div>
                         <div className='text-red-600'>{val.price}</div>
                     </div>
            }
             )}
        </div>
    </div>
    <div className='mt-11'>
        <h3 >yesterday</h3>
        <div>
            {yesterday.map((val, index)=>{
                return ( 
                <div key={index} className="flex flex-row items-center border-b-gray-200 py-3 ">
                    <div 
                    className={`h-10 w-10 rounded-lg flex items-center justify-center mr-3 ${bgColors(val.status )} `} 
                    >
                        {icons(val.status)}
                         </div>
                         <div className='flex-1'> 
                            <div className='text-lg font-medium'>{val.name}</div> 
                            <div className='text-sm'>{val.status}</div>
                         </div>
                         <div className='text-red-600'>{val.price}</div>
                     </div>
                )
            }
             )}
        </div>
    </div>
    
            
    </section>
    );
}

