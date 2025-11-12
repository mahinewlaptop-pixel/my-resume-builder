import ResumeHead from "./resumeHead";
import CareerObjective from "./ResumeBodyObjective";
import Qualification from "./resumeQualification";
import Skills from "./skills";
import PersonalDetail from "./personal";
import Footer from "./resumeFoot";
import "./resume.css";
export default function Resume({data}){
    return(
        <div className=" a4-sheet  border-4 w-screen border-red-500 px-3">
    <h2 className="text-center text-xl font-bold">Resume</h2>
    <ResumeHead basicDetail={data.basicDetail}/>
    <CareerObjective objective={data.basicDetail.objective}/>
    <Qualification educationData={data.qualificationCollection}/>
    <Skills skills={data.technicalSkillsCollection}/>
    <PersonalDetail profile={data.personalData}/>
    <Footer name={data.basicDetail.name}/>
  </div>
    );
}