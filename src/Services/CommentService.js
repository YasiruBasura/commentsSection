import axios from "axios";

const COMMENT_API_BASE_URL = "http://localhost:8080/api/v1/comment"
class CommentService{

    saveComment(epic) { //take employee object as the input parameter
    
            return axios.post(COMMENT_API_BASE_URL,epic)  //here we are passing the entire object to the localhost url 
    
    
    }

    getComment(){
        return axios.get(COMMENT_API_BASE_URL);
    }

    deleteComment(id){
        return axios.delete(COMMENT_API_BASE_URL+ '/' +id);
    }

   

    
}

export default new CommentService()