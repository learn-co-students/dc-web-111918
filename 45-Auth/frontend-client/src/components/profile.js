import React from "react";
import { Card, Image } from "semantic-ui-react";
import {Redirect} from 'react-router-dom'

/* props: {
  avatar: 'someURL',
  username: 'chandler Bing',
  bio: 'i like eggs'
} */

const Profile = ({ user }) => (
  <Card>
    <Image src={user.avatar} />
    <Card.Content>
      <Card.Header>{user.username}</Card.Header>

      <Card.Description>{user.bio}</Card.Description>
    </Card.Content>
  </Card>
);

export default Profile;
