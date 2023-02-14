import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-45251455-2');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Francisco Burchardt - Web Development & UX/UI Designer</title>
                <link rel="canonical" href="https://www.kburchardt.com/" />
                <meta name="description" content="Freelance for hire focused on SEO, Web Development & Data Analysis."/>


<meta property="og:url" content="https://www.kburchardt.com/"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Konrad Burchardt"/>
<meta property="og:image" content="https://www.kburchardt.com/home.png"/>
<meta property="og:image:alt" content="Home page"/>
<meta property="og:description" content=" Freelance for hire focused on SEO, Web Development & Data Analysis."/>
<meta property="og:site_name" content="Konrad Burchardt"/>

            </Helmet>

        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
