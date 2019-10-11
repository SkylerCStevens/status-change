import React, { Component } from 'react';

class Status extends Component {
    state = {
      contacts: [
        {
          firstName: "Skyler",
          lastName: "Stevens",
          phone: "555-555-5555",
          buttonId: "button-0",
          divId: "div-0",
          status: "Pending...",
          style: {
          backgroundColor: "orange"
           
        }
        },
        {
          firstName: "Ryan",
          lastName: "McKenna",
          phone: "555-555-5555",
          buttonId: "button-1",
          divId: "div-1",
          status: "Pending...",
          style: {
          backgroundColor: "orange"
        }
        },
        {
          firstName: "John",
          lastName: "James",
          phone: "555-555-5555",
          buttonId: "button-2",
          divId: "div-2",
          status: "Pending...",
          style: {
          backgroundColor: "orange"
        }
        },
        {
          firstName: "Sally",
          lastName: "Smith",
          phone: "555-555-5555",
          buttonId: "button-3",
          divId: "div-3",
          status: "Pending...",
          style: {
          backgroundColor: "orange"
        }
        }
      ]
    };
    switchStatusHandler = (i) => {
      let changeStatus = this.state;
      changeStatus.contacts[i].status = "Done!";
      changeStatus.contacts[i].style = {
        backgroundColor: "green"
      }
      this.setState(changeStatus)
    };
    render() {
      let contacts = this.state.contacts;
      return (
        <div>
          {contacts.map((contact,i) => {
            return (
              <div key={contact.divId}>
                <p key={contact.firstName}>
                  Please contact {contact.firstName} {contact.lastName} at {contact.phone}.
                </p>
                <button key={contact.buttonId} style={contact.style} onClick={this.switchStatusHandler.bind(this, i)}>{contact.status}</button>
              </div>
            );
          })}
        </div>
      );
    }
  }

  export default Status;