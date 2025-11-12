import { useState } from "react";
import Resume from "./Resume";
import "./resume.css"
export default function ResumeForm() {
  let [final, setFinal] = useState(false);
  const [qualificationCollection, setQualificationCollection] = useState([]);
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [technicalSkillsCollection, setTechnicalSkillsCollection] = useState([]);
  const [qualification, setQualification] = useState({
    year: "",
    college: "",
    university: "",
    course: "",
    fullMarks: "",
    obtainMarks: "",
  });
  const [basicDetail, setBasicDetail] = useState({
    name:"",
    address:"",
    mobile:"",
    email:"",
    image:"",
    fatherName:"",
    motherName:"",
    dob:"",
    experience:"",
    strength:"",
    hobby:"",
    maritalStatus:"",
    objective:"",
  });
  
  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setQualification((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setQualificationCollection((prev) => {
      return [...prev, qualification];
    });

    setQualification({
      year: "",
      college: "",
      university: "",
      course: "",
      fullMarks: "",
      obtainMarks: "",
    });
  }

  function handleSkill(event) {
    setTechnicalSkills(event.target.value);
  }

  function handleSkillSubmit(event) {
    event.preventDefault();
    setTechnicalSkillsCollection((curr) => {
      return [...curr, technicalSkills];
    });
    setTechnicalSkills("");
  }



  function handleBasicDetail(event){
    const name = event.target.name;
    const value = event.target.value;
    setBasicDetail((curr)=>{
        return{
            ...curr,
            [name] : value,
        }
    });
  };

  function changeFinal(){
    setFinal(true);
  }
  const personalData ={
   
    fatherName: basicDetail.fatherName,
    motherName: basicDetail.motherName,
    dob: basicDetail.dob,
    experience: basicDetail.experience,
    strength: basicDetail.strength,
    hobby: basicDetail.hobby,
    maritalStatus: basicDetail.maritalStatus,
  }

  let data ={basicDetail,qualificationCollection,technicalSkillsCollection,personalData};
  return (
    <div >
      <div className="p-5 border-2 border-black print:hidden justify-center flex flex-wrap sm:flex-nowrap  content-center mt-5">
      <div className="w-full sm:w-1/2   mx-4 flex flex-col space-y-2 px-4">
        <input onChange={handleBasicDetail} value={basicDetail.name} placeholder="Enter your name" name="name" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.address} placeholder="Enter your address" name="address" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.mobile} placeholder="Enter your mobile" name="mobile" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.email} placeholder="example@email.com" name="email" type="email" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.image} placeholder="Image link paste here" name="image" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.fatherName} placeholder="Enter your Father's Name" name="fatherName" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.motherName} placeholder="Enter your Mother's Name" name="motherName" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.dob} name="dob" type="date" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.experience} placeholder="Experience..." name="experience" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.hobby} placeholder="Hobby here..." name="hobby" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.strength} placeholder="Strength here..." name="strength" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.maritalStatus} placeholder="Matital Status" name="maritalStatus" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <input onChange={handleBasicDetail} value={basicDetail.objective} placeholder="Career Objectives here.." name="objective" type="text" className="border-2 text-center w-full border-black bg-green-100" />
      </div>

      <div className="w-full sm:w-1/2  mx-4 flex flex-col space-y-2 px-4 mt-2">
        <input
          placeholder="Add Skills"
          type="text"
          value={technicalSkills}
          onChange={handleSkill}
          className="border-2 text-center w-full border-black bg-green-100"
        />
        <button
          onClick={handleSkillSubmit}
          className="bg-blue-500 w-full rounded-full hover:bg-red-500"
        >
          Add
        </button>

        {/* table input */}

        <input
          className="border-2 text-center w-full border-black bg-green-100"
          value={qualification.year}
          onChange={handleInput}
          type="number"
          name="year"
          placeholder="Year"
        />
        <input
          className="border-2 text-center w-full border-black bg-green-100"
          value={qualification.college}
          onChange={handleInput}
          type="text"
          name="college"
          placeholder="College"
        />
        <input
          className="border-2 text-center w-full border-black bg-green-100"
          value={qualification.university}
          onChange={handleInput}
          type="text"
          name="university"
          placeholder="University"
        />
        <input
          className="border-2 text-center w-full border-black bg-green-100"
          value={qualification.course}
          onChange={handleInput}
          type="text"
          name="course"
          placeholder="Course"
        />
        <input
          className="border-2 text-center w-full border-black bg-green-100"
          value={qualification.fullMarks}
          onChange={handleInput}
          type="number"
          name="fullMarks"
          placeholder="FullMarks"
        />
        <input
          className="border-2 text-center w-full border-black bg-green-100"
          value={qualification.obtainMarks}
          onChange={handleInput}
          type="number"
          name="obtainMarks"
          placeholder="ObtainMarks"
        />
        <button
          className="bg-blue-500  w-full rounded-full hover:bg-red-500"
          onClick={handleSubmit}
        >
          Add
        </button>

      </div>

      </div>
      <div className="mt-9 justify-self-center print:hidden">
        <button  className="bg-blue-400 hover:bg-blue-700 px-3 rounded-md" onClick={window.print}>
          Print
        </button>
      </div>
      <div className="mt-10 print:mt-0">
        {!final?<button onClick={changeFinal} className="rounded-full w-full bg-green-300 m-4 hover:bg-green-500">Create Resume</button>:<Resume id="resume-print-area" data={data}/>}
      </div>
      
    </div>
  );
}
