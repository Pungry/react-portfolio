import React from "react";

//links to github, linkedin, to projects all with descriptions; resubmit after
//join seattle js hackers
//email marilyn

function About() {
  return (
    <div>
      <main className="container bottom">
      <h1>Portfolio/Projects</h1>
      <hr/>
      <article className="row">
          <a href="https://www.linkedin.com/in/quint-turner-13782b62/" target="_blank">&nbsp;&nbsp;&nbsp;LinkedIn Page</a>
      </article>
      <br/>
      <article className="row">
        <a href="https://github.com/Pungry" target="_blank">&nbsp;&nbsp;&nbsp;GitHub Portfolio</a>
      </article>
      <br/>
      <article className="row">
      &nbsp;&nbsp;&nbsp;Link to WiSyRD, an app that replaces clunky character sheets for 5E D&D:<a href = "https://wisyrd.herokuapp.com/" target = "_blank">&nbsp;https://wisyrd.herokuapp.com/</a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GitHub Page: <a href= "https://github.com/wisyrd/WiSyRD" target = "_blank">&nbsp;https://github.com/wisyrd/WiSyRD</a>
      </article>
      <br/>
      <article className="row">
      &nbsp;&nbsp;&nbsp;Link to Dragalia Weapon Tracker, an app that tracks progress in Dragalia Lost:<a href = "https://dragalia-weapon-tracker.herokuapp.com/" target = "_blank">&nbsp;&nbsp;&nbsp;https://dragalia-weapon-tracker.herokuapp.com/</a>
      &nbsp;&nbsp;&nbsp;GitHub Page: <a href= "https://github.com/Pungry/dragalia-weapon-tracker" target = "_blank">&nbsp;https://github.com/Pungry/dragalia-weapon-tracker</a>
      </article>
      <br/>
      <article className="row">
      &nbsp;&nbsp;&nbsp;Link to GymBro, an app that pairs users with a workout and playlist of songs:<a href = "https://dan-gentile.github.io/gym-bro/" target = "_blank">&nbsp;https://dan-gentile.github.io/gym-bro/</a>
      &nbsp;&nbsp;&nbsp;
      GitHub Page: <a href= "https://github.com/dan-gentile/gym-bro" target = "_blank">&nbsp;https://github.com/dan-gentile/gym-bro</a>
      </article>
      <br/>
      <article className="row">
      &nbsp;&nbsp;&nbsp;Link to Ality, an easy-to-use stat-crunching app:<a href = "https://ality-stats.herokuapp.com/">&nbsp;https://ality-stats.herokuapp.com/</a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      GitHub Page: <a href= "https://github.com/natewinter/Ality" target = "_blank">&nbsp;https://github.com/natewinter/Ality</a>
      </article>
    </main>
    </div>
  );
}

export default About;
