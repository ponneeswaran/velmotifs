import { Card } from "react-bootstrap";

const GalleryCard = ({ title, content, onClick }) => {
  return (
    <Card className="mt-3" style={{ width: "50rem" }} onClick={onClick}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GalleryCard;
