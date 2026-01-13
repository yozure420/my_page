import './Header.css'

function Header() {

    return (
        <>
        <div className='list'>
            <div className="center">
            <ul>
                <li><a href="#profile" >Profile</a></li>
                <li><a href="#contact" >CONTACT</a></li>
                <li><a href="#myWorks" >My Works</a></li>
                
            </ul>
            </div>
        </div>
        </>
    );
}

export default Header;