const Submit = ({value, form}) => { 
    return (<input
        className="form-submit"
        type="submit"
        value={value ? value : "Enviar"}
      />)
}

export default Submit;  