import styled from 'styled-components';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 3rem;
  line-height: 1.6;
`;

function Blog() {
  return (
    <BlogContainer>
      <Title>Blog</Title>
      <Description>
        Some not so organized thoughts on things I've learned. A collection of ideas, 
        insights, and reflections from my journey through learning and discovery.
      </Description>
      {/* Blog content will be added here */}
    </BlogContainer>
  );
}

export default Blog; 