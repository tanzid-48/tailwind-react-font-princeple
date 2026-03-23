import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links =  navLinks.map(link => (<li className=' p-1 hover:bg-amber-400 ' key={link.id}><a href={link.path}>{link.name}</a></li>))


    return (
        <nav className='flex justify-between mx-10 mt-5'>

            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open 
                    ?<X className='md:hidden'></X> 
                    :<Menu className=' md:hidden'></Menu>
                }
          <ul className= {`md:hidden absolute duration-1000 ${open ? 'top-8' : '-top-40'} bg-amber-200`}>
            {
              <span className='text-black'>
                 {
                    links
                 }
              </span>
            }
          </ul>
                <h3 className='ml-4'>TANZID</h3>
            </span>

            <ul className=' md:flex hidden '>
                {
                   links
                }
            </ul>


            {/* <ul>
        {
            navLinks.map(link => (<li key={link.id}><a href={link.path}>{link.name}</a></li>))
        }
     </ul> */}





            {/* <ul className='flex'>
                 <li className='mr-10'> <a href="/"></a>Home</li>
                 <li className='mr-10'><a href="/about"></a>About</li>
                 <li className='mr-10'><a href="/blog"></a>Blog</li>
            </ul> */}

            <button className='btn btn-primary '>Sing In</button>
        </nav>
    );
};

export default NavBar;