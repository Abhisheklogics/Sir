import Link from "next/link"

export default function Header()
{
    return(
        <>
        <div>
            <h1 className="hover:text-blue-500 text-center text-2xl  uppercase font-bold mt-4">dayalbagh educational institute, agra</h1>
        </div>
        <div>
            <h1 className="hover:text-blue-500 text-center text-2xl  uppercase font-bold mt-2">Dr. Amarjeet Singh Chauhan</h1>
        </div>
        <div  className="mt-4 flex text-white font-bold   justify-center  gap-10 items-center w-full bg-gray-900 h-[60px]">
 <div className="bg-blue-500  rounded-lg p-2 px-4">
    <Link href='/'>HOME</Link>
 </div>
 <div className="bg-blue-500  uppercase rounded-lg p-2 px-4">
    <Link href='/projects'>Skills and Expertise</Link>
 </div>
 <div className="bg-blue-500   rounded-lg p-2 px-4">
    <Link href='/patents'>PATENTS</Link>
 </div>
 

 <div className="bg-blue-500   rounded-lg p-2 px-4">
    <Link href='#'>PROJETCS</Link>
 </div >
 <div className="bg-blue-500   rounded-lg p-2 px-4">
    <Link href='/publication'>PUBLICATIONS</Link>
 </div>
 <div className="bg-blue-500  rounded-lg p-2 px-4">
    <Link href='/galler'>GALLERY</Link>
 </div>
 <div className="bg-blue-500  rounded-lg p-2 px-4">
    <Link href='/contact'>CONTACT US</Link>
 </div>
        </div>
        
        </>
    )
}