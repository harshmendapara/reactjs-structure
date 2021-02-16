/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector  } from "react-redux";
import {  getContact , addContact, updateContact  } from "../../redux/actions/contactAction";
import shortid from "shortid";
import { useHistory, useParams } from "react-router-dom";

const AddContact = () => {
  let { paramsId } = useParams();
  let history = useHistory();
  const contact = useSelector((state) => state.contact.contact);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const craeteContact = (e) => {
    if (paramsId) {
      const update_contact = Object.assign(contact, {
        name: name,
        phone: phone,
        email: email,
      });
  
      dispatch(updateContact(update_contact));
      history.push("/")
    } else {

      e.preventDefault();
      const new_contact = {
        id: shortid.generate(),
        name: name,
        phone: phone,
        email: email,
      };
      dispatch(addContact(new_contact));
      history.push("/");
    }
  };

  useEffect(() => {
    if (paramsId && contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    } else if (paramsId && contact == null) {
      dispatch(getContact(paramsId));
    }
  }, [contact]);


  return (
    <div className="container card border-0 shadow">
      <div className="card-header">{paramsId ? 'Edit' : 'Add'} User</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            {paramsId ? 'Update': 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
