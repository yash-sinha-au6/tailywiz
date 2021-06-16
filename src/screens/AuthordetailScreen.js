import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button} from 'react-bootstrap'
import Pagination from '../component/Paginate'

const AuthordetailScreen = ({match}) => {
const id=match.params.id
console.log(id)
const [authorDetail,setauthorDetail]=useState([])
const [authorName,setAuthorName]=useState("")

const [currentPage,setCurrentPage]=useState(1)
  const [postsPerPage,setPostsPerPage]=useState(5)



  const indexofLastPost=currentPage *postsPerPage //2
  const indexofFirstPost=indexofLastPost-postsPerPage //2-2
  const currentPosts=authorDetail.slice(indexofFirstPost,indexofLastPost) // [0,1,2,3,4]
  

const fetchAuthorName=async()=>{
    const{data}=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setAuthorName(data.name)
}


const fetchAuthorDetail=async()=>{
   const{data}=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
   setauthorDetail(data) 
}
useEffect(()=>{
fetchAuthorDetail()
fetchAuthorName()
},[])

const paginate=(pageNumber,e)=>{
    e.preventDefault()
  setCurrentPage(pageNumber)
  }

console.log(authorName)
    return (
        <div>
            <h3>Author post</h3>
           <Table>
               <thead>
                   <tr><th>Author Name</th>
                       <th>ID</th>
                       <th>Title</th>
                   </tr>
               </thead>
               <tbody>
                   {currentPosts.map((detail)=>(
                       <tr key={detail.id}>
                           <td>{authorName}</td> 
                        <td>{detail.id}</td>    
                        <td>
                        <LinkContainer to={`/post/${detail.id}`}>
                           <Link to={`/post/${detail.id}`}>{detail.title}</Link>
                  </LinkContainer>


                        </td>
                       </tr>
                       

                   ))}
               </tbody>
               </Table> 
               <Pagination postPerpage={postsPerPage} totalPosts={authorDetail.length} paginate={paginate} />
        </div>
    )
}

export default AuthordetailScreen
