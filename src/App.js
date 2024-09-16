import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
import Layout from './compontens/Layout'; // Import Layout component
import BankAccount from './compontens/BankAccount';
import Charts from './compontens/Charts';
import Customers from './compontens/Customers';
import Dashboards from './compontens/Dashboards';
import Items from './compontens/Items';
import Vendor from './compontens/Vendor';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboards />} />
          <Route path="/dashboard" element={<Dashboards />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/items" element={<Items />} />
          <Route path="/bankaccount" element={<BankAccount />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
