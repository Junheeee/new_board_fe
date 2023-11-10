import BoardDetail from '../../components/board/detail/BoardDetail';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import BoardReplys from '../../components/board/detail/BoardReplys';

export default function DetailContainer() {
  const { no } = useParams();
  const isLogin = JSON.parse(String(localStorage.getItem('isLogin')));

  return (
    <>
      <Container fluid>
        <BoardDetail detailNo={no} isLogin={isLogin} />

        <BoardReplys detailNo={no} isLogin={isLogin} />
      </Container>
    </>
  );
}
