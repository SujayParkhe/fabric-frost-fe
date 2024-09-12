import adminRoutes from "@/router/routes/adminRoutes";
import sellerRoutes from "@/router/routes/sellerRoutes";

export const privateRoutes = [...adminRoutes, ...sellerRoutes];
