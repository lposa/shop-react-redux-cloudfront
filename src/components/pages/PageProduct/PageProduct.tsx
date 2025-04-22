import Box from "@mui/material/Box";
import { ProductCard } from "~/components/pages/PageProduct/components/ProductCard";
import { useParams } from "react-router-dom";

export default function PageProduct() {
  const { id } = useParams();

  return (
    <Box py={3}>
      <ProductCard productId={id || "0"} />
    </Box>
  );
}
