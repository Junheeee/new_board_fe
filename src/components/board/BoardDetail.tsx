import { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import boardApi from '../../service/board';
import { useNavigate } from 'react-router-dom';

export default function BoardDetail({ detailNo }) {
  const navigate = useNavigate();
  const { data, isFetching } = boardApi.GetBoardDetail(detailNo);
  const PostBoardUpdate = boardApi.PostBoardUpdate();
  const GetBoardDelete = boardApi.GetBoardDelete();
  const PostBoardUpdateViews = boardApi.PostBoardViews();

  const [isModify, setIsModify] = useState<boolean>(false);

  const [rq, setRq] = useState<any>();

  useEffect(() => {
    if (!isFetching && data) {
      PostBoardUpdateViews.mutate(data?.boardSno);
      setRq({ ...data });
    }
  }, [isFetching]);

  const handlerOnChange = (e: any) => {
    const { id, value } = e.target;
    setRq(_rq => ({
      ..._rq,
      [id]: value
    }));
  };

  const handlerSubmit = () => {
    const { boardSno, title, content, ctgrDivCd } = rq;
    const data = {
      boardSno: boardSno,
      title: title,
      content: content,
      ctgrDivCd: ctgrDivCd
    };
    PostBoardUpdate.mutate(data, {
      onSuccess: data => {
        handlerModify();
      }
    });
  };

  const handlerDelete = () => {
    GetBoardDelete.mutate(Number(detailNo), {
      onSuccess: data => {
        handlerBack();
      }
    });
  };

  const handlerModify = () => {
    setIsModify(!isModify);
  };

  const handlerBack = () => {
    navigate('/');
  };

  return (
    <>
      {!isFetching && rq ? (
        <div>
          <InputGroup className='mb-3'>
            <div className='d-flex me-md-3'>
              <div>
                <Button variant='primary'>{data?.ctgrDivCd}</Button>
              </div>
            </div>
            <InputGroup.Text>제목</InputGroup.Text>
            <Form.Control
              id='title'
              disabled={!isModify}
              value={rq?.title}
              onChange={handlerOnChange}
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroup.Text>내용</InputGroup.Text>
            <Form.Control
              id='content'
              as='textarea'
              rows={10}
              disabled={!isModify}
              value={rq?.content}
              onChange={handlerOnChange}
            />
          </InputGroup>
          <div className='d-flex gap-2 justify-content-center'>
            <Button
              variant='primary'
              onClick={isModify ? handlerModify : handlerBack}
            >
              {isModify ? '취소' : '목록'}
            </Button>
            {!isModify ? (
              <>
                <Button variant='primary' onClick={handlerModify}>
                  수정
                </Button>
                <Button variant='primary' onClick={handlerDelete}>
                  삭제
                </Button>
              </>
            ) : (
              <Button variant='primary' onClick={handlerSubmit}>
                저장
              </Button>
            )}
          </div>
        </div>
      ) : (
        <>로딩중</>
      )}
    </>
  );
}
