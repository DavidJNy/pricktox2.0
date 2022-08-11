import { useState, React } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect } from 'react';

function ContactMe () {
    
    const [verified, setVerified] = useState(false);
    const [vistorName, setVistorName] = useState('');
    const [vistorEmail, setVistorEmail] = useState('');
    const [vistorMessage, setVistorMessage] = useState('');
    const publicReChapKey = "6Ldb6tIgAAAAAHjqzENAoVtM-7DPaXvBHjJD4f1Z"
    
    
    function onChange(value) {
        if (value == null) {
            setVerified(false)
        }
        else setVerified(!verified);
        console.log("Captcha value:", value);
        console.log('you passed')
    }

    //we can play around with the buttons and stuff here.
    useEffect(() => {
        // Update the document title using the browser API
        console.log("page reloaded " + new Date())
    });

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_y3y5wnt", "template_mzxvv08", e.target , "NcI_XxwCuCd3nSlEp")
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
                //We can custimize this a bit. follow the error comings through.
            });
        
        setVistorName('');
        setVistorEmail('');
        setVistorMessage('');
    };

        return (
            <section id="Contact" class="d-flex flex-column container p-3">
                <div>
                    <h1 class=''>Contact Me</h1>
                    <hr class='solid'></hr>
                    <p class='summary'>A little more about myself. Started learning <i class="fa-brands fa-2xl fa-html5"></i>  HTML and <i class="fa-brands fa-2xl fa-css3"></i> CSS along with <i class="fa-brands fa-2xl fa-js-square"></i> Javascript in 2017 using freecodecamp, Codecademy &amp; W3. 
                        Then got real serious 2020 when the pandemic hit. Picked up <i class="fa-brands fa-2xl fa-react"></i> React and <i class="fa-brands fa-2xl fa-node"></i> NodeJS &amp; along with Express for Backend application.
                        With a wide variety of helpful resources that other developers share from StackOverflow, Youtube, Medium, and discord; I actually
                        feel confident enough to build this website. <br /><br />Thanks! Much Love  <i class="fa-solid fa-2xl fa-heart"></i>
                    </p>
                    <p>Click here for my Github and Linkedin: &emsp;<a href="https://github.com/DavidJNy"><BsGithub size='2em' color='white' /></a> &emsp; 
                        <a href="https://www.linkedin.com/in/DavidJNy"><BsLinkedin size='2em' color='white'/></a>
                    </p>
                    <hr class="solid"></hr>
                </div>
                <h2> Go ahead and shoot me an email by filling out the form</h2>
                <p> I'm looking all types of work so feel free to contact me &nbsp;
                </p>
                <form name="container" class="row" method="PUT" id="myForm" onSubmit={sendEmail}>
                    <div class='col'>
                        <label class="m-2" htmlFor="name"> Name </label>
                        <input type="text" id="name" name="from_name" class="form-control" placeholder="First Name and Last Name" onChange={event => setVistorName(event.target.value)} value={vistorName} />
                    </div>
                    <div class='col'>
                        <label htmlFor="email" class="form-label m-2"> Email </label>
                        <input type="email" id="email" name="from_email" class="form-control" placeholder="Email" onChange={event => setVistorEmail(event.target.value)} value={vistorEmail}/>
                    </div>
                    <div class='col-12'>
                        <label class="m-2" htmlFor="message">Message</label>
                        <textarea type="message" id="message" name="message" rows="5" class="form-control" placeholder="Tell me what you need help with. :)" onChange={event => setVistorMessage(event.target.value)} value={vistorMessage}/>
                    </div>
                    <div class='d-flex pt-3'>

                    <ReCAPTCHA
                        class="g-recaptcha p-3"
                        sitekey={publicReChapKey}
                        onChange={onChange}
                        theme={'dark'}
                        />
                    <button type="submit" class="btn-lg btn-primary m-3 flex-fill" disabled={false}> Submit </button>
                    </div>
                </form>
                
            </section>
    )
}

export default ContactMe;