import React from "react";

function Home() {
  return (
    <div>
      <main class="container">
      <h1>About Me</h1>
      <hr/>
      <img className="aboutMeImg" src="https://www.gannett-cdn.com/presto/2019/09/19/USAT/c1421ef3-cbdc-44f8-abda-7029d51f14d0-african_penguin.jpg?crop=4016,4016,x1804,y0&width=150&height=150&format=pjpg&auto=webp" alt="Close up picture of a penguin" />
      <p className = "aboutMe">
        I'm Quint Turner. As you can see by my selfie on the left, I love penguins. But I also love other things. When I'm not writing code, I'm probably writing comedic blog posts, playing video games, or watching sports. If you move on over to my portfolio page, you'll find a few links to places you can find what I've written, coding or otherwise. 
        <br/>
        <br/>
        I pride myself on seeing through long, complex projects. Though I may not take the most efficient path, I'll get there. And hopefully with my personality shining through.
        <br/>
        <br/>
        You can reach me via my cellular device at 206-914-2774, or via email at henryquintturner@gmail.com.
      </p>
    </main>
    </div>
  );
}

export default Home;
