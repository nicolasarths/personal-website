const DeepButton = ({children, ...props}) => {
    return (<button className="deep-button" {...props}>{children}</button>)
}
export default DeepButton;