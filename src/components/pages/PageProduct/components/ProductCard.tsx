import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { formatAsPrice } from "~/utils/utils";
import Card from "@mui/material/Card";
import { useAvailableProduct } from "~/queries/products";

type MockImages = {
  [key: string]: { img: string };
};

const mockImages: MockImages = {
  "1": {
    img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2254450/ss_3f4425df24a8bfe3aee98991da893c9d43413f38.1920x1080.jpg?t=1727477866",
  },
  "2": {
    img: "https://cdn2.steamgriddb.com/hero/33e70269806c88720e2d89ed1d3f1be3.png",
  },
  "3": {
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202503/0316/1b570a9a77472c34d30fb6bcf538c12187f540dc951cbf38.png",
  },
};

export const ProductCard = ({ productId }: { productId: string }) => {
  const { data, isLoading } = useAvailableProduct(productId);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!productId || !data) {
    return <h1>No product found </h1>;
  }

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        sx={{ objectFit: "cover" }}
        image={mockImages[productId]?.img || ""}
        title="Image title"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {data.name}
        </Typography>
        <Typography>{formatAsPrice(data.price)}</Typography>
      </CardContent>
      {/*     <CardActions>
        <AddProductToCart product={product} />
      </CardActions>*/}
    </Card>
  );
};
