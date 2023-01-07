import { Link } from 'react-router-dom'
const Topbar = () => {
    return ( 
        <nav className="topbar">
             <div className="left-section">
                <Link to="/">Home</Link>
             </div>
           
            <header className="middle-section">
                <h1>UniConnect</h1>
            </header>
        </nav> 
     );
}
 
export default Topbar;