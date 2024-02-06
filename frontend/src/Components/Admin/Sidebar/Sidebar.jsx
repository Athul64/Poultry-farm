import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="sidebar-container"></div>
      <i className="bi bi-list menui" onClick={() => navigate('/admin/home')}></i>
      <i className="bi bi-pie-chart-fill piecharti" onClick={() => navigate('/admin/chart')}></i>
      <i className="bi bi-people-fill ppi" onClick={() => navigate('/admin/adduser')}></i>
      <i className="bi bi-file-earmark-ppt-fill ppti" onClick={() => navigate('/admin/report')}></i>
      <i className="bi bi-grid gridi" onClick={() => navigate('/admin/farm')}></i>
    </div>
  );
}
