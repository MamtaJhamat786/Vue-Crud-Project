import axios from 'axios'

const url = 'http://localhost:5000/api/posts/'
class PostService {
    // get post we make it static so taht i do not need to instatiate
    static getPosts() {
        // 
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);

            }
        })

    }


    // create post

    static insertPost(firstName, lastName, email, telephone, hiredata) {
        return axios.post(url, {
            firstName,
            lastName,
            email,
            telephone,
            hiredata
        });
    }

    static updatePost(form) {
        return axios.post(url + 'update/' + form.id, {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            telephone: form.telephone,
            hiredata: form.hiredata
        });

    }

    // delete post
    static deletePost(id) {

        return axios.post(url + 'delete/' + id);
    }

    static deleteAll() {
        return axios.post("http://localhost:5000/api/posts/delete-all");
    }

}

export default PostService