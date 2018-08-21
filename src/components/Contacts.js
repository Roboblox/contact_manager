import React, { Component } from "react";
import Contact from "./Contact";

export class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "JohnDoe@mail.com",
        phone: "444-444-4444"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karene@mail.com",
        phone: "555-555-5555"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@mail.com",
        phone: "333-333-3333"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
