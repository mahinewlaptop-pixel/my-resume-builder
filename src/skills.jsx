export default function Skills({skills}){

    return(
        <div className="w-full mt-4">
            { skills.length>0 && <h3 className="bg-yellow-100 text-sm font-bold mb-1">TECHNICAL SKILLS</h3>}
            <div className="flex w-1/2 flex-wrap">
                {skills.map((value)=> <span key={value} className=" ms-2 font-bold">{value} |</span>)}
            </div>
        </div>
    );
}