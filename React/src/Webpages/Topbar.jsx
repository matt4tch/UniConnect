import { Link } from 'react-router-dom'
const Topbar = () => {
    return ( 
        <nav className='flex items-center p-9 m-auto text-black font-semibold' >
            <header className="mr-8 flex-1 text-5xl text-black">UniConnect</header>
             <div className='flex-2 mr-8 text-xl no-underline hover:text-yellow-500'>
                <Link className='text-gray bg-white border-0 rounded-xl p-3 cursor-pointer hover:bg-black' to="/">Home</Link>
             </div>
        </nav> 
     );
}
 
export default Topbar;

