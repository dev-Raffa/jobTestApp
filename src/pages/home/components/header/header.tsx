import { Link } from 'react-router-dom';
import { Button } from '../../../../components/button';
import { Logo } from '../../../../components/logo/logo';
import './header.css'
import { useAppLocal } from '../../../../services/localStorage';

export const Header = () => {
  const userIsLogged = useAppLocal.getStorage()?.isLogged
  
  const onClickLogoutHandle = () =>{
    useAppLocal.clearStorage()
    window.location.reload()
  }
  
  return(
    <header className='homePage-header'>
      <Logo />
      <section>
        {
          userIsLogged ?
          <Button variant='default' onClick={onClickLogoutHandle}>logout</Button>
          :
          <>
          <Button variant='default'>
            <Link to={'auth/user/login'}>
              Login
            </Link>
          </Button>
          <Button variant='outline'>
            <Link to={'auth/user/register'}>
            Register
            </Link>
          </Button>
          </> 
        }
      </section>
    </header>
  )
}