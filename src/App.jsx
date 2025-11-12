import "./App.css";
import ResumeForm from "./ResumeForm";
export default function App(){
  return(
    <>
    <h1 className=" print:hidden text-center sm:text-3xl font-serif font-bold">Make your Resume</h1>
      <ResumeForm/>
    </>
  );
}