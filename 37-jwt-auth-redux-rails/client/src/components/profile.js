import React from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

const Profile = (props) => (
  <Card>
    <Image src={props.avatar} />
    <Card.Content>
      <Card.Header>{props.username}</Card.Header>

      <Card.Description>{props.bio}</Card.Description>
    </Card.Content>
  </Card>
)

const mapStateToProps = /*FUNCTION*/ (reduxStoreState) => { //TODO: user obj destructuring
  return {
    avatar: reduxStoreState.usersReducer.user.avatar,
    username: reduxStoreState.usersReducer.user.username,
    bio: reduxStoreState.usersReducer.user.bio
  }
}

// const connectedToReduxHOC = connect(mapStateToProps)
// const connectedProfile = connectedToReduxHOC(Profile)
//
// const withAuthProfile = withAuth(connectedProfile)
//
// export default withAuthProfile

export default withAuth(connect(mapStateToProps)(Profile))
