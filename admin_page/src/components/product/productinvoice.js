import "./productinvoice.css";
import { ProductCounter } from "./productcounter";
import { ProductToggle } from "./producttoggle";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const invoiceData = [
  {
    image: "9JSX-3F8K-WaRy",
    Name: "19990",
    Sku: "0.00",
    Stock: "In Order: #19990",
    Price: "23-05-2014",
    Category: "digital marketing@ ogi vetechnology.com",
    Date: "....."
  },
  {
    image: "P7Q9-B6T2-Y1M4",
    Name: "",
    Sku: "101",
    Stock: "",
    Price: "Unlimited",
    Category: "",
    Date: ""
  }
];

function ProductInvoice() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    search: ""
  });
  const [selectedOrders, setSelectedOrders] = useState([]); // State to store selected order IDs
  const [selectedBulkAction, setSelectedBulkAction] = useState(""); // State for the selected bulk action
  const [count, setcount] = useState(0);
  const [start, setStart] = useState(0);

  var hello = 0;
  const handleCountChange = (newCount) => {
    console.log(newCount);
    setcount(newCount);
    hello = newCount * 5;
    setStart(hello);
  }
  const handleCheckboxChange = (event, orderId) => {
    const isChecked = event.target.checked;
    const newSelectedOrders = [...selectedOrders]; // Create a copy of the state

    if (isChecked) {
      newSelectedOrders.push(orderId); // Add ID to selected list if checked
    } else {
      const index = newSelectedOrders.indexOf(orderId); // Find the index of the ID
      if (index > -1) {
        newSelectedOrders.splice(index, 1); // Remove ID if unchecked
      }
    }

    setSelectedOrders(newSelectedOrders); // Update the state with the modified array
  };

  const updateOrder = async (orderId, newStatus) => {
    await fetch(`http://localhost:4000/updateUser/${orderId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role: newStatus }),
    })
  }
  const deleteUser = async (orderId, newStatus) => {
    await fetch(`http://localhost:4000/deleteUser`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: orderId }),
    })
  }
  const handleBulkActionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedBulkAction(selectedValue);
  };

  const handleBulkActionApply = async () => {
    if (!selectedBulkAction || !selectedOrders.length) {
      return; // Do nothing if no bulk action or orders selected
    }

    for (const orderId of selectedOrders) {
      await updateOrder(orderId, selectedBulkAction); // Update each order status
    }

    setSelectedOrders([]);
    getAllOrders(); // Clear selected orders after applying
  };
  const handleDelete = async () => {
    if (!selectedBulkAction || !selectedOrders.length) {
      return; // Do nothing if no bulk action or orders selected
    }

    for (const orderId of selectedOrders) {
      if (selectedBulkAction === "Delete")
        await deleteUser(orderId, selectedBulkAction); // Update each order status
    }

    setSelectedOrders([]);
    getAllOrders(); // Clear selected orders after applying
  };
  const changehandler = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const searcherji = async (formdata) => {
    await fetch(`http://localhost:4000/searchProducts/${formdata.search}`)
      .then((res) => res.json())
      .then((data) => { setApidata(data.data) })
  }


  const [apidata, setApidata] = useState(null);
  const getAllOrders = async () => {
    await fetch(`http://localhost:4000/getallproducts`)
      .then((res) => res.json())
      .then((data) => { setApidata(data) })
  }
  useEffect(() => {
    if (formdata.search) {
      searcherji(formdata)
    }
    else {
      getAllOrders();
    }

  }, [formdata]);
  useEffect(() => {
    if (!formdata.search) {
      getAllOrders();
    }
  }, []);




  return (
    <div className="top">
      <div className="topButtons">
        <button className="coupons">Products</button>
      </div>
      <div className="mainInvoiceContainer">
        <div className="middleInputs">
          <button className="but" onClick={()=>{navigate("/addproduct")}}>Add new</button>
          <button className="but">import/export</button>
        </div>

        <div className="redButtonsContainer">
          <button>ALL</button>
          <button>Published</button>
          <button>Draft</button>
          <button>Trash</button>
        </div>

        <div className="lastInputContainer">
          <div className="leftInputs">
            <select className="bulk">
              <option>Bulk action</option>
            </select>
            <button>Apply</button>
            <select className="bulk">
              <option>Filter By Category</option>
            </select>
            <select className="bulk">
              <option>Filter By product type</option>
            </select>
            <select className="bulk">
              <option>Filter By stock status</option>
            </select>
          </div>
          <div className="rightInputs">
            <input placeholder="search" value={formdata.search} onChange={changehandler} name="search" type="text" />
            <ProductCounter onCountChange={handleCountChange} setter={count} />
          </div>
        </div>

        <div className="invoiceTable">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>image</th>
                <th>Name</th>
                <th>Sku</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {apidata && apidata.slice(start, start + 4).map((invoice, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td><img style={{height:'80px',width:'auto'}} src={invoice.image} alt="Image" /></td>
                  <td>{invoice.name}<br /><span style={{cursor:"pointer"}} onClick={()=>{navigate(`/addproduct/${invoice._id}`)}}>Edit</span><span> | </span>
                  <span style={{cursor:"pointer"}} onClick={()=>{navigate(`/addproduct/${invoice._id}`)}}>View</span></td>
                  <td>{/*invoice.Sku*/}</td>
                  <td>{/*invoice.Stock*/}</td>
                  <td>{invoice.new_price}</td>
                  <td>
                    {invoice.category && ( // Check if category exists
                      <>
                        {invoice.category.maincategory}, {invoice.category.subcategories}, {invoice.category.lastcategories}
                      </>
                    )}
                  </td>
                  <td>{invoice.date.slice(0,10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductInvoice;
