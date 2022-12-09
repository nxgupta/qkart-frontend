import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        image={product.image}
        height='140'
        alt={product.name}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} color="#000">
          ${product.cost}
        </Typography>
        <Rating name="read-only" value={product.rating} readOnly />
      </CardContent>
      <Button variant='contained' onClick={handleAddToCart}>{" "}<AddShoppingCartOutlined /> ADD TO CART</Button>
    </Card>
  );
};

export default ProductCard;
