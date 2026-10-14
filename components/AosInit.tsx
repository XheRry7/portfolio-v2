"use client";

import { useEffect } from "react";
import AOS from "aos";

export function AosInit() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 40,
      disable: "phone",
    });
  }, []);
  return null;
}
