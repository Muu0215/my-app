import Image from 'next/image'
import classes from '@/app/componets/Header.module.scss'
import Link from 'next/link'
export default function Header() {
  return (
    <>
      <div className={classes.container}>
        <ul className={classes.header}>
          <li className={classes.headerList}><Link href="/">PROFILE</Link></li>
          <li className={classes.headerList}><Link href="/skill">SKILL</Link></li>
          <li className={classes.headerList}><Link href="/output">OUTPUT</Link></li>
          <li className={classes.headerList}><Link href="/input">INPUT</Link></li>
          <li className={classes.headerList}><Link href="/memo">MEMO</Link></li>
          <li className={classes.headerList}><Link href="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </>
  )
}
