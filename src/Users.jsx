import React from "react";
import User from "./User";
const Users = ({ users }) => {
  return (
    <div>
      {users.length === 0 ? (
        <h2>No users</h2>
      ) : (
        users.map((user) => (
          <User
            key={user.div}
            name={user.name}
            phone={user.phone}
            email={user.email}
            website={user.website}
            location={`${user.address.city}, ${user.address.zipcode}`}
            company={user.company.name}
            userid={user.id}
          />
        ))
      )}
    </div>
  );
};

export default Users;
