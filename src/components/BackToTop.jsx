import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=> {
            if(window.scrollY>100){
                setBackToTop(true)
                
            }else{
                setBackToTop(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return <div>{backToTop && (
    <button className='topBtn' onClick={scrollUp}><i className="fa-solid fa-chevron-up"></i></button>
  )}</div>;
}
