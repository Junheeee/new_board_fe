import BoardDetail from '../../components/board/BoardDetail';
import { useParams } from 'react-router-dom';

export default function DetailContainer() {
  const { no } = useParams();

  return <BoardDetail detailNo={no} />;
}
