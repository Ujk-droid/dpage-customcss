
import "@/app/styles/About.css"   
import React from 'react'
import Image from "next/image"
const About = () => {
  return (
    <div>
       <div className="slider-container">
 <div className="slider">
   <Image src="/d12.jpeg" alt="Image " height={300} width={500} />
   <Image src="/dl1.jpeg" alt="Image 2" height={300} width={500}/>
   <Image src="/dl2.jpeg" alt="Image 3" height={300} width={500}/>
   <Image src="/dl4.jpeg" alt="Image 4" height={300} width={500}/>
   <Image src="/dl13.jpeg" alt="Image 5" height={300} width={500}/>
   <Image src="/dl7.jpeg" alt="Image 6" height={300} width={500}/>
   <Image src="/dl9.jpg" alt="Image 7" height={300} width={500}/>
   <Image src="/dl10.webp" alt="Image 8"height={300} width={500}/>
   <Image src="/dl8.jpg" alt="Image 9"height={300} width={500}/>
   <Image src="/dl3.webp" alt="Image 10" height={300} width={500}/>
 </div>
</div>
    </div>
  )
}

export default About


