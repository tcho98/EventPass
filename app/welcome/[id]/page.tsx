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

  //Fonction pour récupérer la couleur en fonction du rôle
  const getColorForRole = (role: string) => {
    switch (role) {
      case "visiteur":
        return "bg-red-700"; // Rouge pour les visiteurs
      case "conference":
        return "bg-green-500"; // Vert pour les conférences
      case "exposant":
        return "bg-orange-500"; // Orange pour les exposants
      case "speaker":
        return "bg-green-500";
      case "formation":
        return "bg-blue-500";
      case "invité":
        return "bg-yellow-500"; // Bleu pour les intervenants
      default:
        return "bg-gray-500"; // Gris par défaut
    }
  };
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
      // Utilisation de html2canvas pour capturer l'élément
      html2canvas(cardElement, {
        useCORS: true, // Permet de capturer les images externes
        allowTaint: true, // Permet la capture même avec des taints CORS
        logging: true,
        scale: 2, // Permet de loguer des informations pour déboguer
      }).then((canvas) => {
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
        <p className="text-red-500 bg-gradient-to-r from-red-500 to-rd-500">
          Erreur: {error}
        </p>
      )}
      <h1 className="text-2xl font-semibold flex  justify-center items-center mt-[50px] mb-1 ">
        Bienvenue, {attendee?.name || "Utilisateur"}!🎉 ⭐👏
      </h1>
      <div className=" overflow-hidden h-[100vh]">
        <div className=" h-auto max-w-[50%] h-[60vh] rounded-3xl flex flex-col items-center shadow-3xl mx-auto mt-[100px]  bg-gray-900">
          <h2 className="text-xl text-white mx-auto p-5 flex font-medium flx">
            Votre carte d'invitation
          </h2>
          <p className="font-base/tight text-white italic">
            Merci pour votre participation!
          </p>

          {/*     Bouton pour télécharger l'image de la carte */}
          <button
            onClick={handleDownload}
            className="px-1 py-2 bg-white text-black flex ml-auto mr-3 rounded-md hover:bg-[rgba(0,102,205,1)]  focus:outline-none"
          >
            Télécharger la carte
          </button>

          <div
            id="invitation-card"
            className="bg-[url('/images/back7.jpg')] h-[500px] w-[300px]   bg-cover bg-center"
          >
            <div className="bg-white bg-center bg-cover w-[220px] my-[105px] rounded-3xl  mx-auto    shadow-3xl ">
              <img
                src="/images/logo4.jpeg"
                alt=""
                className="w-[110px] h-auto mx-auto mb-1 relative "
              />
              <h1 className="mx-auto text-[rgba(0,102,205,1)] justify-center text-[40px] items-center flex text-2xl font-extrabold ">
                #10
              </h1>
              <h1 className="mx-auto justify-center items-center flex text-xl font-bold ">
                Pass {attendee?.role}
              </h1>
              <img
                src="/images/visuel1.jpeg"
                alt=""
                className="mx-auto border border-red-500/50 w-[100px] h-[] "
              />
              <h1 className="mx-auto  flex flex-col text-[13px] font-bold text-center">
                {attendee?.name}
              </h1>
              <h2 className="mx-auto text-[10px] text-center font-bold">
                {attendee?.company}
              </h2>
              <div className="flex w-full justify-between items-center p-2">
                <img
                  src="/images/qr.png"
                  alt=""
                  className="w-[50px]  mr-auto] ml-1"
                />
                <p className="font-base/tight font-bold mt-5 text-[10px]">
                  ww.sarcca.org
                </p>
                <div className="grid grid-cols-5 gap-2 w-fit p-1 bg-white">
                  {Array.from({ length: 15 }).map((_, index) => (
                    <div
                      key={index}
                      className={`w-1 h-1 ${getColorForRole(
                        attendee?.role
                      )} rounded-full`}
                    ></div>
                  ))}
                </div>
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
