import Image1 from '../../public/as.jpg'
import Image from 'next/image'
export default function Hero()
{
    return(
        <div className="">
  <section className="about" id="about">


<div className="row-1 ">
  <div className="image">
      <Image src={Image1} style={{width:'50%',marginTop:'170px',marginLeft:'300px',position:'absolute', height:'60%'}} alt="about"/>
  </div>
  <div className="content">

<p className='md:text-white'>The process of finding optimal values for the specific parameters of a given system to fulfill all design requirements while considering the lowest possible cost is referred to as an optimization. Optimization problems can be found in all fields of science.

Conventional optimization algorithms Deterministic algorithms have some limitations. </p>
<div className="box-container">

</div>
  </div>
</div>
  </section>

        </div>
    )
}