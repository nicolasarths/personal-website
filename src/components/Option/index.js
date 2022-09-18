import Button from "../Button"

const Option = ({option}) => {
    return <Button onClick={() => location.href = option.href} text={option.text}/>
  }

export default Option;