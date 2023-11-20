import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem',margin:'20px' }}>
      <Card.Img variant="top" src="holder.js/150px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Know More</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;