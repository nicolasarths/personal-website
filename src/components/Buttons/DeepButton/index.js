const DeepButton = ({onClick, children}) => {
    return (<button className="deep-button" onClick={onClick}>{children}</button>)
}
export default DeepButton;