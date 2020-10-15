import React from "react";
import { Link } from "@reach/router";

const User = ({ userid, name, phone, email, website, company, location }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>
        Phone:{" "}
        <a target="new" href={`tel:${phone}`}>
          {phone}
        </a>
      </p>
      <p>
        Email:{" "}
        <a target="new" href={`http://www.${email}`}>
          {email}
        </a>
      </p>
      <p>
        Website: <a href={`http://www.${website}`}>{website}</a>
      </p>
      <p>Company: {company}</p>
      <p>Location: {location}</p>
      <p>
        <Link to={`/albums/${userid}`}>{name}'s Photo Albums</Link>
      </p>
    </div>
  );
};
export default User;
