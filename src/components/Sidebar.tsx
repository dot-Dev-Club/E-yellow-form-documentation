import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">EY</div>
        <h1>E-Yellow Form</h1>
        <p className="subtitle">Project Documentation</p>
      </div>

      <nav className="toc">
        <h2>Contents</h2>
        <ol>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#system-architecture">System Architecture</a></li>
          <li><a href="#features--user-roles">Features & User Roles</a></li>
          <li><a href="#technology-stack">Technology Stack</a></li>
          <li><a href="#project-structure">Project Structure</a></li>
          <li><a href="#setup--deployment">Setup & Deployment</a></li>
          <li><a href="#api-reference">API Reference</a></li>
          <li><a href="#type-system">Type System</a></li>
          <li><a href="#development-guidelines">Development Guidelines</a></li>
          <li><a href="#testing">Testing</a></li>
          <li><a href="#contributing">Contributing</a></li>
          <li><a href="#support--licensing">Support & Licensing</a></li>
        </ol>
      </nav>

      <footer className="sidebar-footer">
        <small>Last updated: October 23, 2025</small>
      </footer>
    </aside>
  );
};

export default Sidebar;
