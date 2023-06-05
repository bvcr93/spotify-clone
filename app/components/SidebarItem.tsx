import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  active?: boolean;
  href: string;
}

export default function SidebarItem({
  label,
  icon: Icon,
  active,
  href,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row  h-auto 
        items-center w-full gap-x-4 text-md 
        font-medium cursor-pointer transition 
        text-neutral-400 py-1 hover:text-white  `,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p>{label}</p>
    </Link>
  );
}
