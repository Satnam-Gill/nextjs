"use client";
import Head from "next/head";
import dynamic from "next/dynamic";
import Index from "./pages/index/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <title>Blog</title>
      <Index/>
    </main>
  );
}
