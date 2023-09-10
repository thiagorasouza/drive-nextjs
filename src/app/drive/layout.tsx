import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchBar";
import React from "react";

export default function DriveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <main className="py-3 px-4">{children}</main>
      <Navbar />
    </>
  );
}
