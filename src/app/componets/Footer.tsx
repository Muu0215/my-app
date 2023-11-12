"use client";

import { Link as Scroll } from 'react-scroll'
import classes from '@/app/componets/Header.module.scss';
import { BsArrowUpCircle } from "react-icons/bs";

export function Footer() {
return(
    < >
    <footer>
        <Scroll to='top' smooth={true} duration={600} className={classes.color} ><BsArrowUpCircle  size="5rem" fixed='bottom' /></Scroll>
    </footer>

    </>

)
}