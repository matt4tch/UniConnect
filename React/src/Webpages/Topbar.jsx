import { Link } from 'react-router-dom'
const Topbar = () => {
    return ( 
        <nav className='p-9 flex items-center m-auto text-red-400'>
             <div className='mr-8 flex-1 text-xl no-underline hover:text-red'>
                <Link className='m-5' to="/">Home</Link>
             </div>
           
             <header className='mr-8 flex-2 text-5xl'>
                <h1>UniConnect</h1>
            </header>
        </nav> 
     );
}
 
export default Topbar;