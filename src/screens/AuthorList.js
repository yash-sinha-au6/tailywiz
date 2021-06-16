import { useEffect, useState, React } from "react";
import { Card, Container, Row, Col,Button } from "react-bootstrap";
import axios from "axios";
import Pagination from '../component/Paginate'
import {Link} from  'react-router-dom'

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [currentPage,setCurrentPage]=useState(1)
  const [postsPerPage,setPostsPerPage]=useState(2)

  const fetchAuthor = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    setAuthors(data);
  };
  useEffect(() => {
    fetchAuthor();
  }, []);
  //console.log(authors);

const indexofLastPost=currentPage *postsPerPage //2
const indexofFirstPost=indexofLastPost-postsPerPage //2-2
const currentPosts=authors.slice(indexofFirstPost,indexofLastPost) // [0,1,2,3,4]



//const paginate=pageNumber=>setCurrentPage(pageNumber)
const paginate=(pageNumber,e)=>{
  e.preventDefault()
setCurrentPage(pageNumber)
}


  return (
    <Container style={{alignContent:'center', height:"1000px",width:"1000px"}} >
      <div>
        <h3>list of Author</h3>
      <Row>
        {currentPosts.map((author) => (
          <Col key={author.id} sm={12} md={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{author.name}</Card.Title>
  
                  <Link to={`${author.id}`} >
                    click here
                  </Link>

                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination postPerpage={postsPerPage} totalPosts={authors.length} paginate={paginate} />
      </div>
      
    </Container>
  );
};

export default AuthorList;
