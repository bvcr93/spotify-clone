"use client";
import AuthModal from "@/app/components/AuthModal";
import Modal from "@/app/components/Modal";

import { useEffect, useState } from "react";
import React from "react";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);
  // modals cant be seen during server side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <>
    <AuthModal/>
    </>
  );
}
