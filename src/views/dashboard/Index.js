/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "./List"
import {
  selectAllContact,
  clearAllContact,
  deleteAllContact,
} from "../../redux/actions/contactAction";
import { GET_USERS } from '../../services/ENDPOINT'

const Contacts = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const [users, setUsers] = useState([]);

  const contacts = useSelector((state) => state.contact.contacts);
  const selctedContcats = useSelector(
    (state) => state.contact.selectedContacts
  );

  useEffect(() => {
    getUsers()
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, []);

  const getUsers = async () => {
    const data = await GET_USERS()
    await setUsers(data)
  }

  return (
    <div className="container pt-2">
      {selctedContcats.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllContact())}
        >
          Delete All
        </button>
      ) : null}
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <List contact={contact} key={contact.id} selectAll={selectAll} />
          ))}

          {users.map((contact) => (
            <List contact={contact} key={contact.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
