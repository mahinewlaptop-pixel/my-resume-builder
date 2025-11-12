import "./style.css"
export default function ResumeHead({basicDetail}){

    return(
    <div className="flex justify-around w-full h-1/6">
        <div className=" me-10">
            <h1 className="text-red-900 text-7xl mt-2 capitalize">{basicDetail.name}</h1>
            <a className="ps-2">Add :- {basicDetail.address}</a>
            <p className="ps-2">
                <span className="pe-4">Mob- +91 {basicDetail.mobile}</span><a href={`mailto:${basicDetail.email}`}>Email- {basicDetail.email}</a>
            </p>
        </div>
        <div >
            <img className="  rounded-full box-content size-32 border-4 border-black" src={basicDetail.image===""? "https://images.unsplash.com/photo-1666852327656-5e9fd213209b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500": basicDetail.image} ></img>
        </div>
    </div>
    );
}