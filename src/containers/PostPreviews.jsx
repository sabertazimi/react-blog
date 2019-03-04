import React, { Component } from 'react';

import { Error, PageLoader } from '../components';
import PostPreviews from '../components/GridPostPreviews';

class PostPreviewsContainer extends Component {
  state = {
    activePage: 1
  };

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    const { data, error, isLoading, history } = this.props;
    const { activePage } = this.state;

    if (error) {
      return (
        <Error message={{ header:'Bad Request' }} history={history} />
      );
    }

    if (isLoading || !data) {
      return (
        <PageLoader message='Loading' />
      );
    }

    return (
      <PostPreviews
        activePage={activePage}
        history={history}
        data={data}
        onPageChange={this.handlePaginationChange}
      />
    );
  }
}

export default PostPreviewsContainer;