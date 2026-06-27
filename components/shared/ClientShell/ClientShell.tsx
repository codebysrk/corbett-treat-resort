"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Preloader, Header, FloatingContact } from "@/components";

export default function ClientShell() {
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [preloaderMounted, setPreloaderMounted] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    
    setPreloaderActive(false);
    
    const unmountTimer = setTimeout(() => setPreloaderMounted(false), 800);
    return () => {
      clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <>
      {preloaderMounted && <Preloader active={preloaderActive} />}
      <Header />
      <FloatingContact />
    </>
  );
}
