
import SheetNavBar, { NavBarProps } from './navWithSheet';
import Announcement from './announcement';
import { Separator } from './ui/separator';
import Navbar from './navbar';

export default function Header({ locale, navLinks }: NavBarProps) {

  return (
  <>

    <Announcement locale={locale}/>
    {/* <SheetNavBar locale={locale} navLinks={navLinks}/> */}
    <Navbar locale={locale} navLinks={navLinks}/>
    
    <Separator className="my-1" />
    </>
  );
}

