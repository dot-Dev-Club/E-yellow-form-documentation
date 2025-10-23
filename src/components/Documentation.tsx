import React from 'react';

const Documentation: React.FC = () => {
  return (
    <article className="doc">
      <section id="introduction">
        <h2>Introduction</h2>
        <p><strong>E-Yellow Form</strong> is a digital hostel outing approval system that automates the process of student outing requests, multi-level approvals (Mentor, SRA), and status tracking. It replaces paper-based workflows, providing real-time status, secure authentication, and role-based dashboards for students, mentors, and SRAs.</p>
      </section>

      <hr />

      <section id="system-architecture">
        <h2>System Architecture</h2>
        <pre className="code-block">{`E-Yellow Form System
├── 🖥️ Frontend (React + TypeScript)
│   ├── Student Portal
│   ├── Mentor Dashboard
│   └── SRA Management Interface
├── 🔧 Backend API (Node.js + Express)
│   ├── Authentication & Authorization
│   ├── Form Management APIs
│   └── User Management
└── 📄 Database (PostgreSQL)
    ├── Users & Roles
    ├── Outing Forms
    └── Approval Workflow`}</pre>
      </section>

      <hr />

      <section id="features--user-roles">
        <h2>Features & User Roles</h2>
        <h3>Features</h3>
        <ul>
          <li>🔐 Authentication: JWT-based, role-specific login.</li>
          <li>📊 Dashboards: Separate for Students, Mentors, SRA.</li>
          <li>📝 Form Management: Create, submit, view, and manage outing requests.</li>
          <li>✅ Approval Workflow: Mentor → SRA approvals with real-time updates.</li>
          <li>📱 Responsive Design: Mobile and desktop friendly.</li>
          <li>🔔 Notification & Status: Live status tracking for requests.</li>
        </ul>

        <h3>User Roles</h3>
        <dl>
          <dt>Student</dt>
          <dd>Submit outing requests, view status/history.</dd>
          <dt>Mentor</dt>
          <dd>Approve/reject assigned mentees' requests.</dd>
          <dt>SRA</dt>
          <dd>Final approval; view/manage all outing requests.</dd>
        </dl>
      </section>

      <hr />

      <section id="technology-stack">
        <h2>Technology Stack</h2>
        <ul>
          <li><strong>Frontend</strong>: React 19.1.1, TypeScript, Vite, Tailwind CSS</li>
          <li><strong>Backend</strong>: Node.js, Express, Passport.js (for auth)</li>
          <li><strong>Database</strong>: PostgreSQL</li>
          <li><strong>State Management</strong>: React Context, custom hooks</li>
          <li><strong>API Communication</strong>: Fetch API, centralized service layer</li>
        </ul>
      </section>

      <hr />

      <section id="project-structure">
        <h2>Project Structure</h2>
        <pre className="code-block">{`E-Yellow_Form/
├── frontend/                  # React TypeScript Application
│   ├── components/            # Common & role-specific UI components
│   ├── contexts/              # Context providers for state
│   ├── hooks/                 # Custom React hooks
│   ├── pages/                 # Login, Dashboard, etc.
│   ├── services/              # API integration (database.ts)
│   ├── types.ts               # TypeScript type definitions
│   ├── constants.ts           # Application constants
│   ├── App.tsx, index.tsx     # App root and entry
│   └── README.md              # Frontend docs
├── backend/                   # Node.js Express API
│   ├── routes/                # API endpoints (auth, users, forms)
│   ├── config/                # Database configuration
│   ├── server.js              # Main server entry point
│   ├── README.md              # Backend docs
└── README.md                  # Project overview`}</pre>
      </section>

      <hr />

      <section id="setup--deployment">
        <h2>Setup & Deployment</h2>
        <h3>Prerequisites</h3>
        <ul>
          <li>Node.js v16+</li>
          <li>PostgreSQL v12+</li>
          <li>npm/yarn</li>
          <li>Git</li>
        </ul>

        <h3>Backend Setup</h3>
        <pre className="code-block">{`cd backend
npm install
cp .env.example .env   # Edit .env with DB credentials
npm run setup-db       # Creates tables, sample data
npm run dev            # Starts backend on http://localhost:5000`}</pre>

        <h3>Frontend Setup</h3>
        <pre className="code-block">{`cd frontend
npm install
npm run dev            # Starts frontend on http://localhost:5173`}</pre>

        <h3>Production Deployment</h3>
        <p>Backend: Deploy to Heroku/AWS/DigitalOcean. Frontend: Build (npm run build) and deploy static to CDN (Netlify, Vercel). DB: Use managed PostgreSQL (e.g., AWS RDS).</p>
      </section>

      <hr />

      <section id="api-reference">
        <h2>API Endpoints — Example Usage</h2>
        <p>Below are example requests and sample responses for all major API endpoints in E-Yellow Form. Replace tokens, IDs, and data as appropriate.</p>

        <hr />

        <h3>Authentication</h3>

        <h4>POST <code>/api/auth/login</code></h4>
        <p>Authenticate a user and receive a JWT token.</p>
        <strong>Request:</strong>
        <pre className="code-block">{`curl -X POST http://localhost:5000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"student@university.edu","password":"student123"}'`}</pre>
        <strong>Sample Response:</strong>
        <pre className="code-block">{`{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "kmail": "student@university.edu",
    "role": "student"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`}</pre>

        <hr />

        <h4>GET <code>/api/auth/me</code></h4>
        <p>Get the authenticated user's profile.</p>
        <strong>Request:</strong>
        <pre className="code-block">{`curl http://localhost:5000/api/auth/me \\
  -H "Authorization: Bearer <your_jwt_token>"`}</pre>
        <strong>Sample Response:</strong>
        <pre className="code-block">{`{
  "id": 1,
  "name": "John Doe",
  "kmail": "student@university.edu",
  "role": "student",
  "registerNumber": "21CS1001",
  "department": "CSE",
  "hostelName": "Hostel A",
  "roomNumber": "101"
}`}</pre>

        <hr />

        <h3>User Management</h3>

        <h4>GET <code>/api/users/profile</code></h4>
        <strong>Request:</strong>
        <pre className="code-block">{`curl http://localhost:5000/api/users/profile \\
  -H "Authorization: Bearer <your_jwt_token>"`}</pre>
        <strong>Sample Response:</strong>
        <pre className="code-block">{`{
  "id": 1,
  "name": "John Doe",
  "kmail": "student@university.edu",
  "role": "student"
}`}</pre>

        <h4>GET <code>/api/users</code></h4>
        <p>List all users (admin only).</p>
        <strong>Request:</strong>
        <pre className="code-block">{`curl http://localhost:5000/api/users \\
  -H "Authorization: Bearer <admin_jwt_token>"`}</pre>
        <strong>Sample Response:</strong>
        <pre className="code-block">{`[
  {
    "id": 1,
    "name": "John Doe",
    "kmail": "student@university.edu",
    "role": "student"
  },
  {
    "id": 2,
    "name": "Jane Mentor",
    "kmail": "mentor@university.edu",
    "role": "mentor"
  }
]`}</pre>

        <hr />

        <h3>Form Management</h3>

        <h4>GET <code>/api/forms</code></h4>
        <p>Get outing forms (filtered by user role).</p>
        <strong>Request:</strong>
        <pre className="code-block">{`curl http://localhost:5000/api/forms \\
  -H "Authorization: Bearer <your_jwt_token>"`}</pre>
        <strong>Sample Response:</strong>
        <pre className="code-block">{`[
  {
    "id": 101,
    "studentId": 1,
    "outDate": "2025-10-22",
    "outTime": "10:00",
    "returnDate": "2025-10-23",
    "returnTime": "18:00",
    "numberOfWorkingDays": 1,
    "reason": "Family visit",
    "status": "Pending",
    "mentorKmail": "mentor@university.edu",
    "sraKmail": "sra@university.edu"
  }
]`}</pre>

        <h4>POST <code>/api/forms</code></h4>
        <p>Create a new outing request.</p>
        <strong>Request:</strong>
        <pre className="code-block">{`curl -X POST http://localhost:5000/api/forms \\
  -H "Authorization: Bearer <your_jwt_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
        "outDate": "2025-10-22",
        "outTime": "10:00",
        "returnDate": "2025-10-23",
        "returnTime": "18:00",
        "numberOfWorkingDays": 1,
        "reason": "Family function"
      }'`}</pre>
        <strong>Sample Response:</strong>
        <pre className="code-block">{`{
  "success": true,
  "data": {
    "id": 102,
    "studentId": 1,
    "outDate": "2025-10-22",
    "outTime": "10:00",
    "returnDate": "2025-10-23",
    "returnTime": "18:00",
    "numberOfWorkingDays": 1,
    "reason": "Family function",
    "status": "Pending"
  }
}`}</pre>

        <h4>PATCH <code>/api/forms/:id/status</code></h4>
        <p>Update the status of an outing request (mentor/SRA only).</p>
        <strong>Request:</strong>
        <pre className="code-block">{`curl -X PATCH http://localhost:5000/api/forms/102/status \\
  -H "Authorization: Bearer <mentor_or_sra_jwt_token>" \\
  -H "Content-Type: application/json" \\
  -d '{
        "status": "ApprovedByMentor"
      }'`}</pre>
        <strong>Sample Response:</strong>
        <pre className="code-block">{`{
  "success": true,
  "data": {
    "id": 102,
    "status": "ApprovedByMentor"
  }
}`}</pre>
        <p>For rejections, also send a reason:</p>
        <pre className="code-block">{`-d '{
      "status": "RejectedByMentor",
      "rejectionReason": "Incomplete details"
    }'`}</pre>

        <hr />

        <h3>Health Check</h3>
        <h4>GET <code>/api/health</code></h4>
        <strong>Request:</strong>
        <pre className="code-block">{`curl http://localhost:5000/api/health`}</pre>
        <strong>Sample Response:</strong>
        <pre className="code-block">{`{
  "message": "E-Yellow Form Backend API is running!",
  "timestamp": "2025-10-21T13:15:44.000Z"
}`}</pre>

        <hr />

        <p><strong>Note:</strong>
        Replace <code>&lt;your_jwt_token&gt;</code> with the token from <code>/api/auth/login</code>. Some endpoints require specific roles (mentor, SRA, admin, etc.).</p>
      </section>

      <hr />

      <section id="type-system">
        <h2>Type System</h2>
        <p>TypeScript ensures strong type safety and clear interface contracts.</p>
        <h3>Core Types (frontend/types.ts)</h3>
        <ul>
          <li><code>Role</code>: "student" | "mentor" | "sra"</li>
          <li><code>User</code>: Generic user info</li>
          <li><code>Student</code>: Student-specific profile details</li>
          <li><code>Staff</code>: Mentor/SRA profile</li>
          <li><code>OutingForm</code>: Outing request data (dates, reason, status, etc.)</li>
          <li><code>ApprovalStatus</code>: Enum for form status (Pending, Approved, Rejected, etc.)</li>
        </ul>

        <h3>Benefits</h3>
        <ul>
          <li>Compile-time error checking</li>
          <li>IntelliSense & autocomplete</li>
          <li>Consistent, safe data structures</li>
        </ul>
      </section>

      <hr />

      <section id="development-guidelines">
        <h2>Development Guidelines</h2>
        <ul>
          <li>TypeScript: Strict mode enabled</li>
          <li>Component Structure: Functional components, hooks</li>
          <li>Naming: PascalCase for components, camelCase for utils</li>
          <li>Organization: Feature-based folders</li>
          <li>Error Handling: Comprehensive boundaries and validation</li>
          <li>Workflow:
            <ol>
              <li>Create feature branches from <code>main</code></li>
              <li>Implement features with types</li>
              <li>Test across all user roles</li>
              <li>Pull requests with descriptive commits</li>
              <li>Code review before merge</li>
            </ol>
          </li>
        </ul>
      </section>

      <hr />

      <section id="testing">
        <h2>Testing</h2>
        <h3>Manual Testing</h3>
        <ol>
          <li>Test authentication for all roles</li>
          <li>Create outing requests as student</li>
          <li>Approve/reject as mentor/SRA</li>
          <li>Track and update status</li>
        </ol>

        <h3>API Testing</h3>
        <p>Use Postman or cURL for endpoint testing.</p>
        <pre className="code-block">{`curl http://localhost:5000/api/health`}</pre>
      </section>

      <hr />

      <section id="contributing">
        <h2>Contributing</h2>
        <ol>
          <li>Fork the repo</li>
          <li>Create a feature branch (<code>git checkout -b feature/amazing-feature</code>)</li>
          <li>Commit changes with documentation</li>
          <li>Test across roles</li>
          <li>Push and open a Pull Request</li>
        </ol>
        <p><strong>Contribution Areas:</strong> Bug fixes, New features, Documentation, UI/UX, Security, Performance</p>
      </section>

      <hr />

      <section id="support--licensing">
        <h2>Support & Licensing</h2>
        <ul>
          <li><strong>Support:</strong> Open an issue or contact the Dot Dev Club team.</li>
          <li>
            <strong>Authors:</strong>
            <br />
            <strong>Team:</strong> Spark Works
            <ul style={{ marginTop: '8px' }}>
              <li>Earnest. S</li>
              <li>Dickson. E</li>
              <li>Niranjan. T</li>
              <li>Gokul. P</li>
              <li>Aries Nathya. A</li>
            </ul>
            <span style={{ fontStyle: 'normal', fontWeight: 'normal' }}>By Dot Dev Club</span>
          </li>
        </ul>
      </section>

      <hr />

      <section id="quick-start">
        <h2>Quick Start Commands</h2>
        <pre className="code-block">{`# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview`}</pre>
      </section>
    </article>
  );
};

export default Documentation;