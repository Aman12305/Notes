import React,{useEffect,useState} from 'react'
import {
  Box,
  Button,
  Text
} from '@chakra-ui/react'

import {Link, useNavigate} from 'react-router-dom'
import { logOut } from '../../actions/auth';

export default function Navbar() {

    const [isLoggedIn,setLoggedIn] = useState(false);

    const currentUser = JSON.parse(localStorage.getItem('Profile'))

    useEffect(()=>{
        if(currentUser){
            setLoggedIn(true);
        }else{
            setLoggedIn(false)
        }
    },[currentUser])

    const navigate = useNavigate();

    const handleLogout = () =>{
        logOut();
        navigate('/');
    }


  return (
    <Box position='fixed' h='40px' w='calc(100% - 40px)' p='20px' display='flex' justifyContent='space-between'>
        <Text>ToDo</Text>
        <Box>
            {
                !isLoggedIn?
                <Link to='/auth'>
                    <Button>
                        Auth
                    </Button>
                </Link>:
                <Button onClick={handleLogout}>Logout</Button>
            }
        </Box>
    </Box>
  )
}
