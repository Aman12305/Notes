import React from 'react';
import {Box, Button,Container } from "@chakra-ui/react";
import {Link, Outlet} from "react-router-dom";
import Navbar from './Navbar/Navbar';

export default function Home() {
  return (
    <Box>
      <Navbar/>
      <Box pt='60px'>
        <Outlet/>
      </Box>
    </Box>
  )
}
