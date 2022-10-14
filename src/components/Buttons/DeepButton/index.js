import Button from "../Button";

const DeepButton = ({children, ...props}) => {
    return (<Button type="deep" {...props}>{children}</Button>)
}
export default DeepButton;