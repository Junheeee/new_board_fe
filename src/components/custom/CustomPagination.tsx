import Pagination from 'react-bootstrap/Pagination';

export default function CustomPagination() {
  return (
    <div className='d-flex justify-content-center my-2'>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>5</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}
