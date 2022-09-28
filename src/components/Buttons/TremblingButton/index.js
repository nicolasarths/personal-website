const TremblingButton = ({ text, href }) => {
    return (<button className="button trembling" onClick={() => location.href = {href}}>{text}</button>)
}

export default TremblingButton