import proPix from './images/meprofile.jpg';
import luckyPic from './images/luckypic.jpg';

function About() {
    return (
        <div>
            <div>
                <p>My name is David Ny and I'm a web developer.</p>
                <p>
                    The name PrickTox is a rough phonetic english transcription translation for fried chili in Thai.
                    <br />Its a nice snack to have if you like spicy chips like hot cheetos. It is very delicious.
                </p>
                <p>
                    Southern California kid for hire. Ex-biochemist from UCSC always looking for new things to learn.
                    Currently transitioning to get into tech.
                    Interested in frontend,backend, and also data science.
                </p>
            </div>
            <div>
                <img src={proPix} class="" alt="mepro" />
            </div>
            <div class=" ">
                <img alt='LuckPic' class='' width="200px" src={luckyPic}></img>
            </div>
        </div>
    );
}

export default About;