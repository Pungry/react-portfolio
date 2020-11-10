import React from "react";

function About() {
  return (
    <div>
      <main className="container bottom">
      <h1>Portfolio</h1>
      <hr/>
      <article className="row">
        <div className="col-md-4 col-sm-12">
          <a href="https://twitter.com/Pungry" target="_blank"><img className="portImg" src="https://www.holderscomponents.com/wp-content/uploads/2017/06/twitter-logo.png" alt="Twitter logo" /></a>
        </div>
        <div className="col-md-2"></div>
        <br/>
        <div className="col-md-4 col-sm-12">
          <a href="https://www.linkedin.com/in/quint-turner-13782b62/" target="_blank"><img className="portImg" src="https://f0.pngfuel.com/png/329/312/in-logo-png-clip-art-thumbnail.png" alt="LinkedIn logo" /></a>
        </div>
      </article>
      <br/>
      <article className="row">
        <div className="col-md-4 col-sm-12">
          <a href="https://www.clippings.me/quintturner" target = "_blank"><img className="portImg" src="https://m.media-amazon.com/images/I/71npg1qupjL._AC_SS350_.jpg" alt="Notebook photo linking to writing portfolio" /></a>
        </div>
        <div className="col-md-2"></div>
        <br/>
        <div className="col-md-4 col-sm-12">
          <a href="https://pungry.wordpress.com/" target = "_blank"><img className="portImg" src="https://media.wordpresstraining.com/wp-content/uploads/2016/08/21182017/wordpress-logo-350x350.png" alt="Wordpress logo" /></a>
        </div>
      </article>
      <br/>
      <article className="row">
        <div className="col-md-4 col-sm-12">
          <a href = "https://www.amazon.com/Lineup-How-Teenage-Sports-Journalist-ebook/dp/B00FUSURVY" target = "_blank"><img className="portImg" src="https://m.media-amazon.com/images/I/51vNEj7RCqL.jpg" alt="Cover of Lineup: How to be a Teenage Sports Journalist" /></a>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 col-sm-12">
          <a href = "https://dan-gentile.github.io/gym-bro/" target = "_blank"><img className="portImg" src = "https://i.imgur.com/VkVKpOS.png" alt = "Logo of GymBro" /></a>
        </div>
      </article>
      <br/>
      <article className="row">
        <div className="col-md-4 col-sm-12">
          <a href = "https://ality-stats.herokuapp.com/"><img className="portImg" src="https://i.imgur.com/kYx5FS4.png" alt="Cover of Lineup: How to be a Teenage Sports Journalist" /></a>
        </div>
      </article>
    </main>
    </div>
  );
}

export default About;
