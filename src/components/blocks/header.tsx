import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { styles } from "@/lib/styles";
import { Button } from "../ui/button";

function Header() {
  return (
    <header id="header">
      <div className="container py-3">
        <div className={cn(styles.flex, "gap-5")}>
          <a href="/">SaaS Template</a>

          <nav className="hidden lg:block">
            <ul className={cn(styles.flex, "gap-6")}>
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link href={`#${item.link}`} className={styles.link}>
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={cn(styles.flex, "gap-5")}>
            <ModeToggle />
            <Link href="/login">Sign in</Link>
            <Link href="/register">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
