import Link from "next/link"

export default function Header()
{
    return(
        <>
        <div>
            <h1 className="hover:text-blue-500 text-center text-2xl text-white uppercase font-bold mt-4">dayalbagh educational institute, agra</h1>
        </div>
        <div  className="mt-4 flex justify-center  gap-12 items-center w-full bg-gray-100 h-[60px]">
 <div className="bg-blue-500 text-white rounded-lg p-2 px-4">
    <Link href='#'>SWARM OPTIMIZATION</Link>
 </div>
 <div className="bg-blue-500 text-white rounded-lg p-2 px-4">
    <Link href='#'>PROJECTS</Link>
 </div>
 <div className="bg-blue-500 text-white  rounded-lg p-2 px-4">
    <Link href='#'>PATENTS</Link>
 </div>
 <div className="bg-blue-500 text-white  rounded-lg p-2 px-4">
    <Link href='#'>GALLERY</Link>
 </div>

 <div className="bg-blue-500 text-white  rounded-lg p-2 px-4">
    <Link href='#'>PRODUCTS</Link>
 </div >
 <div className="bg-blue-500 text-white  rounded-lg p-2 px-4">
    <Link href='#'>PUBLICATIONS</Link>
 </div>
 <div className="bg-blue-500 text-white  rounded-lg p-2 px-4">
    <Link href='#'>CONTACT US</Link>
 </div>
        </div>
        
        </>
    )
}