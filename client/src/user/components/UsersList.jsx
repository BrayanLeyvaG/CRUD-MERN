import React from "react";
import Card from "../../shared/components/UIElements/Card";
import { UserItem } from "./UserItem";

import "./UsersList.css";

export const UsersList = (props) => {
  if (props.items?.length === 0) {
    return (
      <div className="center">
        <Card>
          <h3>No users found.</h3>;
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items?.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};
