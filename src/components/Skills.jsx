import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'Javascript', level: 85 },
    { name: 'Python', level: 50 },
    { name: 'React', level: 75 }
  ];
  const professionalSkills = [
    { name: 'Creativity', level: 90 },
    { name: 'Communication', level: 90 },
    { name: 'Problem Solving', level: 75 },
    { name: 'Teamwork', level: 85 }
  ];

  return (
    <>
      <section id="skills">
      <div className='flex justify-center align-middle text-white text-6xl montserrat-7'>
        My <span className='text-orange-400'>&nbsp;Skills</span>
      </div>
      <div className='flex border-gray-700 justify-center flex-col  mt-10 gap-4 shadow-gray-600 shadow-2xl margin margin2 '>
        
        <div className='flex gap-8 ml-10 mr-10 section skills-container'>
        {/* Technical Skills Section */}
        <div className='mt-10 w-4/5 '>
          <h3 className='text-white text-4xl mb-6 text-center'>Technical Skills</h3>
          {technicalSkills.map(skill => (
            <div key={skill.name} className='skill-bar mb-4'>
              <p className='text-white text-xl'>{skill.name}</p>
              <div className='progress-bar bg-gray-800 h-2 rounded-lg relative'>
                <div className='progress bg-orange-400 h-full rounded-lg' style={{ width: `${skill.level}%` }}></div>
                <span className='absolute right-0 text-white text-xs'>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills Section */}
        <div className='mt-10'>
          <h3 className='text-white text-4xl mb-6 text-center'>Professional Skills</h3>
          <div className='flex justify-center gap-10 mt-24 section skills-container'>
            {professionalSkills.map(skill => (
              <div key={skill.name} className='circular-skill'>
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    textColor: '#00ffea',
                    pathColor: '#00ffea',
                    trailColor: '#242424',
                    textSize: '16px'
                  })}
                />
                <p className='text-white text-xl text-center mt-2'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className=' text-white flex justify-center '>
          {/* Add your new section here */}
          <div className='flex justify-center gap-10 mb-4 section skills-container'>
            <div className='border border-gray-800 mt-10 w-52 flex justify-center flex-col items-center'>
              <img src='/Mongodb.png' width={100} height={100} alt='' />
              <span className='text-white text-xl'>MongoDb</span>
            </div>
            <div className='border border-gray-800 mt-10 w-52 flex justify-center items-center flex-col items-center'>
              <img src='/ExpressJs.png' width={100} height={100} alt='' />
              <span className='text-white text-xl'>Express Js</span>
            </div>
            <div className='border border-gray-800 mt-10 w-52 flex justify-center flex-col items-center'>
              <img src='/React.png' width={100} height={100} alt='' />
              <span className='text-white text-xl'>React</span>
            </div>
            <div className='border border-gray-800 mt-10 w-52 flex justify-center flex-col items-center'>
              <img src='/Nodejs.png' width={100} height={100} alt='' />
              <span className='text-white text-xl'>Node Js</span>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Skills;
