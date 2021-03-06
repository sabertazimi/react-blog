import React from 'react';
import { Avatar, Card, Badge, Typography } from 'antd';
import { useSiteMetadata } from '@hooks';
import { getRandomColor } from '@config';
import GithubCardHeader from './GithubCardHeader';
import GithubCardContent from './GithubCardContent';
import GithubRepoCard from './GithubRepoCard';

const GithubCard = ({ github }) => {
  const { profile, repos } = github;
  const { email } = useSiteMetadata();

  if (profile && repos) {
    return (
      <Badge.Ribbon text={profile.username} color={getRandomColor()}>
        <Card hoverable title={<GithubCardHeader profile={profile} />}>
          <Card.Meta
            avatar={<Avatar src={profile.avatar} />}
            title={<GithubCardContent profile={profile} />}
            description={`Joined in ${profile.createDate}`}
          />
          {repos.map((repo, index) => (
            <GithubRepoCard key={index} repo={repo} />
          ))}
        </Card>
      </Badge.Ribbon>
    );
  }

  return (
    <div className="mx-auto my-0 text-center">
      <Typography.Title>
        Please mail to <a href={`mailto:${email}`}>me</a>.
      </Typography.Title>
    </div>
  );
};

export default GithubCard;
