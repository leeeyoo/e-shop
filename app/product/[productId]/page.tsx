interface IParams {
  productId?: string
}

const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);

  return ( 
    <div>Product Page</div>
   );
}
 
export default Product;