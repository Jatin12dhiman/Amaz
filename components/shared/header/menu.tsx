import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex items-center gap-4 w-full">
        {/* Sign In */}
        <Link
          href="/signin"
          className="header-button flex items-center gap-2 px-3 py-2 hover:text-yellow-500 transition-colors"
        >
          <UserIcon className="h-6 w-6" /> {/* ⬅️ size thoda chhota rakha for balance */}
          <span className="text-sm font-semibold">Hello, Sign in</span>
        </Link>

        {/* Cart */}
        <Link
          href="/cart"
          className="header-button flex items-center gap-2 px-3 py-2 hover:text-yellow-500 transition-colors"
        >
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="text-sm font-semibold">Cart</span>
        </Link>
      </nav>
    </div>
  );
}
