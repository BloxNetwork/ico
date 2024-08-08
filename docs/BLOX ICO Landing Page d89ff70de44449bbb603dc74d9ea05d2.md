# BLOX ICO Landing Page

### Team: 4-5 experienced developers

### Timeline: 5 days (until August 6th)

## Development Roadmap

- **🌟 Initial Setup**
  - [ ] Set up project repository on GitHub
  - [ ] Configure development environment
- **🔧 Backend Development**
  - [ ] Implement endpoints
  - [ ] Set up database schema and migration scripts
- **💻 Frontend Development**
  - [ ] Design and develop the ICO landing page
  - [ ] Integrate wallet connection using WalletConnect
  - [ ] Implement payment method selection and value input
  - [ ] Display presale information and payment methods
  - [ ] Develop user flow for purchasing and balance updating
- **🔗 Integration and Testing**
  - [ ] Integrate backend APIs with frontend components
  - [ ] Test API endpoints for correctness and performance
  - [ ] Conduct end-to-end testing of the user flow
- **🚀 Deployment**
  - [ ] Deploy backend services to production
  - [ ] Deploy frontend application to production
  - [ ] Monitor and fix any post-deployment issues
- **🛠 Maintenance**
  - [ ] Regularly update dependencies and libraries
  - [ ] Monitor performance and address any bugs or issues

## Workflow for Splitting and Merging Development

To ensure efficient and effective development of the ICO Landing Page, the workflow will be divided into four main areas: Database (DB), API, Widgets, and Merging Development. Each area will be assigned to one developer. GitHub will be used for version control, with clear and concise comments for each commit. Regular commits should be made after completing each task, and a specific team member will be responsible for merging all changes.

1. **Initial Setup** (Day 1):
   - Set up repositories and initial project structure.
   - Database developer starts working on the schema.
   - API and frontend developers start setting up their environments.
2. **Parallel Development** (Day 2-3):
   - DB developer completes the schema and starts testing.
   - API developer implements endpoints and writes unit tests.
   - Frontend developer builds the components and integrates WalletConnect.
3. **Integration Phase** (Day 4):
   - Full stack developer begins integrating frontend and backend.
   - Conduct integration testing and resolve any issues.
   - Prepare for deployment and write end-to-end tests.
4. **Final Testing and Deployment** (Day 5):
   - Complete integration and end-to-end testing.
   - Set up CI/CD pipeline for automated deployments.
   - Deploy the application to the staging environment for final validation.

### Coordination and Communication

**Daily Sync Meetings**:

- Each developer provides updates on their progress.
- Discuss any blockers and dependencies.
- Plan for the upcoming day.

**Communication Tools**:

- Whatsapp for instant messaging and quick questions.
- Notion for task tracking and project management.
- GitHub or GitLab for version control and code reviews.

### 1. Database (DB) Development

**Developer**: DB Specialist

**Responsibilities**:

- Design and implement the PostgreSQL database schema.
- Ensure referential integrity and proper indexing.
- Write and test SQL queries and stored procedures.

**Tasks**:

- Create the `chains`, `tokens`, `presales`, and `transactions` tables.
- Ensure foreign key constraints and check constraints are correctly implemented.
- Implement triggers or functions if necessary to handle complex logic.
- Create backup and restore scripts.

**Deliverables**:

- SQL script for database schema creation.
- Documentation for the database schema and relationships.

**Timeline**: 1 day

### 2. API Development

**Developer**: Backend Specialist

**Responsibilities**:

- Develop the backend API to interact with the database and provide data to the frontend.
- Implement authentication and authorization if necessary.
- Ensure the API is secure and performant.

**Tasks**:

- Set up the API server (e.g., using Node.js with Express, Python with Flask, etc.).
- Implement endpoints
- Handle edge cases and error responses.
- Write unit tests for API endpoints.

**Deliverables**:

- API server code with implemented endpoints.
- API documentation (e.g., using Swagger).
- Unit tests for the API.

**Timeline**: 1.5 days

### 3. Widgets Development

**Developer**: Frontend Specialist

**Responsibilities**:

- Develop the frontend components for the ICO Landing Page.
- Ensure a responsive and user-friendly design.
- Integrate WalletConnect v3 for wallet connectivity.

**Tasks**:

- Develop the `FormHeader` with progress bar and status indicators.
- Implement `FormPriceTag` components for displaying current and next prices.
- Create the `FormSwap` component for selecting payment methods and inputting values.
- Develop the `FormButton` for connecting/disconnecting the wallet and initiating transactions.
- Create the `FormFooter` with additional information and referral buttons.
- Implement local state management and form validation.

**Deliverables**:

- React components (or the chosen frontend framework) for the form.
- Integration with WalletConnect v3.
- Styling using CSS/SCSS or a CSS-in-JS solution.
- Component tests.

**Timeline**: 2 days

### 4. Merging Development

**Developer**: Full Stack Developer (Integrator)

**Responsibilities**:

- Merge the DB, API, and Widgets development into a cohesive application.
- Ensure all parts work together seamlessly.
- Conduct end-to-end testing.

**Tasks**:

- Set up the project structure and repositories.
- Integrate the frontend with the backend API.
- Ensure CORS and other configurations are correctly set up.
- Write end-to-end tests to validate the entire workflow.
- Implement deployment scripts and CI/CD pipelines.

**Deliverables**:

- Fully integrated application.
- End-to-end test scripts.
- CI/CD pipeline configuration.

**Timeline**: 2.5 days

By following this structured approach, each developer can focus on their specific area of expertise while ensuring smooth integration and communication across the team. This will result in a well-coordinated development process and a high-quality ICO Landing Page.

[API Requests](API%20Requests%20561f609515964f3b8ea7ef6b4ffe352e.md)

[Database Structure](Database%20Structure%2094b4b8e7d610476d850b052d95577739.md)

[Business Logic](Business%20Logic%205cea33eb3e5d4b64b9abd1b7d7a2cb3b.md)

[Sections](Sections%206613af921e834323ba1339a288e3018e.md)
