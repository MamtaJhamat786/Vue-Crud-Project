import axios from 'axios'

const url = 'http://localhost:5000/api/posts/'
class PostService{
    // get post we make it static so taht i do not need to instatiate
    static getPosts(){  
        // 
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            }catch(err){
                reject(err);

            }
        })

    }


    // create post

    static insertPost(firstName, lastName, email, telephone, hiredata){
        return axios.post(url,{
            firstName,
            lastName,
            email,
            telephone,
            hiredata
        });
    }
    
    // delete post
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }

    static deleteAll(){
        return axios.post("http://localhost:5000/api/posts/delete-all");
    }
    
}

export default PostService