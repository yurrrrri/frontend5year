const OrderDetails = ({ params, searchParams }) => {
  const { id } = params;
  const { param } = searchParams;

  return (
    <div>
      {id}
      <br />
      {param}
    </div>
  );
};

export default OrderDetails;
