/*
- WHEN I load the portfolio the first time
- THEN the About Me title and section are selected by default

- WHEN I am presented with the About Me section
- THEN I see a recent photo or avatar of the developer and a short bio about them
*/

export default function AboutMe() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="row align-items-center">
        <div className="col-md-4">
          <img className="aboutMeImage img-fluid rounded-circle" src='/src/assets/images/WesInWhite.jpg' alt="Photo of Westley in business attire"/>
        </div>
        <div className="col-md-8">
          <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
          </p>
        </div>
      </div>
    </div>
  );
}