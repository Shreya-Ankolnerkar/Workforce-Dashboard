localStorage.clear()
const employees = [
  {
      "id": 1,
      "email": "employee1@ex.com",
      "password": "123",
      "firstName": "Arjun",
      "tasks": [
          {
              "title": "Prepare Monthly Report",
              "description": "Compile and summarize monthly performance data.",
              "date": "2024-12-06",
              "category": "Reports",
              "active": true,
              "newTask": true,
              "failed": false,
              "completed":false
          },
          {
              "title": "Team Meeting",
              "description": "Discuss project updates and roadblocks.",
              "date": "2024-12-07",
              "category": "Meetings",
              "active": false,
              "newTask": false,
              "failed": false,
              "completed":true
          },
          {
              "title": "Update Documentation",
              "description": "Ensure all project documents are up to date.",
              "date": "2024-12-08",
              "category": "Documentation",
              "active": true,
              "newTask": false,
              "failed": false,
              "completed":false
          }
      ],
      "taskNumbers": { "active": 2, "newTask": 1, "failed": 0,"completed":1}
  },
  {
      "id": 2,
      "email": "employee2@ex.com",
      "password": "123",
      "firstName": "Vikram",
      "tasks": [
          {
              "title": "Fix UI Bugs",
              "description": "Resolve issues reported in the UI.",
              "date": "2024-12-05",
              "category": "Development",
              "active": true,
              "newTask": false,
              "failed": false,
              "completed":false
          },
          {
              "title": "Database Optimization",
              "description": "Improve database performance for better speed.",
              "date": "2024-12-06",
              "category": "Development",
              "active": false,
              "newTask": false,
              "failed": false,
              "completed":true
          },
          {
              "title": "Client Presentation",
              "description": "Prepare slides for client presentation on new features.",
              "date": "2024-12-09",
              "category": "Meetings",
              "active": false,
              "newTask": true,
              "failed": false,
              "completed":false
          }
      ],
      "taskNumbers": { "active": 1, "newTask": 0, "failed": 0,"completed":1 }
  },
  {
      "id": 3,
      "email": "employee3@ex.com",
      "password": "123",
      "firstName": "Sneha",
      "tasks": [
          {
              "title": "Data Migration",
              "description": "Migrate data from legacy systems to the new platform.",
              "date": "2024-12-05",
              "category": "IT",
              "active": true,
              "newTask": false,
              "failed": false,
              "completed":false
          },
          {
              "title": "System Backup",
              "description": "Perform a full system backup.",
              "date": "2024-12-06",
              "category": "Maintenance",
              "active": false,
              "newTask": true,
              "failed": false,
              "completed":false
          },
          {
              "title": "Network Upgrade",
              "description": "Upgrade network infrastructure to improve connectivity.",
              "date": "2024-12-08",
              "category": "IT",
              "active": false,
              "newTask": true,
              "failed": true,
              "completed":false
          }
      ],
      "taskNumbers": { "active": 2, "newTask": 1, "failed": 0,"completed":1}
  },
  {
      "id": 4,
      "email": "employee4@ex.com",
      "password": "123",
      "firstName": "Priya",
      "tasks": [
          {
              "title": "Supplier Coordination",
              "description": "Follow up with suppliers for pending orders.",
              "date": "2024-12-05",
              "category": "Logistics",
              "active": true,
              "newTask": false,
              "failed": false,
              "completed":false
          },
          {
              "title": "Inventory Check",
              "description": "Audit inventory and restock if needed.",
              "date": "2024-12-07",
              "category": "Inventory",
              "active": false,
              "newTask": true,
              "failed": false,
              "completed":false
          },
          {
              "title": "Warehouse Safety Inspection",
              "description": "Inspect warehouse for compliance with safety standards.",
              "date": "2024-12-09",
              "category": "Safety",
              "active": true,
              "newTask": false,
              "failed": true,
              "completed":false
          }
      ],
      "taskNumbers": { "active": 1, "newTask": 2, "failed": 0 ,"completed":0}
  },
  {
      "id": 5,
      "email": "employee5@ex.com",
      "password": "123",
      "firstName": "Ananya",
      "tasks": [
          {
              "title": "Launch Marketing Campaign",
              "description": "Launch and monitor the performance of the new campaign.",
              "date": "2024-12-05",
              "category": "Marketing",
              "active": true,
              "newTask": false,
              "failed": true,
              "completed":false
          },
          {
              "title": "Social Media Engagement",
              "description": "Respond to user comments and messages on social media.",
              "date": "2024-12-06",
              "category": "Marketing",
              "active": false,
              "newTask": true,
              "failed": false,
              "completed":false
          },
          {
              "title": "Blog Content Creation",
              "description": "Write and publish new blog posts on company products.",
              "date": "2024-12-08",
              "category": "Content",
              "active": true,
              "newTask": false,
              "failed": true,
              "completed":false

          }
      ],
      "taskNumbers": { "active": 2, "newTask": 1, "failed": 0,"completed":1 }
  }
];

  const admin = [{
    "id": 1, 
    "firstName":"Admin",
    "email": "admin@me.com",
    "password": "123"
  }]


  export const setLocalStorage = () =>{
      localStorage.setItem('employees',JSON.stringify(employees))
      localStorage.setItem('admin',JSON.stringify(admin))

  }

  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
  }
 
  
  