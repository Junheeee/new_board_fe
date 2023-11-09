import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Reply from './reply/Reply';

export default function BoardReply() {
  return (
    <>
      <div id='replys'>
        <Row>
          <Col>
            <Card>
              <div style={{ padding: '10px 20px' }}>
                <Reply type='first' />
                <Reply type='rere' />
                <Reply type='last' />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
