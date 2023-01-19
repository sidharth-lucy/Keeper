function Footer(){

    const year = new Date().getFullYear();
    return (
        <div className="foot">
            <p>Copyright {year}</p>
        </div>
    );
}


export default Footer;