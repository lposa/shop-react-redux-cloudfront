import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";
import { useAvailableProducts } from "~/queries/products";
import { useNavigate } from "react-router-dom";

type MockImages = {
  [key: string]: { img: string };
};

export const mockImages: MockImages = {
  "1": {
    img: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Last_of_Us_Part_I_cover.jpg",
  },
  "2": {
    img: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
  },
  "3": {
    img: "https://upload.wikimedia.org/wikipedia/en/e/e0/Death_Stranding_2_Icon.jpg",
  },
};

export default function Products() {
  const { data = [], isLoading } = useAvailableProducts();
  const navigate = useNavigate();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {data.map(({ count, ...product }, index) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card
            onClick={() => navigate(`/products/${product.id}`)}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
                boxShadow: 3,
              },
            }}
          >
            <CardMedia
              component="img"
              sx={{
                objectFit: "cover",
                width: "100%",
                height: "300px",
                maxHeight: "300px",
              }}
              image={mockImages[product.id || "1"]?.img}
              title="Image title"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography>{formatAsPrice(product.price)}</Typography>
            </CardContent>
            <CardActions>
              <AddProductToCart product={product} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
