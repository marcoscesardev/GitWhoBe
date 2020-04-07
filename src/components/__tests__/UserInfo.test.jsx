import React from 'react';
import { shallow } from '../../config/Enzyme';
import UserInfo from '../UserInfo';

import RepositoriesList from '../RepositoriesList';

describe('UserInfo tests', () => {
  it('should render user info', () => {
    const user = {
      avatar_url: '',
      bio: 'Description of user',
      followers: 4,
      following: 2,
      html_url: 'https://github.com/usertest000',
      login: 'usertest',
      name: 'User Test',
      public_repos: 0,
    };

    const wrapper = shallow(<UserInfo user={user} />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('RepositoriesList').exists()).toBeFalsy();
  });

  it('should render user info and repositories list element', () => {
    const user = {
      avatar_url: '',
      bio: 'Description of user',
      followers: 4,
      following: 2,
      html_url: 'https://github.com/usertest000',
      login: 'usertest',
      name: 'User Test',
      public_repos: 1,
    };

    const wrapper = shallow(<UserInfo user={user} />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('RepositoriesList').matchesElement(
      <RepositoriesList userLogin="usertest" />,
    )).toBeTruthy();
  });
});
