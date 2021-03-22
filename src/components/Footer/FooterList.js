import React from "react";
import "./styles.css"
import FooterForm from "./FooterForm";

function FooterList () {
    return(
        <>
            <div className="footerContainer">
                <section>
                    <h3>About ESS</h3>
                    <br />
                    <p><a href="OfflineNote">Faculties</a></p>
                    <p><a href="OfflineNote">Course Duration</a></p>
                    <p><a href="OfflineNote">Selected Course</a></p>
                </section>
                <section>
                    <h3>Study Material</h3>
                    <br />
                    <p><a href="OfflineNote">Speak Out</a></p>
                    <p><a href="OfflineNote">New English File</a></p>
                    <p><a href="OfflineNote">Oxford English</a></p>
                </section>
                <section>
                    <p>Still on sure whether to join or not? Don't worry! </p>
                    <br />
                    <p>Subscribe to our NewsFeed</p>
                    <br />
                    <FooterForm />
                </section>
            </div>
        </>
    )
}

export default FooterList;