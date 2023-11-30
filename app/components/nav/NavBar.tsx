import Link from "next/link";
import Container from "../Container";
import { Mochiy_Pop_One } from 'next/font/google'

const logo = Mochiy_Pop_One({ subsets: ['latin'], weight: ['400'] })

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-white z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/" className={`${logo.className} text-2xl`}>エヴァンゲリオン</Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>Cart</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default NavBar;