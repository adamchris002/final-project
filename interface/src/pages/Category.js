import React from "react";

const Category = () => {
  return (
    <div className="text-center">
      <h1>Category Vaccine</h1>
      <p>Beriku adalah data jenis vaksinasi yang telah diambil</p>
      <div className="m-3">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>1. ID</th>
              <th>2. Name</th>
              <th>3. Actions</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Category;
