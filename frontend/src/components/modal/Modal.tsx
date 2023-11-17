import "../agenda/agendar.scss";

interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    title: string;
    
    
}

const Modal = ({ isOpen, setOpen, title }: IModal) => {
    if (isOpen){
    return (
        <div className="background">
            
            <div className="modal">
                <h2>{title}</h2>
                    
                <span className="close" onClick={() => setOpen(!isOpen)}>          X
                </span>               
            </div>
        </div>
    );
    }else{
        return <></>
    }
};

export default Modal;