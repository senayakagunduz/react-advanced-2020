import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <h4>multiple returns</h4>
    </div>
  );
};

export default MultipleReturns;
