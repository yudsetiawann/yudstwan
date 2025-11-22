"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Tambahkan kelas
            entry.target.classList.add("revealed");
            // Stop observing elemen ini setelah muncul (Performance & UX lebih baik)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Sedikit lebih tinggi agar tidak terpicu terlalu cepat
        rootMargin: "0px 0px -50px 0px", // Offset sedikit dari bawah
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
