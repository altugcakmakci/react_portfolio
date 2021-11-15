import React from 'react';
import '../../styles/Portfolio.css';

export default function Portfolio() {
  return (
    <div>
      <section id='mywork' className="mywork">
        <h2>My Work</h2>
        <section className="item-container">
          <article className="item item-main">
            <h3>Trip Expense Planner</h3>
            <a href='https://rta-trip-planner.herokuapp.com/'><img id='project1' src="https://user-images.githubusercontent.com/90043589/139721745-8a4379b1-328b-4e99-8ddb-b902b720a08e.png" className="center" alt="Altug Cakmakci"/></a>
          </article>
     
          <article className="item">
            <h3>Day Planner</h3>
            <img id='project2' src="https://user-images.githubusercontent.com/90043589/135177992-8e09ca2d-d43e-4f26-9f7e-62d24945a021.png" className="center" alt="Altug Cakmakci"/>
          </article>
  
          <article className="item">
            <h3>Weather Dashboard</h3>
            <img id='project3' src="https://user-images.githubusercontent.com/90043589/135177992-8e09ca2d-d43e-4f26-9f7e-62d24945a021.png" className="center" alt="Altug Cakmakci"/>
          </article>

          <article className="item">
            <h3>Tech Blog</h3>
            <a href='https://caa-techblog.herokuapp.com/'><img id='project4' src="https://user-images.githubusercontent.com/90043589/139152637-0aa2a0cf-abb3-43d9-8ab8-29ef4b3baa3f.png" className="center" alt="Altug Cakmakci"/></a>
          </article>

          <article className="item">
            <h3>Note Taker</h3>
            <a href='https://caa-notetaker.herokuapp.com/'><img id='project4' src="https://user-images.githubusercontent.com/90043589/139722827-688fca4c-6489-46ba-afcd-fb7a020ea9b3.png" className="center" alt="Altug Cakmakci"/></a>
          </article>

          <article className="item">
            <h3>Rock Paper Scissors</h3>
            <img id='project6' src="https://user-images.githubusercontent.com/90043589/135673922-43634fd4-6551-4fb1-bf34-cc9a79fc305e.png" className="center" alt="Altug Cakmakci"/>
          </article>
  
          <article className="item">
            <h3>Movie Pal</h3>
            <img id='project7' src="https://user-images.githubusercontent.com/90043589/135674372-d8e2936e-7480-44a5-893a-9012fea9a6b2.png" className="center" alt="Altug Cakmakci"/>
          </article>
  
        </section>
      </section>
    </div>
  );
}
