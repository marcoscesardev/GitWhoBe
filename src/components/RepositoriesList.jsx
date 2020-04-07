// react
import React, { useEffect, useState } from 'react';

// third-party
import PropTypes from 'prop-types';
import axios from 'axios';


export default function RepositoriesList(props) {
  const { userLogin } = props;
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios
      .get(`/users/${userLogin}/repos`)
      .then(({data}) => {
        setRepositories(
          data.sort((repoA, repoB) => {
            return repoB.stargazers_count - repoA.stargazers_count;
          })
        );
      });
  }, []);

  return (
    <div className="repositories-list">
      {repositories.map(function(repo, idx){
        return (
          <a key={idx} href={repo.clone_url} className="repositories-list__link">
            <div className="repositories-list__item">
              <div className="repositories-list__repo-name">
                {repo.name}
              </div>
              <div className="repositories-list__stars-count">
                {repo.stargazers_count}★
              </div>
            </div>
          </a>
        )
      })}
    </div>
  );
}

RepositoriesList.propTypes = {
  userLogin:  PropTypes.string.isRequired,
};
