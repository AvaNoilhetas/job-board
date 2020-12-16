import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";
import Job from "./components/Job";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header title="The Job Board" />
      <Jobs>
        <Job
          className="red"
          title="Full Time Sales Associte - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="green"
          title="Agent de sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="France"
        />
        <Job
          className="yellow"
          title="Responsable d'atelier"
          contractType="CDD"
          country=""
          city=""
        />
        <Job
          className="blue"
          title="Chef de projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          className="pink"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          className="red"
          title="Sale Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Job
          className="green"
          title="Vendeur/se - CransMontana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
        <Job
          className="yellow"
          title="CRM &amp; Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        />
        <Job
          className="blue"
          title="Infermier/ère"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </Jobs>
      <Footer
        text={["Made in ", <strong>React</strong>, "by ", <strong>Me</strong>]}
      />
    </Fragment>
  );
}

export default App;
