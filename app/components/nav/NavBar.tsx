import Link from "next/link";
import Container from "../Container";
import { Noto_Sans } from 'next/font/google'
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";

const logo = Noto_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-white z-30">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/" className={`${logo.className} font-bold text-xl`}>-4degree.</Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default NavBar;