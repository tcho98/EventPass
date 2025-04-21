"use client"; // Assure que cette page est exécutée côté client

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import html2canvas from "html2canvas"; // Importation de html2canvas
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WelcomePage = () => {
  const router = useRouter();
  const { id } = useParams(); // Récupère l'ID passé dans l'URL
  const [attendee, setAttendee] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/attendee/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Erreur dans la récupération des données.");
          }
          return res.json();
        })
        .then((data) => setAttendee(data))
        .catch((err) => setError(err.message)); // Capture l'erreur et affiche-la
    }
  }, [id]);

  const handleDownload = () => {
    const cardElement = document.getElementById("invitation-card");
    if (cardElement) {
      html2canvas(cardElement).then((canvas) => {
        const imageURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imageURL;
        link.download = `carte_invitation_${attendee?.name}.png`; // Nom du fichier pour le téléchargement
        link.click();
      });
    }
  };

  return (
    <div>
      <Header />

      {error && (
        <p className="text-red-500 bg-gradient-to-r from-red-500 to-yellow-400">
          Erreur: {error}
        </p>
      )}
      <h1 className="text-2xl font-semibold flex  justify-center items-center mt-[50px] mb-4 ">
        Bienvenue, {attendee?.name || "Utilisateur"}!🎉 ⭐👏
      </h1>
      <div className="mt-auto p-10 ">
        <div className=" h-auto max-w-[50%] rounded-3xl flex flex-col items-center shadow-3xl mx-auto mt-[100px]  bg-gray-900">
          <h2 className="text-xl text-white mx-auto p-5 flex font-medium flx">
            Votre carte d'invitation
          </h2>
          <p className="font-tight text-white italic">
            Merci pour votre participation!
          </p>

          {/*     Bouton pour télécharger l'image de la carte */}
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-white text-black flex ml-auto mr-3 rounded-md hover:bg-[rgba(0,102,205,1)]  focus:outline-none"
          >
            Télécharger la carte
          </button>

          <div className="flex justify-center mb-[70px]">
            {/* Carte générée */}
            <div
              id="invitation-card"
              className="bg-[url('/images/scattered.png')] bg- bg-cover bg-center bg-no-repeat w-full max-w-md p-2 max-h-lg  mx-auto"
            >
              <div className="text-center flex justify-between items-center w-full ">
                <img
                  src="/images/logo2.png"
                  className="h-14 max-w-xs w-17 mb-4 object-contain"
                  alt="Logo"
                />
                <h2 className="font-semibold text-xl mb-4 text-black ">
                  www.sarrca.org
                </h2>
              </div>
              <div className="max-w-xs mx-auto border-[rgba(128,0,0,1)] border-2 rounded-3xl overflow-hidden bg-[rgba(128,0,0,1)]">
                <div className="flex justify-center ">
                  <img
                    src="/images/visuel1.jpeg"
                    className="h-auto max-w-xs w-23 rounded-tl-lg rounded-tr-lg object-cover"
                    alt="QR Code"
                  />
                </div>
                <div className=" text-center text-white">
                  <h1 className="flex text-4xl px-5 font-extrabold font-mono flex justify-center   p-3">
                    VOUS ETES INVITE
                  </h1>
                  <h2 className="flex font-mono flex justify-center max-w-full font-extrabold text-md">
                    Mr {attendee?.name}
                  </h2>
                </div>
              </div>

              <h1 className="tracking-tight text-[rgba(0,102,205,1)] pt-3 flex text-5xl  items-center font-extrabold font-mono flex justify-center ">
                AU SARRCA
                <span className="text-[rgba(128,0,0,1)] mx-4"> #10</span>
              </h1>

              <div className="py-3  items-baseline gap-4 flex-1 text-black">
                <p className="font-thin italic  text-black text-sm w-full mx-auto ">
                  INTELLIGENCE ARTIFICIEL ET EXPERIENCE......L'AFRIQUE S'ENGAGE
                </p>
                <h1 className="text-center font-extrabold">
                  DU 23 AU 26 AVRIL
                </h1>
                <h1 className="text-center font-extrabold">
                  HOTEL AKWA PALACE, Douala-Cameroun
                </h1>
              </div>
              <div className="flex   h-auto gap-5 mt-7 text-back">
                <div className="flex gap-1 flex-wrap max-w-xs h-13 items-center justify-center  border-2  border-[rgba(0,102,205,1)]  overflow-hidden rounded-3xl ">
                  <img
                    src="/images/call.png"
                    className=" w-6  h-auto  object-contain"
                    alt="QR Code"
                  />
                  <p>+23769354252</p>

                  <img
                    src="/images/internet.png"
                    className="h-auto w-6 object-contain "
                    alt="QR Code"
                  />
                  <p>www.sarrca.org</p>
                  <img
                    src="/images/mail.png"
                    className="h-auto w-6 object-contain "
                    alt="QR Code"
                  />
                  <p>contact@sarca.org</p>
                </div>

                <img
                  src="/images/qr.png"
                  className="h-auto w-20 rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WelcomePage;
