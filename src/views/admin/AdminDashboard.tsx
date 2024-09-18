import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  LuDollarSign,
  LuShoppingBag,
  LuUsers2,
  LuShoppingCart,
} from "react-icons/lu";

const data = [
  { month: "Jan", orders: 400, revenue: 2400, sellers: 240 },
  { month: "Feb", orders: 300, revenue: 1398, sellers: 221 },
  { month: "Mar", orders: 200, revenue: 9800, sellers: 229 },
  { month: "Apr", orders: 278, revenue: 3908, sellers: 200 },
  { month: "May", orders: 189, revenue: 4800, sellers: 218 },
  { month: "Jun", orders: 239, revenue: 3800, sellers: 250 },
  { month: "Jul", orders: 239, revenue: 3800, sellers: 250 },
  { month: "Aug", orders: 239, revenue: 3800, sellers: 250 },
  { month: "Sep", orders: 239, revenue: 3800, sellers: 250 },
  { month: "Oct", orders: 239, revenue: 3800, sellers: 250 },
  { month: "Nov", orders: 239, revenue: 3800, sellers: 250 },
  { month: "Dec", orders: 239, revenue: 3800, sellers: 250 },
];

const recentOrders = [
  {
    orderId: "#13421",
    price: "$654",
    paymentStatus: "pending",
    orderStatus: "Active",
  },
  {
    orderId: "#13422",
    price: "$320",
    paymentStatus: "completed",
    orderStatus: "Delivered",
  },
  {
    orderId: "#13423",
    price: "$450",
    paymentStatus: "failed",
    orderStatus: "Cancelled",
  },
  {
    orderId: "#13424",
    price: "$799",
    paymentStatus: "pending",
    orderStatus: "Active",
  },
  {
    orderId: "#13425",
    price: "$1200",
    paymentStatus: "completed",
    orderStatus: "Shipped",
  },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <LuDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <LuShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sellers</CardTitle>
            <LuUsers2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <LuShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-2 md:col-span-1">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
                <Bar dataKey="sellers" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-2 md:col-span-1">
          <CardHeader>
            <CardTitle>Recent Seller Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <p>Display all messages here</p>
              </TabsContent>
              <TabsContent value="unread">
                <p>Display unread messages here</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Payment Status</TableHead>
                <TableHead>Order Status</TableHead>
                <TableHead>Active</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>{order.paymentStatus}</TableCell>
                  <TableCell>{order.orderStatus}</TableCell>
                  <TableCell>View</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
