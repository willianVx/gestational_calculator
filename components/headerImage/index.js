const HeaderImage = ({ src, alt }) => {
    return(
        <div style={{textAlign: "center"}}>
            <img src={src} alt={alt} style={{maxWidth: "100%"}} />
        </div>
    )
}
export default HeaderImage;  
