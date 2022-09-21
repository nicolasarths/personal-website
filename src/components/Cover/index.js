import Image from "next/image";

const Cover = ({src, alt, style, fit, position, className}) => {
    return (
    <div className={`cover ${className}`}>
       <Image src={src} alt={alt} layout="fill" objectFit={fit} objectPosition={position}/>
    </div>
    )
}

export default Cover;