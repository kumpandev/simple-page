import React from 'react';
import Avatar from '../avatar';
import { ProfileFilledIcon } from '../icons';
import { AVATAR_SIZE_MAP } from '../../helpers/constants';

const UserProfile = props => {
  const { userName } = props;

  return <div className="d-flex aling-items-center">
    <Avatar icon={ProfileFilledIcon} size={AVATAR_SIZE_MAP.LG} />
    <div className="ml-2 user-profile-name">{userName || "Principal Maike"}</div>
  </div>
}

export default UserProfile;