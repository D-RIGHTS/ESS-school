import React from "react";
import "./styles.css";

const FooterSocial = () => {
    return(
        <>
            <div className="footerSocialContainer">
                <section className="secCopyright" >
                    <h4 className="footerCopy">&copy; Essential English School 2021</h4>
                    <p className="footerTerms"><a href="OfflineNote">Terms |</a></p>
                    <p><a href="OfflineNote">Privacy</a></p>
                </section>
                <section className="secIcons">
                    <span className="spanIcons"><a href="OfflineNote"><i className="fab fa-facebook-f"/></a></span>
                    <span className="spanIcons"><a href="OfflineNote"><i className="fab fa-whatsapp"/></a></span>
                    <span className="spanIcons"><a href="OfflineNote"><i className="fab fa-viber"/></a></span>
                    <span className="spanIcons"><a href="OfflineNote"><i className="fab fa-skype"/></a></span>
                    <span className="spanIcons"><a href="OfflineNote"><i className="fab fa-twitter"/></a></span>
                </section>

            </div>
        </>
    )
}

export default FooterSocial;