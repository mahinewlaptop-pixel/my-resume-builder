export default function PersonalDetail({profile}){
    // const profile ={
    //     fatherName:"Father kumar",
    //     motherName:"Mother Kumari",
    //     dob:"00/00/0000",
    //     experience:"Fresher",
    // };
    
    const listItems = [];
    for(const key in profile){
        if(Object.hasOwnProperty.call(profile, key)){
            const value = profile[key];
            listItems.push(
                <li key={key} className="flex justify-around">
                    <div className="capitalize font-bold">{key}</div>
                    <div>:</div>
                    <div className="capitalize">{value}</div>
                </li>
            );
        }
    }
    return(
    <ul className=" mt-2 ">
        <h3 className="mb-2 bg-yellow-100 text-sm font-bold">PERSONAL DETAIL</h3>
        {listItems}
    </ul>
    );
}