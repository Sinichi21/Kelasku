import Image from "next/image";

export default function Home() {
  return (
    <main className="lex-col flex w-screen h-screen fitems-center justify-between p-20 bg-cover bg-[url('/assets/landing/login1.svg')]">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex bg-white">
        <div className="font items-center">
          <h1 className="text-sky-400 font-sans">Login Sebagai Admin atau User</h1>
        </div>
      </div>
    </main>
  );
}
