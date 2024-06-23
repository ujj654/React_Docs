/* eslint-disable no-unused-vars */
import React from 'react';
import Cards from './Cards' ;
import { useRef } from 'react';

function Foreground() {
    const ref = useRef(null);
       const data =[
        {
        desc: "This is the  background color of the card that is used for card1.", 
        filesize: ".9mb", 
        close: false, 
        tag:{isOpen: true, tagTitle: "Download Now", tagColor:"green"},
        },
        {
        desc: "This is the  background color of the card that is used for card2.", 
        filesize: ".9mb", 
        close: false, 
        tag:{isOpen: true, tagTitle: "Upload Now", tagColor:"blue"},
        },
        {
        desc: "This is the  background color of the card that is used for card3.", 
        filesize: ".9mb", 
        close: false, 
        tag:{isOpen: true, tagTitle: "Download Now", tagColor:"green"},
        },
        {
        desc: "This is the  background color of the card that is used for card4.", 
        filesize: ".9mb", 
        close: false, 
        tag:{isOpen: true, tagTitle: "Upload Now", tagColor:"blue"},
            },
        {
        desc: "This is the  background color of the card that is used for card5.", 
        filesize: ".9mb", 
        close: false, 
        tag:{isOpen: true, tagTitle: "Download Now", tagColor:"green"},
                },
       ];

  return (
    
   <div ref={ref} className=' fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
   {data.map ((item,index)=>( 
    // eslint-disable-next-line react/jsx-key
    <Cards data={item} reference={ref} />
   ))}
   </div>
  )
}

export default Foreground