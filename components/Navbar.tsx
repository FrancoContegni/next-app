import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <div className={styles['menu-container']}>

    {     menuItems.map(( { text, href }) => (

    <ActiveLink key={ href } text={ text } href= { href }/>

    ))

    } 

        {/*
        <ActiveLink text="Home" href="/" className="href"/>
        <ActiveLink text="About" href="/about" className="href"/>
        <ActiveLink text="Contact" href="/contact" className="href"/>
        <ActiveLink text="Pricing" href="/pricing" className="href"/> 
        */}
    </div>
  )
}
