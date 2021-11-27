import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReqList from '../../components/admin/reqList';
//import { listPosts } from '../../modules/posts';

const ReqListContainer = ({ location }) => {
  /*
  const dispatch = useDispatch();
  const { error, user } = useSelector(({ user }) => ({
    error: user.error,
    //loading: loading['posts/LIST_POSTS'],
    user: user.user,
  }));
*/

  /*
  useEffect(() => {
    const { tag, username, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, location.search]);
    */

  return <ReqList /*loading={loading} error={error} user={user}*/ />;
};

export default withRouter(ReqListContainer);
