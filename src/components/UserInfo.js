// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';

export default function UserInfo(props) {
  const { user, setUser } = props;

  if (!user) {
    return null;
  }

  return (
    <div className="puff-in-center">
      <div className="user-info">
        <div className="user-info__main">
          <img src={user.avatar_url} />
          <h3>{user.name}</h3>
          <h4>@{user.login}</h4>
          <h4>{user.bio}</h4>
        </div>
        <div className="user-info__basic">
          <h5>Seguidores: <span>{user.followers}</span></h5>
          <hr/>
          <h5>Seguindo: <span>{user.following}</span></h5>
          <hr/>
          <h5>Repositórios: <span>{user.public_repos}</span></h5>
        </div>
      </div>
      <div className="user-info__action">
        <a className="btn" onClick={() => { setUser(null) }}>
          Voltar
        </a>
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    html_url: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    public_repos: PropTypes.number,
    stargazers_count: PropTypes.number,
  }).isRequired,
  setUser: PropTypes.func,
};
