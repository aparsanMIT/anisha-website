import styled from 'styled-components';

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

function Blog() {
  return (
    <BlogContainer>
      <Title>Blog</Title>
      <p>Blog posts coming soon...</p>
    </BlogContainer>
  );
}

export default Blog;
