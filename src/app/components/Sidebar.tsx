"use client";

import Link from "next/link";
import {
  Home,
  User,
  BookOpenText,
  Phone,
  BatteryCharging,
  Wifi,
  Clock,
} from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { icon: Home, label: "Profile", link: "/" },
  { icon: User, label: "About", link: "/about" },
  { icon: BookOpenText, label: "Project", link: "/project" },
  { icon: Phone, label: "Contact", link: "/contact" },
];

export function Sidebar({ label }: { label?: string }) {
  const pathname = usePathname();
  const active = links.find((l) => l.link === pathname);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex sticky left-0 top-0 h-screen w-15 bg-black border-r border-neutral-800">
        <div className="h-full flex flex-col justify-between items-center py-6 w-full">
          <ul className="flex flex-col gap-6">
            {links.map(({ icon: Icon, link }) => (
              <li key={link}>
                <Link
                  href={link}
                  className={`flex items-center justify-center w-10 h-10 rounded-md transition
                    ${
                      pathname === link
                        ? "bg-neutral-800 text-white"
                        : "text-neutral-500 hover:text-white hover:bg-neutral-800"
                    }
                  `}
                >
                  <Icon size={20} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="rotate-90 text-xs tracking-widest text-neutral-400 uppercase">
            {label ?? active?.label ?? "404"}
          </div>

          <div className="flex flex-col items-center gap-4 text-neutral-500">
            <BatteryCharging size={18} />
            <Wifi size={18} />
            <Clock size={18} />
          </div>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-neutral-800 z-50">
        <ul className="flex justify-around items-center py-3">
          {links.map(({ icon: Icon, link }) => (
            <li key={link}>
              <Link
                href={link}
                className={`flex items-center justify-center w-10 h-10 rounded-md transition
                  ${
                    pathname === link
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-500 hover:text-white"
                  }
                `}
              >
                <Icon size={20} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
