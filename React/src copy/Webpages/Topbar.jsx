import { Link } from 'react-router-dom'
const Topbar = () => {
    return ( 
        <nav className='flex items-center p-9 m-auto border-y-4 border-y-slate-400 text-gray bg-slate-800 rounded-3xl'>
             <div className='flex-1 mr-8 text-xl no-underline hover:text-yellow-500'>
                <Link className='text-gray bg-white border-0 rounded-xl p-3 cursor-pointer hover:bg-black' to="/">Home</Link>
             </div>
             <header className='mr-8 flex-2 text-5xl text-white'>
                <h1>UniConnect</h1>
            </header>
        </nav> 
     );
}
 
export default Topbar;