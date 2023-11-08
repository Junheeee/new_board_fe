import { ChangeEvent, useEffect, useState } from 'react';
import {
  Button,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
  Card,
  Table,
  Container,
  Nav,
  Row,
  Col,
  Spinner
} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import boardApi from '../../service/board';
import { IBoardCreateRq } from '../../types/board';
import CustomDropdownText from '../../components/custom/CustomDropdownText';

export default function BoardForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const PostBoardCreate = boardApi.PostBoardCreate();
  const PostBoardUpdate = boardApi.PostBoardUpdate();

  const [detailNo, setDetailNo] = useState<number>(0);
  const { data, isFetching } = boardApi.GetBoardDetail(detailNo);

  const [choiceVal, setChoiceVal] = useState<string>('DIARY');

  const isLogin = JSON.parse(String(localStorage.getItem('isLogin')));
  const [rq, setRq] = useState<IBoardCreateRq>({
    title: '',
    content: '',
    ctgrDivCd: choiceVal,
    cstmrSno: isLogin?.cstmrSno
  });

  useEffect(() => {
    const pathname = location.pathname.split('/');
    const brdSno = Number(pathname[pathname.length - 1]);

    if (brdSno > 0) setDetailNo(brdSno);
  }, [location]);

  useEffect(() => {
    if (data) {
      const pathname = location.pathname.split('/');
      const brdSno = Number(pathname[pathname.length - 1]);

      if (brdSno !== 0) {
        Object.entries(data).forEach(([key, value]) => {
          if (rq.hasOwnProperty(key)) {
            setRq(prev => ({
              ...prev,
              [key]: value
            }));
          }
        });
        setChoiceVal(data.ctgrDivCd);
      }
    }
  }, [data]);

  const handlerOnChange = (e: any) => {
    const { id, value } = e.target;
    handlerChangeRq(id, value);
  };

  const handlerSubmit = () => {
    if (detailNo === 0) {
      PostBoardCreate.mutate(rq, {
        onSuccess: data => {
          handlerBack();
        }
      });
    } else {
      const data = {
        brdSno: detailNo,
        title: rq.title,
        content: rq.content,
        ctgrDivCd: rq.ctgrDivCd
      };
      PostBoardUpdate.mutate(data, {
        onSuccess: data => {
          navigate(`/board/detail/${detailNo}`);
        }
      });
    }
  };

  const handlerChangeRq = (id: string, value: string) => {
    const _rq = {
      ...rq,
      [id]: value
    };
    setRq(_rq);
  };

  const handlerBack = () => {
    navigate('/');
  };

  const handlerDropdownClick = (val: string) => {
    setChoiceVal(val);
    handlerChangeRq('ctgrDivCd', val);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Header></Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <CustomDropdownText
                      handlerDropdownClick={handlerDropdownClick}
                      choiceVal={choiceVal}
                      type='create'
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      style={{ border: '0px' }}
                      id='title'
                      placeholder='제목을 입력해주세요.'
                      value={rq.title}
                      onChange={handlerOnChange}
                    />
                    <div
                      style={{
                        borderBottom: '1px solid #888888',
                        marginBottom: '10px'
                      }}
                    ></div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      id='content'
                      as='textarea'
                      rows={15}
                      placeholder='내용을 입력해주세요.'
                      value={rq.content}
                      onChange={handlerOnChange}
                    />
                  </Form.Group>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '10px'
                    }}
                  >
                    <Button
                      className='btn-danger btn-fill'
                      style={{ marginRight: '10px' }}
                      onClick={handlerBack}
                    >
                      취소
                    </Button>
                    <Button
                      className='btn-primary btn-fill'
                      onClick={handlerSubmit}
                    >
                      저장
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
