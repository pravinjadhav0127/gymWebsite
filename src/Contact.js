import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Contact = () => {
  const [user, setUser] = useState({
    fname: "",
    email: "",
    phone: "",
    Message: "",
  });
  let name, value;
  const postData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const SubmitData = async (event) => {
    event.preventDefault();

    const { fname, email, phone, Message } = user;

    if (fname && email && phone && Message) {
      const res = fetch(
        "https://reactfirebase0127-default-rtdb.firebaseio.com/userRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            email,
            phone,
            Message,
          }),
        }
      );
      if (res) {
        setUser({
          fname: "",
          email: "",
          phone: "",
          Message: "",
        });
        alert("Data Stored SuceessFully");
      } else {
        alert("Plz fill the data");
      }
    } else {
      alert("Plz fill the data");
    }
  };
  return (
    <Form method="POST" className="form">
      <FormGroup>
        <Label for="exampleName">Name</Label>
        <Input
          type="text"
          name="fname"
          id=""
          placeholder="Enter Your Name"
          value={user.fname}
          onChange={postData}
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id=""
          placeholder="Enter Your Email"
          value={user.email}
          onChange={postData}
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePhone">Phone No</Label>
        <Input
          type="number"
          name="phone"
          id=""
          placeholder="Phone No "
          value={user.phone}
          onChange={postData}
          autoComplete="off"
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Message</Label>
        <Input
          type="textarea"
          name="Message"
          id=""
          placeholder="Your Message here.... "
          value={user.Message}
          onChange={postData}
          autoComplete="off"
        />
      </FormGroup>

      <Button outline color="secondary" onClick={SubmitData}>
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
