# Ayuda UI - Course Recommendation System

A modern React-based frontend for the Ayuda course recommendation system, providing an intuitive interface for users to upload resumes, manage profiles, and receive personalized course recommendations.

## 📋 Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [API Workflow](#api-workflow)
- [Local Development Setup](#local-development-setup)
- [Component Architecture](#component-architecture)
- [Services & Utilities](#services--utilities)
- [Routing & Navigation](#routing--navigation)
- [State Management](#state-management)
- [Styling & Theming](#styling--theming)
- [Development Workflow](#development-workflow)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

Ayuda UI is a React-based frontend application that provides an intuitive interface for the Ayuda course recommendation system. It enables users to:

- **Upload and parse resumes** (PDF/DOCX)
- **Manage user profiles** with additional skills and completed coursework
- **Search and add completed courses** from the course catalog
- **Receive personalized course recommendations** based on profile analysis
- **View detailed course explanations** with AI-powered reasoning
- **Navigate between eligible and ineligible courses** with prerequisite checking

The application integrates with a FastAPI backend that provides course matching, semantic search, and prerequisite validation using advanced AI/ML technologies.

## 🛠 Technology Stack

### Frontend Technologies
- **React 18.2.0** - Modern UI library with hooks and functional components
- **Vite 6.2.6** - Fast build tool and development server
- **React Router DOM 6.22.3** - Client-side routing and navigation
- **Material-UI (MUI) 5.15.15** - Comprehensive UI component library
- **Axios 1.6.8** - HTTP client for API communication
- **Emotion** - CSS-in-JS styling solution

### Development Tools
- **Node.js** - JavaScript runtime environment
- **npm** - Package manager
- **Vitest** - Unit testing framework
- **ESLint** - Code linting and formatting

### Backend Integration
- **FastAPI** - Python framework for backend APIs
- **JWT Authentication** - Secure token-based authentication
- **Proxy Configuration** - Vite proxy for seamless API communication

## 📁 Project Structure

```
ayuda_ui/
├── frontend/
│   ├── src/
│   │   ├── components/                     # Reusable UI components
│   │   │   ├── Analysis/                   # Course explanation components
│   │   │   ├── Buttons/                    # Custom button components
│   │   │   ├── Navbar/                     # Navigation components
│   │   │   ├── Notifs/                     # Notification components
│   │   │   ├── Popups/                     # Modal and popup components
│   │   │   ├── Recommender/                # Recommendation components
│   │   │   ├── ResumeUpload/               # Resume upload workflow
│   │   │   ├── Search/                     # Search functionality
│   │   │   └── User/                       # User profile components
│   │   ├── pages/                          # Page components
│   │   │   ├── Auth/                       # Authentication pages
│   │   │   ├── Dashboard/                  # Main dashboard
│   │   │   ├── Home/                       # Landing page
│   │   │   ├── Maintenance/                # System maintenance pages
│   │   │   └── Recommendations/            # Course recommendations page
│   │   ├── api/                            # API service layer
│   │   │   ├── UserService.js              # User-related API calls
│   │   │   ├── AuthRequests.js             # Authentication requests
│   │   │   ├── UserRequests.js             # User profile requests
│   │   │   └── Recommendations.js          # Recommendation API calls
│   │   ├── utils/                          # Utility functions
│   │   │   ├── BaseUrl.js                  # API base URL configuration
│   │   │   ├── SessionHandler.js           # Session and token management
│   │   │   ├── validation.js               # Form validation utilities
│   │   │   └── Boilerplate.js              # Common utility functions
│   │   ├── context/                        # React context providers
│   │   │   └── AuthContext.jsx             # Authentication context
│   │   ├── App.jsx                         # Main application component
│   │   ├── main.jsx                        # Application entry point
│   │   ├── theme.js                        # Material-UI theme configuration
│   │   └── main.css                        # Global styles
│   ├── public/                             # Static assets
│   ├── package.json                        # Dependencies and scripts
│   ├── vite.config.js                      # Vite configuration with proxy
│   └── index.html                          # HTML template
└── README.md                               # Project documentation
```

## ✨ Features

### Core Functionality
- **Resume Upload & Processing**: Upload PDF/DOCX resumes for AI analysis
- **Profile Management**: Add completed courses and additional skills
- **Course Search**: Search and add courses from the comprehensive catalog
- **Smart Recommendations**: AI-powered course matching with prerequisite checking
- **Course Explanations**: Detailed reasoning for course recommendations
- **Responsive Design**: Mobile-friendly interface with Material-UI components

### User Experience
- **Intuitive Workflow**: Step-by-step resume upload and profile enhancement
- **Real-time Search**: Debounced course search with autocomplete
- **Visual Feedback**: Loading states, success/error notifications
- **Navigation**: Seamless routing between different sections
- **Authentication**: Secure login/signup with JWT token management

## 🔄 API Workflow

### Authentication Flow
```mermaid
graph TD
    A[User Login] --> B[POST /auth/login]
    B --> C[JWT Token Generated]
    C --> D[Token Stored in Session]
    D --> E[Authenticated API Calls]
```

### Resume Upload Workflow
```mermaid
graph TD
    A[Upload Resume] --> B[POST /users/resume]
    B --> C[Text Extraction]
    C --> D[Embedding Generation]
    D --> E[Store in PostgreSQL & Pinecone]
    E --> F[Profile Enhancement Ready]
```

### Course Recommendation Flow
```mermaid
graph TD
    A[Get Recommendations] --> B[GET /recommendations/match_courses]
    B --> C[Semantic Search]
    C --> D[Keyword Matching]
    D --> E[Prerequisite Checking]
    E --> F[Neo4j Graph Analysis]
    F --> G[LLM Reasoning]
    G --> H[Eligible/Ineligible Courses]
```

### Profile Management Flow
```mermaid
graph TD
    A[Add Completed Course] --> B[POST /users/profile/completed-courses]
    B --> C[Course Added to Profile]
    C --> D[Refresh Course List]
    D --> E[Updated Prerequisites]
    
    F[Add Skills] --> G[PUT /users/profile/additional-skills]
    G --> H[Skills Updated]
    H --> I[Enhanced Matching]
```

## 🚀 Local Development Setup

### Prerequisites

1. **Node.js** (v18.0.0 or higher)
   ```bash
   # Check Node.js version
   node --version
   npm --version
   ```

2. **Backend Server** (FastAPI)
   - Ensure the Ayuda backend server is running on `http://localhost:8000`
   - Backend should have all required services (PostgreSQL, Redis, Neo4j, Pinecone)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd ayuda_ui
   ```

2. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Environment Configuration**
   - The application uses Vite proxy configuration for API communication
   - Proxy settings are configured in `vite.config.js`
   - No additional environment variables required for development

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Application will be available at `http://localhost:3000`
   - API requests will be proxied to `http://localhost:8000`

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Development server with debug logging
npm run dev:debug

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

### Backend Dependencies

Ensure the following backend services are running:

- **FastAPI Server**: `http://localhost:8000`
- **PostgreSQL**: User and course data storage
- **Redis**: Caching and session management
- **Neo4j**: Prerequisite graph database
- **Pinecone**: Vector database for semantic search
- **Ollama**: LLM service for course reasoning

## 🧩 Component Architecture

### Core Components

#### Authentication Components
- **Login.jsx**: User login form with validation
- **Signup.jsx**: User registration with access code validation
- **AuthContext.jsx**: Global authentication state management

#### Resume Upload Components
- **ResumeUpload.jsx**: Complete resume upload workflow
  - File selection and validation
  - Course search and addition
  - Skills management
  - Integration with Recommender component

#### Recommendation Components
- **Recommender.jsx**: Recommendation generation interface
- **CourseExplanation.jsx**: AI-powered course reasoning dialog
- **Recommendations.jsx**: Course recommendation display page

#### User Management Components
- **UserProfile.jsx**: User profile management interface
- **Navbar.jsx**: Navigation and user menu

#### Dashboard Components
- **Dashboard.jsx**: Main application dashboard
  - User welcome and statistics
  - Quick access to recommendations
  - Profile completion status

### Component Communication

```mermaid
graph TD
    A[App.jsx] --> B[AuthContext]
    A --> C[Router]
    C --> D[Dashboard]
    C --> E[Login/Signup]
    C --> F[Recommendations]
    D --> G[ResumeUpload]
    D --> H[UserProfile]
    G --> I[Recommender]
    F --> J[CourseExplanation]
```

## 🔧 Services & Utilities

### API Services

#### UserService.js
- **Authentication**: Login, signup, token management
- **Profile Management**: Resume upload, course management, skills
- **Recommendations**: Course matching and explanations
- **Error Handling**: Comprehensive error parsing and user feedback

#### AuthRequests.js
- **JWT Management**: Token storage and retrieval
- **Session Handling**: Automatic token refresh and cleanup

#### UserRequests.js
- **Profile Operations**: CRUD operations for user profiles
- **Course Management**: Add/remove completed courses

#### Recommendations.js
- **Course Matching**: Hybrid recommendation algorithms
- **Explanation Requests**: AI-powered course reasoning

### Utility Functions

#### SessionHandler.js
- **Token Management**: Secure token storage and retrieval
- **Authentication Headers**: Automatic header injection
- **Session Cleanup**: Automatic logout on token expiration

#### BaseUrl.js
- **API Configuration**: Dynamic base URL management
- **Environment Support**: Development and production URLs

#### validation.js
- **Form Validation**: Comprehensive input validation
- **Error Messages**: User-friendly error descriptions
- **Field Validation**: Email, password, and form field validation

## 🧭 Routing & Navigation

### Route Structure
```javascript
/                           # Home/Landing page
/login                      # User authentication
/signup                     # User registration
/dashboard                  # Main application dashboard
/recommendations            # Course recommendations display
```

### Navigation Flow
1. **Unauthenticated Users**: Redirected to login/signup
2. **Authenticated Users**: Access to dashboard and recommendations
3. **Profile Completion**: Guided workflow for resume upload and profile enhancement
4. **Recommendations**: Direct access to stored or new recommendations

### Route Protection
- **Authentication Guards**: Automatic redirect for unauthenticated users
- **Token Validation**: JWT token verification on each request
- **Session Management**: Automatic logout on token expiration

## 📊 State Management

### Context Providers
- **AuthContext**: Global authentication state
  - User information
  - Login/logout status
  - Token management

### Local State
- **Component State**: React hooks for local component state
- **Form State**: Controlled components for form management
- **Loading States**: User feedback during API calls

### Data Flow
```mermaid
graph TD
    A[User Action] --> B[Component State]
    B --> C[API Service]
    C --> D[Backend API]
    D --> E[Response Processing]
    E --> F[State Update]
    F --> G[UI Re-render]
```

## 🎨 Styling & Theming

### Material-UI Integration
- **Custom Theme**: Branded color scheme and typography
- **Component Styling**: Consistent design system
- **Responsive Design**: Mobile-first approach

### CSS Architecture
- **Component-Specific CSS**: Scoped styling for components
- **Global Styles**: Common styles and utilities
- **CSS-in-JS**: Emotion integration for dynamic styling

### Theme Configuration
```javascript
// theme.js
{
  palette: {
    primary: { main: '#f16d2c' },
    secondary: { main: '#c19bff' },
    // Custom color scheme
  },
  typography: {
    // Custom font configuration
  }
}
```

## 🔄 Development Workflow

### Development Process
1. **Feature Development**: Create new components in appropriate directories
2. **API Integration**: Use existing service patterns for new endpoints
3. **Testing**: Unit tests for components and services
4. **Styling**: Follow Material-UI design patterns
5. **Documentation**: Update component documentation

### Code Standards
- **ESLint**: Code linting and formatting
- **Component Structure**: Consistent file organization
- **Naming Conventions**: Clear and descriptive names
- **Error Handling**: Comprehensive error management

### Testing Strategy
- **Unit Tests**: Component and service testing
- **Integration Tests**: API communication testing
- **User Testing**: Workflow validation

## 🐛 Troubleshooting

### Common Issues

#### CORS Errors
- **Solution**: Ensure Vite proxy is properly configured
- **Check**: `vite.config.js` proxy settings
- **Verify**: Backend server is running on port 8000

#### Authentication Issues
- **Problem**: 401/403 errors on API calls
- **Solution**: Check JWT token in sessionStorage
- **Fix**: Clear session and re-login

#### Recommendation API Errors
- **Problem**: 422 validation errors
- **Solution**: Ensure user has uploaded resume
- **Check**: Profile completion status

#### Course Search Issues
- **Problem**: No search results
- **Solution**: Verify backend course data is populated
- **Check**: Course search service health

### Debug Mode
```bash
# Enable debug logging
npm run dev:debug
```

### Browser Developer Tools
- **Network Tab**: Monitor API requests and responses
- **Console**: Check for JavaScript errors
- **Application Tab**: Verify session storage and tokens

### Backend Health Check
- **Endpoint**: `GET /admin/system/health`
- **Purpose**: Verify all backend services are operational
- **Required**: Admin authentication

## 📚 Additional Resources

### Documentation
- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
- [Vite Documentation](https://vitejs.dev/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)

### Backend Integration
- **API Documentation**: Available at `http://localhost:8000/docs`
- **OpenAPI Schema**: Swagger UI for API exploration
- **Authentication**: JWT token-based security

### Development Tools
- **React Developer Tools**: Browser extension for component inspection
- **Redux DevTools**: State management debugging (if applicable)
- **Network Tab**: API request monitoring

---

**Note**: This frontend application is designed to work seamlessly with the [Ayuda backend system](https://github.com/Ayuda-ai/ayuda_server). Ensure all backend services are properly configured and running before starting the frontend development server.
