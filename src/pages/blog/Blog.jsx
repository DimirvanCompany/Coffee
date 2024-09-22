import { Container, Row } from "react-bootstrap";
import "./Blog.css";
import { useEffect } from "react";
import { fetchDataBlog } from "../../Redux/slices/blog";
import { useDispatch, useSelector } from "react-redux";
import BlogItem from "../../components/blog/BlogItem";
function Blog() {
  const { data } = useSelector((store) => store.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataBlog());
  }, []);
  return (
    <Container className="my-3">
      <Row>
        {data.map((item) => (
          <BlogItem key={item.id} {...item} />
        ))}
      </Row>
    </Container>
  );
}

export default Blog;
