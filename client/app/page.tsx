import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
        <div className="dark:bg-black flex items-center justify-center h-screen">
          <h1 className="dark:text-red-600 bg-red text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
        </div>
  );
}
