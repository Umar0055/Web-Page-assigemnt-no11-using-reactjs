function Footer(){
    return(
        <footer className="footer">
            <div className="footer-section-left">
                <h2 className="about">About Us</h2>
                <p className="para-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
            <div class="footer-section-center">
                <h1 className="page">page</h1>
                <div className="img-section">
                    <img className="img1" src="/pic.jpg" alt=""/>
                    <p className="para2">sainciascnisancaisncainciasncindisjcnsjid nji   si indicsnidsnci dcnsc i</p>
                </div><br/>
                <br/>
                <div className="img-section">
                   <br/> 
                    <img  className="img1" src="/pic.jpg" alt=""/>
                    <p className="para2">sainciascnisancai sncainciasnci ndisjcnsjid nji   si indicsnidsnci dcnsc i</p>
                </div>
            </div>
            
            <div className="footer-section-right">
                <h2 className="follow">follow us</h2>
          <table className="links">

              <tr>

                  <th><i  id="insta" className="fa-brands fa-instagram"></i></th>
                 <th><i  id="face" className="fa-brands fa-facebook"></i></th>
                 <th><i id="what" className="fa-brands fa-whatsapp"></i></th>
                  
                </tr>
            </table>
           </div>
        </footer>
    
    );
}
export default Footer;