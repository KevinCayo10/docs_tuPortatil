import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeName = () => {
  const [themeName, setThemeName] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setThemeName(storedTheme);
    }
  }, []);
  const theme = useTheme();
  const currentThemeName = theme.theme === "dark" ? "Dark" : "Light";

  useEffect(() => {
    setThemeName(currentThemeName);
  }, [currentThemeName]);

  return (
    <div className="flex items-center justify-center">
      <Image
        src="/logoTuPortatil.svg" // Ruta de la imagen
        alt="Logo"
        width={50} // Ancho de la imagen
        height={50} // Alto de la imagen
        className="mr-2" // Clase para márgenes o estilos adicionales
      />
    </div>
  );
};

export default {
  docsRepositoryBase: "https://github.com/pekinsjr/nextra-docs/blob/main",
  logo: <ThemeName />,

  project: {
    link: "",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Atiendo",
      };
    }
  },
  primaryHue: 180,

  //Agregar contacto de whatsapp con el icono de whatsapp
  // chat: {
  //   link: 'https://wa.me/5730987784159',
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  //       <path d="M12 2C6.48 2 2 6.48 2 12C2 16.97 6.37 21.37 11.34 21.88L15.5 23L17 21.47L20.53 18C21.44 17.19 22 16.13 22 15C22 11.13 18.87 8 15 8H14V6C14 5.45 13.55 5 13 5H11C10.45 5 10 5.45 10 6V8H8C4.13 8 1 11.13 1 15C1 18.87 4.13 22 8 22C9.13 22 10.19 21.44 11 20.53L11.5 20.24C11.81 20.08 12.19 20 12.59 20H13C17.42 20 21 16.42 21 12C21 6.48 16.52 2 12 2ZM12 18C9.24 18 7 15.76 7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 15.76 14.76 18 12 18ZM13 12H11V10H13V12Z" />
  //     </svg>
  //   )
  // }

  chat: {
    link: "https://github.com/EdisonLopezEC",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12C2 16.97 6.37 21.37 11.34 21.88L15.5 23L17 21.47L20.53 18C21.44 17.19 22 16.13 22 15C22 11.13 18.87 8 15 8H14V6C14 5.45 13.55 5 13 5H11C10.45 5 10 5.45 10 6V8H8C4.13 8 1 11.13 1 15C1 18.87 4.13 22 8 22C9.13 22 10.19 21.44 11 20.53L11.5 20.24C11.81 20.08 12.19 20 12.59 20H13C17.42 20 21 16.42 21 12C21 6.48 16.52 2 12 2ZM12 18C9.24 18 7 15.76 7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 15.76 14.76 18 12 18ZM13 12H11V10H13V12Z" />
      </svg>
    ),
  },

  footer: {
    text: (
      <span>
        Derechos reservados {new Date().getFullYear()} ©{" "}
        <a href="https://portfolio-kevdev.vercel.app/" target="_blank">
          Kevin Cayo
        </a>
        .
      </span>
    ),
  },

  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  //Ocultar sidebar
};
