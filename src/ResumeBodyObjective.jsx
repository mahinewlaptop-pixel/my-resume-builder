import "./style.css"
export default function CareerObjective({objective}){
    
    return(
        <div className="w-fit ">
         {objective && <h3 className="mt-2 text-sm font-bold bg-yellow-100">CAREER OBJECTIVE</h3>}
            <p className="pt-1 capitalize">
                {objective}
            </p>
        </div>
    );
}