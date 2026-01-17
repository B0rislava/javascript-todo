# TODO List Application

A modern, interactive TODO list application with smooth animations and real-time statistics tracking.

## Features

### Core Functionality
- **Create, Read, Update, Delete** tasks with full CRUD operations
- **Event Listeners**: Form submit and click event handling
- **Event Delegation**: Single listener for all todo items (efficient performance)
- **State Management**: Data stored in JavaScript array
- **Conditional Rendering**: UI updates based on application state

### User Interactions
- Add new tasks via form submission
- Click on task text to toggle completion status
- Delete tasks with animated removal
- Real-time statistics (Total, Active, Completed)

### Animations & UX
- **Fade-in pop** animation when creating new tasks
- **Fade-out shrink** animation when deleting tasks
- **Smooth transitions** between empty state and task list
- Scrollable task list with fixed container
- Hover effects on tasks and buttons

### Technical Implementation
- Form handling with `preventDefault()`
- Event delegation for delete buttons and task toggling
- Dynamic statistics calculation
- Empty state with CSS `::before` pseudo-element
- Smooth CSS transitions and animations
- XSS protection with HTML escaping

## Technologies Used
- HTML5
- CSS3 (Flexbox, Animations, Transitions)
- Vanilla JavaScript (ES6+)

## How It Works

1. **Add a task**: Type in the input field and click "Добави" (Add)
2. **Complete a task**: Click on the task text to mark it as completed
3. **Delete a task**: Hover over a task and click the red × button
4. **View statistics**: Automatically updates to show total, active, and completed tasks

## File Structure
```
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
└── script.js           # Application logic and state management
```
