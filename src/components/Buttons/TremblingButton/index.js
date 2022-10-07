const TremblingButton = ({ text, onClick }) => {
    return (<button className="button trembling" onClick={onClick}>{text}</button>)
}

export default TremblingButton