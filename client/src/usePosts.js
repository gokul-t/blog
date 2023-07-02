import  { useState, useEffect } from "react";
import axios from "axios";

export default function usePosts() {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get("http://posts.com/posts");

        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return {
        posts,
        fetchPosts
    };
}