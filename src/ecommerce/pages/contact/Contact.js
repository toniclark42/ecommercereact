import React from "react";

const Contact = () => {
    return(
        <main>
        <div className="hero contactHero">
                <div className="hero_text">
                    <h1>Contact Us</h1>
                    <p>For custom cake entries or questions please fill out the form below.</p>
                </div>
        </div> 
        <form name="contactForm" method="post" action="http://localhost:3001/form_submission" id="contactform">
            <legend id="personalinformation">Your Information:</legend>
            <div id="firstNameEntry" className="__input">
                <label htmlFor="firstName" className="contactinfo">First Name:</label> 
                <input type="text"  id="firstName" name="firstName" />
            </div> 
            <div id="lastNameEntry"> 
                <label htmlFor="lastName" className="contactinfo">Last Name:</label> 
                <input type="text" id="lastName" name="lastName" />
            </div> 
            <div id="emailEntry">
                <label htmlFor="emailInput" className="contactinfo">Email Address:</label>
                <input type="email" id="emailInput" name="emailInput" />
                <span className="error" aria-live="polite"></span>
            </div>
            <div id="commentEntry">
                <label htmlFor="commentsEntry" className="contactinfo textarea__label">Comments/Questions:</label>
                <textarea title="Enter questions or comments" name="comments" id="commentsEntry" placeholder="Enter questions or comments here..." cols="100" rows="15" ></textarea>
                <input className="submit" type="submit" value="submit" />  
            </div>
        </form>
        </main>
    )
};

export default Contact;