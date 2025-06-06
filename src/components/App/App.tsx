import { Routes, Route } from "react-router-dom";
import MainLayout from "~/components/MainLayout/MainLayout";
import PageProductForm from "~/components/pages/PageProductForm/PageProductForm";
import PageOrders from "~/components/pages/PageOrders/PageOrders";
import PageOrder from "~/components/pages/PageOrder/PageOrder";
import PageProductImport from "~/components/pages/admin/PageProductImport/PageProductImport";
import PageCart from "~/components/pages/PageCart/PageCart";
import PageProducts from "~/components/pages/PageProducts/PageProducts";
import { Typography } from "@mui/material";
import PageProduct from "~/components/pages/PageProduct/PageProduct";
import { LoginPage } from "~/components/pages/Login/LoginPage";
import ProtectedRoute from "~/components/pages/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PageProducts />} />
        <Route path="cart" element={<PageCart />} />
        <Route path="admin/orders">
          <Route index element={<ProtectedRoute element={<PageOrders />} />} />
          <Route
            path=":id"
            element={<ProtectedRoute element={<PageOrder />} />}
          />
        </Route>
        <Route
          path="admin/products"
          element={<ProtectedRoute element={<PageProductImport />} />}
        />
        <Route path="admin/product-form">
          <Route
            index
            element={<ProtectedRoute element={<PageProductForm />} />}
          />
          <Route
            path=":id"
            element={<ProtectedRoute element={<PageProductForm />} />}
          />
        </Route>
        <Route path="products" element={<PageProduct />}>
          <Route index element={<PageProduct />} />
          <Route path=":id" element={<PageProduct />} />
        </Route>
        <Route
          path="*"
          element={<Typography variant="h1">Not found</Typography>}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
