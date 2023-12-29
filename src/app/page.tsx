import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen p-20 bg bg-cover bg-[url('/assets/landing/login1.svg')]">
      <div className="w-full h-full bg-white justify-center flex flex-col">
        <div className="mx-48 basis-auto ">
          <h1 className="text-primary text-3xl font-poppins">Login Sebagai Admin atau User</h1>
        </div>
        <div className="flex">
          <div>
            <button className="bg-primary text-white p-1 rounded-full ">User</button>
          </div>
          <div>
            <button className="bg-primary text-white p-1 rounded-full ">Admin</button>
          </div>
        </div>
      </div>
    </div>
    // <main className="flex flex-col w-screen h-screen items-center justify-between p-20 bg-cover" style={{ backgroundImage: "url('/assets/landing/login1.svg')" }}>
    //   <div className="z-10 w-full h-full items-center justify-between font-mono text-sm lg:flex bg-white">
    //     <div className="font items-center">
    //       <h1 className="text-sky-400 font-poppins m-auto flex">Login Sebagai Admin atau User</h1>
    //     </div>
    //   </div>
    // </main>
  );
}
