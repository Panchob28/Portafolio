import React, { Component } from 'react';
import axios from 'axios';

const API_PATH = '/api/index.php';

class Contact extends Component {

constructor(props) {
  super(props);
  this.state = {
    fname: '',
    lname: '',
    email: '',
    message: '',
    'mailSent': false,
    error:null
  }
}

handleFormSubmit(e) {
  e.preventDefault();
  axios({
    method: 'post',
    url: `${API_PATH}`,
    withCredentials:false,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
};

  render() {

    if(this.props.data){
      var message = this.props.data.contactmessage;
    }


    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="twelve columns">

          <h2> <a href="mailto:hello@kburchardt.com"> burchardt95@gmail.com </a></h2>
           
           </div>    
           


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   
				   </div>

      
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
