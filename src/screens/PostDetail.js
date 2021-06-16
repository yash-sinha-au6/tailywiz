import { useEffect, useState } from "react";
import axios from "axios";
import { Table,Container,Row,Col } from "react-bootstrap";

const PostDeatail = ({ match }) => {
  const id = match.params.id;
  const [post, setPost] = useState({});
 const [comment,setComment]=useState([])
  const fetchPost = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    //console.log(data)
    setPost(data);
  };
  const fetchComment=async()=>{
     const {data}=await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
     setComment(data) 
  } 

  useEffect(() => {
    fetchPost();
    fetchComment()
  }, [post]);
  return (
    <Container fluid>
        <Row>
            <Col sm={1} md={1}>

            </Col>
            <Col sm={8} md={8}>
                <h3>Post{post.id}</h3>
            <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Comment</th>
            <th>PostId</th>
          </tr>
        </thead>
        <tbody>
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>{post.body}</td>
            {comment.map((com)=>(
            <tr key={com.id}>
              <td>{com.body}</td>
              <td></td>
              <td>{com.postId}</td>
            </tr>
          ))}

          
         
         
          </tr>
        </tbody>
      </Table>
            </Col>
        </Row>
     
    </Container>
  );
};

export default PostDeatail;
