export default function mailtoConverter(email, subject, string){
    let mailto = `mailto:${email}?subject=${subject}&body=${string}`
    mailto = mailto.replace(/\s/g, '%20')
    return mailto 
}