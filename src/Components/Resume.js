import React, { Component } from 'react';


class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <h6>{education.location}</h6>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
        <h6>{work.location}</h6>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var dis = this.props.data.dis.map(function(dis){
        var projectImage = 'images/tools-img/'+dis.image;
        return <div key={dis.title}>
              <a href={dis.url} title={dis.title} target="_blank" rel="noopener noreferrer">
                <div className="box">
                  <img src={projectImage} alt={dis.name + " logo"} />
                    <h6> {dis.name}</h6>
                </div>
               </a> 
              </div> 
      })
      var code = this.props.data.code.map(function(code){
        var projectImage = 'images/tools-img/'+code.image;
        return <div key={code.title}>
              <a href={code.url} title={code.title} target="_blank" rel="noopener noreferrer">
                <div className="box">
                  <img src={projectImage} alt={code.name + " logo"} />
                    <h6> {code.name}</h6>
                </div>
               </a> 
              </div> 
      })

      var languages = this.props.data.languages.map(function(languages){
        var projectImage = 'images/languages/'+languages.image;
        return <div key={languages.title}>
                <div className="box">
                  <img src={projectImage} alt={languages.name} />
                    <h6> {languages.name}</h6>
                </div>
              </div> 
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Educacion</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Pro Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>
			</div>
      <div className="skill_column">
      <h1> Diseño - UX/UI </h1>
      {dis}
      </div>

      <div className="skill_column">
      <h1> Codigo & Tecnologia </h1>
      {code}
      </div>

      <div className="skill_column">
      <h1> Languages </h1>
      {languages}
      </div>

      </div>
   </section>
    );
  }
}

export default Resume;
