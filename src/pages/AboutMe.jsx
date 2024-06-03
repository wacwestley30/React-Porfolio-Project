/*
- WHEN I load the portfolio the first time
- THEN the About Me title and section are selected by default

- WHEN I am presented with the About Me section
- THEN I see a recent photo or avatar of the developer and a short bio about them
*/

export default function AboutMe() {
  return (
    <div className="container">
      <h1 className="my-4">About Me</h1>
      <div className="row align-items-center">
        <div className="col-md-2">
          <img className="aboutMeImage img-fluid rounded-circle" src='/src/assets/images/WesInWhite.jpg' alt="Photo of Westley in business attire"/>
        </div>
        <div className="col-md-10">
          <p>
            With a solid foundation in electrical work and welding, I have recently transitioned into the field of software development. My background has equipped me with a strong work ethic, attention to detail, and the ability to work collaboratively with diverse teams. These skills have been instrumental in my journey from working on complex technical issues in the manufacturing sector to developing innovative software solutions. My experience in troubleshooting and problem-solving has seamlessly translated into the world of coding, where I enjoy tackling challenging projects and continuously learning new technologies.
          </p>
          <p>
            Throughout my professional career, I have demonstrated a commitment to continuous improvement and adaptability. Whether it was ensuring project success in welding and electrical work or mastering new programming languages and frameworks, I have always been dedicated to achieving excellence. My technical skills now encompass a wide range of software development tools and methodologies, including Agile development, React, Node.js, and various database management systems. This diverse skill set has enabled me to successfully complete projects such as developing a social media API, an SQL employee tracker, and an e-commerce back-end application.
          </p>
          <p>
            As I continue to grow in the tech industry, I am excited to leverage my technical acumen and passion for innovation to contribute to meaningful software projects. My journey from hands-on electrical and welding work to full-stack web development reflects my drive for learning and adapting to new challenges. I am eager to collaborate with like-minded professionals and contribute to projects that drive business growth and technological advancement.
          </p>
        </div>
      </div>
    </div>
  );
}