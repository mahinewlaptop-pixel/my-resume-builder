export default function Footer({name="Shample Kumar"}){
    const currentDate = new Date().toDateString();
    return(
    <footer className=" pt-2 px-2 fixed bottom-4 flex invisible print:visible">
        <div><b>Date :</b> {currentDate}</div>
        <div className="flex flex-col pl-14 ml-96"><p className="text-center"><b>Signature</b></p><p className="text-center">{name}</p></div>
    </footer>
);
}