import React from "react";

interface SidebarItemProps {
  label: string;
}

export default function SidebarItem({ label }: SidebarItemProps) {
  return <div>{label}</div>;
}
