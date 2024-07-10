import Image from "next/image";
import { Header } from "./components/header/Header";
import Features from "./components/main/Features";
import { Work } from "./components/main/Work/HowItWorks";
import GreatWork from "./components/main/Work/GreatWork";
import { Connect } from "./components/main/Connect/Connected";
import { Footer } from "./components/footer/Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <Features/>
      <Work/>
      <GreatWork/>
      <Connect/>
      <Footer/>
    </div>
  );
}
