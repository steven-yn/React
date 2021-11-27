import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';

const ReqListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const RequestPermitButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const ReqItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const ReqItem = ({ users }) => {
  const { user } = users;
  return (
    <ReqItemBlock>
      <SubInfo username={user.username} userid={user._id} />
    </ReqItemBlock>
  );
};

const ReqList = ({ user, loading, error }) => {
  // 에러 발생 시
  if (error) {
    return <ReqListBlock>에러가 발생했습니다.</ReqListBlock>;
  }

  return (
    <ReqListBlock>
      <RequestPermitButton>
        <Button cyan>승인</Button>
      </RequestPermitButton>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!loading && user && (
        <div>
          {user.map((post) => (
            <ReqItem post={user} key={user._id} />
          ))}
        </div>
      )}
    </ReqListBlock>
  );
};

export default ReqList;
