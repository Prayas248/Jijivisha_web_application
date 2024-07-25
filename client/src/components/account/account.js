import React from 'react';
import './account.css';

const MyAccount = () => {
  return (
    <div className="my-account">
      <div className="sidebar">
        <p>Hello! <strong>Name</strong></p>
        <ul>
          <li>DASHBOARD</li>
          <li>ORDERS</li>
          <li>WISHLIST</li>
          <li>DOWNLOADS</li>
          <li>ADDRESSES</li>
          <li>ACCOUNT DETAILS</li>
          <li>LOG OUT</li>
        </ul>
      </div>
      <div className="account-details">
        <h1>My account</h1>
        <form>
          <label>
            <p>First name *</p>
            <input type="text" name="firstName" />
          </label>
          <label>
            <p>Last name *</p>
            <input type="text" name="lastName" />
          </label>
          <label>
            <p>Display name *</p>
            <input type="text" name="displayName" />
          </label>
          <label>
            <p>Email address *</p>
            <input type="email" name="email"  />
          </label>
          <h2>Password change</h2>
          <label>
           <p>Current password (leave blank to leave unchanged)</p>
            <input type="password" name="currentPassword" />
          </label>
          <label>
            <p>New password (leave blank to leave unchanged)</p>
            <input type="password" name="newPassword" />
          </label>
          <label>
            <p>Confirm new password</p>
            <input type="password" name="confirmPassword" />
          </label>
          <button type="submit">Save changes</button>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
