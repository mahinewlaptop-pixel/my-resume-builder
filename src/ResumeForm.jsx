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

  function handleImageChange(event){
    const file = event.target.files[0];
    if(file){
      if(basicDetail.image){
        URL.revokeObjectURL(basicDetail.image);
      }
      const url = URL.createObjectURL(file);
      setBasicDetail((curr)=>{
        return{
          ...curr,
          image : url,
        }
      });
    }else{
      if(basicDetail.image){
        URL.revokeObjectURL(basicDetail.image);
      }    
    }
  }

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
      <div className=" p-5 border-2 border-black print:hidden justify-center flex flex-wrap sm:flex-nowrap  content-center mt-5">
      <div className="w-full sm:w-1/2   mx-4 flex flex-col space-y-2 px-4">
        <h4 className="text-2xl font-serif text-center w-full ">Personal Details</h4>
        <label htmlFor="name" className="text-center w-full ">Name</label>
        <input id="name" onChange={handleBasicDetail} value={basicDetail.name} placeholder="Enter your name" name="name" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="address" className="text-center w-full ">Address</label>
        <input id="address" onChange={handleBasicDetail} value={basicDetail.address} placeholder="Enter your address" name="address" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="mobile" className="text-center w-full ">Mobile No.</label>
        <input id="mobile" onChange={handleBasicDetail} value={basicDetail.mobile} placeholder="Enter your mobile" name="mobile" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="email" className="text-center w-full ">Email</label>
        <input id="email" onChange={handleBasicDetail} value={basicDetail.email} placeholder="example@email.com" name="email" type="email" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="image" className="text-center w-full ">Image</label>
        <input id="image" onChange={handleImageChange}  name="image" type="file" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="fatherName" className="text-center w-full ">Father's Name</label>
        <input id="fatherName" onChange={handleBasicDetail} value={basicDetail.fatherName} placeholder="Enter your Father's Name" name="fatherName" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="motherName" className="text-center w-full ">Mother's Name</label>
        <input id="motherName" onChange={handleBasicDetail} value={basicDetail.motherName} placeholder="Enter your Mother's Name" name="motherName" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="dob" className="text-center w-full ">Date of Birth</label>
        <input id="dob" onChange={handleBasicDetail} value={basicDetail.dob} name="dob" type="date" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="experience" className="text-center w-full ">Experience </label>
        <input id="experience" onChange={handleBasicDetail} value={basicDetail.experience} placeholder="Experience..." name="experience" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="hobbies" className="text-center w-full ">Hobbies</label>
        <input id="hobies" onChange={handleBasicDetail} value={basicDetail.hobby} placeholder="Hobby here..." name="hobby" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="strength" className="text-center w-full ">Strength</label>
        <input id="strength" onChange={handleBasicDetail} value={basicDetail.strength} placeholder="Strength here..." name="strength" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="maritalStatus" className="text-center w-full ">Marital Status</label>
        <input id="maritalStatus" onChange={handleBasicDetail} value={basicDetail.maritalStatus} placeholder="Matital Status" name="maritalStatus" type="text" className="border-2 text-center w-full border-black bg-green-100" />
        <label htmlFor="objective" className="text-center w-full ">Carrier Objective</label>
        <input id="objective" onChange={handleBasicDetail} value={basicDetail.objective} placeholder="Career Objectives here.." name="objective" type="text" className="border-2 text-center w-full border-black bg-green-100" />
      </div>

      <div className="w-full sm:w-1/2  mx-4 flex flex-col space-y-2 px-4 mt-2">
        <h4 className="text-2xl font-serif text-center w-full mt-4"> Additioal Details</h4>
        <label htmlFor="skill" className="text-center w-full ">All Skills</label>
        <input
          id="skill"
          placeholder="Add Skills"
          type="text"
          value={technicalSkills}
          onChange={handleSkill}
          className=" mb-2 border-2 text-center w-full border-black bg-green-100"
        />
        <button
          onClick={handleSkillSubmit}
          className="bg-blue-500 w-full rounded-full hover:bg-red-500"
        >
          Add
        </button>

        {/* table input */}
        <h4 className="pt-4 text-2xl font-serif text-center w-full ">Academic Details</h4>
        <label htmlFor="year" className="text-center w-full ">Completion year</label>
        <input
          id="year"
          className="border-2 text-center w-full border-black bg-green-100"
          value={qualification.year}
          onChange={handleInput}
          type="number"
          name="year"
          placeholder="Year"
        />
        <label htmlFor="college" className="text-center w-full ">College/School</label>
        <input
          id="college"
          className="border-2 text-center w-full border-black bg-green-100"
          value={qualification.college}
          onChange={handleInput}
          type="text"
          name="college"
          placeholder="College"
        />
        <label htmlFor="university" className="text-center w-full ">University/Board</label>
        <input
          id="university"
          className="border-2 text-center w-full border-black bg-green-100"
          value={qualification.university}
          onChange={handleInput}
          type="text"
          name="university"
          placeholder="University"
        />
        <label htmlFor="course" className="text-center w-full ">Course</label>
        <input
          id="course"
          className="border-2 text-center w-full border-black bg-green-100"
          value={qualification.course}
          onChange={handleInput}
          type="text"
          name="course"
          placeholder="Course"
        />
        <label htmlFor="fullMarks" className="text-center w-full ">Full Marks</label>
        <input
          id="fullMarks"
          className="border-2 text-center w-full border-black bg-green-100"
          value={qualification.fullMarks}
          onChange={handleInput}
          type="number"
          name="fullMarks"
          placeholder="FullMarks"
        />
        <label htmlFor="obtainMarks" className="text-center w-full ">Obtain Marks</label>
        <input
          id="obtainMarks"
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
