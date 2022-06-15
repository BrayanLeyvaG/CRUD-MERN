import React from "react";
import { UsersList } from "../components/UsersList";

export const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Brayan Leyva",
      image: "https://picsum.photos/400/400",
      places: 3,
    },
  ];
  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};
