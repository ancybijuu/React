import ProductCard from "./ProductCard"
function App() {
return (
<>
<ProductCard
name="Laptop"
price={55000}
/>
<ProductCard
name="Mobile"
price={25000}
/>
<ProductCard
name="Headphones"
price={3000}
/>
</>
)
}
export default App