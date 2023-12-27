import { Button } from '../../../../components/button';
import { Logo } from '../../../../components/logo/logo';
import './header.css'

export const Header = () => {
  return(
    <header>
      <Logo />
      <section>
        <Button variant='default'>
          Login
        </Button>
        <Button variant='outline'>
          Register
        </Button>
      </section>
    </header>
  )
}