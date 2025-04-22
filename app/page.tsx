import Header from "@/components/Header";

import AttendeeForm from "@/components/AttendeeForm";
import Footer from "@/components/Footer";

export default function Event() {
  return (
    <div>
      <Header />
      <div className="max-w-2xl gap-y-8 mx-auto items-center flex flex-col justify-center h-screen">
        <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto">
          <p className="text-5xl font-semibold text-gray-700 mb-2">
            Welcome to
          </p>
          <h1 className="text-8xl font-extrabold  bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
            EventPass!
          </h1>
        </div>
        <div className="w-full flex justify-center items-center min-h">
          <p></p>
          <AttendeeForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
