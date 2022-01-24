import { useState, useEffect } from "react";

export default function Scroll(){
    const [show, setShow] = useState('hidden');
    const onScroll=()=>{
        const windowTop = window.pageYOffset;
        if(windowTop >= 400){
          setShow('show');
        }
      }
    useEffect(()=>{
        window.addEventListener('scroll', function(){
          onScroll();
        })  
    });
    return show
}