import * as React from 'react';
import style from './product-card.module.scss';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

const ProductCard = ({ image, imageAlt, title, subtitle, description }: any) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" gutterBottom>
          {subtitle}
        </Typography>
        <CardMedia image={image} title={imageAlt} className={style.image} />
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
