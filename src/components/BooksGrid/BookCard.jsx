import React from 'react';
import { Badge, Card } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { getRandomColor } from '@config';

const BookCard = ({ data }) => {
  const { title, url, author, description } = data;

  return (
    <Badge.Ribbon text={title} color={getRandomColor()}>
      <Card
        hoverable
        title={
          <a href={url}>
            <BookOutlined className="text-6xl align-top" />
            <span className="text-span-xl">{title}</span>
          </a>
        }
      >
        <Card.Meta title={description} description={`Written by ${author}`} />
      </Card>
    </Badge.Ribbon>
  );
};

export default BookCard;
