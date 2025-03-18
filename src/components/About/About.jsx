import './About.css';
import me from '../../assets/profilepic.jpg';

function About() {
  return (
    <div className='about'>
      <img src={me} alt='Picture of Gerald Planty' className='about__picture' />
      <div className='about__content'>
        <h2 className='about__header'>About the author</h2>
        <p className='about__description'>
          My name is Gerald Planty, and I studied at TripleTen, where I gained
          expertise in web development. My training included HTML, CSS,
          JavaScript, React, Node.js, and backend technologies, equipping me
          with the skills to build dynamic and scalable applications. <br></br>
          <br></br>I had an incredible experience at TripleTen, where they
          helped me take my first steps into the tech industry and embark on a
          truly unique journey. I've always been passionate about technology and
          software, but until now, I hadn't found a way to turn that interest
          into a reality.
        </p>
      </div>
    </div>
  );
}

export default About;
