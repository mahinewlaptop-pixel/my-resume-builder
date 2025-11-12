
import "./style.css"
export default function Qualification({educationData}){
    return(
        <div>
            { educationData.length>0 && <h3 className="bg-yellow-100 text-sm font-bold my-4">EDUCATIONAL QUALIFICATION</h3>}
            {educationData.length>0 && 
            
            <table className="border-2 border-black w-full table-fixed">
            <thead className="">
                <tr className="tableBorder">
                    <th className="tableBorder w-1/6">Course</th>
                    <th className="tableBorder w-1/3">College</th>
                    <th className="tableBorder w-1/3">University</th>
                    <th className="tableBorder w-1/12">Year</th>
                    <th className="tableBorder w-1/12">Percent</th>
                </tr>
            </thead>
            <tbody>
                {educationData.map((DataObj)=>{
                    return (
                    <tr key={DataObj.course} className="tableBorder">
                        <td className="tableBorder ">{DataObj.course}</td>
                        <td className="tableBorder ">{DataObj.college}</td>
                        <td className="tableBorder ">{DataObj.university}</td>
                        <td className="tableBorder ">{DataObj.year}</td>
                        <td className="tableBorder ">{((DataObj.obtainMarks/DataObj.fullMarks)*100).toFixed(1)}%</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
            }
        </div>
    );
};