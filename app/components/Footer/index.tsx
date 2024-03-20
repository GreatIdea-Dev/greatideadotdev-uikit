import Ant from '@/app/Icons/Ant';
import Beaker from '@/app/Icons/Beaker';
import Cake from '@/app/Icons/Cake';
import Graduate from '@/app/Icons/Graduate';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footerIcons'>
          <Cake />
          <Beaker />
          <Ant />
          <Graduate />
        </div>
        <ul className='footerNav'>
          <li>
            <Link href='https://github.com/W5DEV/' target='_blank'>
              Github
            </Link>
          </li>
          <li>
            <Link href='https://www.w5dev.com/' target='_blank'>
              Portfolio
            </Link>
          </li>
        </ul>
        <p className='copy'>&copy; Great Idea Development {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
