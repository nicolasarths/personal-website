const mailtoConverter = (email, subject, string) => {
    let mailto = `mailto:${email}?subject=${subject}&body=${string}`
    mailto = mailto.replace(/\s/g, '%20')
    mailto = mailto.replace(/$/g, '%0D%0A')
    return mailto 
}

export default mailtoConverter;