import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';
import AdminPage from './pages/AdminPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>YXMPORTFOLIO</title>
      </Helmet>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={AdminPage} path="/admin" />
    </>
  );
};
export default App;
