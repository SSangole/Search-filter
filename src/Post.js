const Post = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h4>Post ID: {post.id}</h4>
    </article>
  );
};

export default Post;
