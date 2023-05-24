import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { BiSearch, BiCreditCard, BiDoughnutChart, BiUser, BiHome, BiTrash} from 'react-icons/bi'
import { FiEdit2 } from "react-icons/fi";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

export default function ContentLeft() {
    const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
          >
            <div className='flex items-center px-4'>
            <BiTrash size={20} color='white'/>
            </div>
          </SwipeAction>
          <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
          >
            <div className='flex items-center px-4'>
            <FiEdit2 size={20} color='white'/>
            </div>
          </SwipeAction>
        </TrailingActions>
        
      );


  return (
    <section className=' content-left px-14 flex-1 pt-14 h-screen overflow-y-scroll '>
        <div className='border border-gray-300 rounded-lg w-full items-center flex py-3 px-3'>
            <BiSearch className='mr-2'/>

            <input type='{text}' className='flex-1' placeholder='search'/>
        </div>

    <h3 className='text-xl text-indigo-500 my-8'> Welcome Back Luthfi </h3>

    <div className=' flex flex-row space-x-4'>
        <Card
         bgColor={"bg-green-600"} 
         txtColor={"text-green-600"}
         icon={<BiCreditCard size={25} />}
         label={ 
         <span className='text-sm '> 
         Transfer Via <br/> Card Number
         </span>
         }
          />
          <Card
         bgColor={"bg-purple-600"} 
         txtColor={"text-purple-600"}
         icon={<BiDoughnutChart size={25} />}
         label={ 
         <span className='text-sm '> 
         Transfer to <br/> another bank
         </span>
         }
          />
          <Card
         bgColor={"bg-orange-600"} 
         txtColor={"text-orange-600"}
         icon={<BiUser size={25} />}
         label={ 
         <span className='text-sm '> 
         Transfer to <br/>the same bank
         </span>
         }
          />
          <Card
         bgColor={"bg-indigo-600"} 
         txtColor={"text-indigo-600"}
         icon={<BiHome size={25} />}
         label={ 
         <span className='text-sm '> 
         Transfer to <br/> another bank
         </span>
         }
          /> 
    </div>
         

    <div className='mt-10'>
        { Array.from(Array(8)).map((_,index) =>  <div key={index} className='rounded-2xl bg-indigo-700 mb-4'>
    <SwipeableList threshold={0.9} type={type.IOS} >
  <SwipeableListItem trailingActions={trailingActions()}
  >
    <div className='bg-white p-4 rounded-xl border border-gray-200 w-full flex '> 
         <img src={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
         alt='img'
         className='w-8 h-8 rounded-full object-cover mr-3' />
         <div className='text-sm'>
            <div className='text-gray-900'>Push</div>
            <div className='text-gray-400 text-xs'>1123343322</div> 
         </div>
    </div>
  </SwipeableListItem>
</SwipeableList>
</div> )}
</div>
    </section>

         
     )
}

function Card(props) {
    return (
        <div 
        className={`rounded-xl ${props.bgColor} bg-opacity-10 p-5 py-7 w-36 ${props.txtColor} space-y-4 `} 
        >
           <div> {props.icon} </div>
           <div> {props.label} </div>
        </div>
    );
}