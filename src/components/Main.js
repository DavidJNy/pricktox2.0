import proPix from './images/meprofile.jpg';
import luckyPic from './images/luckypic.jpg'

function AboutUs() {

    
    return (
        <div>
            <div>
                <h1>
                    <u>Welcome to PrickTox!</u>
                </h1>
                <h5>Insert cool graphics here (I'm an engineer, not a designer)</h5>
            </div>
            <div>
                <div>
                    <div>
                        <p>My name is David Ny and I'm a web developer.</p>
                        <p>
                        The name PrickTox is a rough phonetic english transcription translation for fried chili in Thai. 
                        <br/>Its a nice snack to have if you like spicy chips like hot cheetos. It is very delicious.
                        </p>
                        <p>
                            Southern California kid for hire. Ex-biochemist from UCSC always looking for new things to learn. 
                            Currently transitioning to get into tech. 
                            Interested in frontend,backend, and also data science. 
                        </p>
                    </div>
                    <div>
                        <figure>
                            <img src={proPix} class="" alt="mepro" />
                        </figure>
                    </div>
                    <div class=" ">
                    <img alt='LuckPic' class='' width="200px" src={luckyPic}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

//https://www.youtube.com/watch?v=O4u8n_CjUDY&ab_channel=Honoka%26Azita
//Maybe add https://codepen.io/wefiy/pen/WPpEwo (Tacky matrix wallpaper behind logo) :)