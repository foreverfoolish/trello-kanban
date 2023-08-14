import { dummyProjectsType } from "../Interfaces/Kanban";

export const ApiMockResponse: dummyProjectsType = [
  {
    id: 0,
    status: "todo",
    title: "Mobile App",
    cards: [
      {
        id: 1,
        title: "Brainstorming",
        image: [],
        description:
          "Brainstorming brings team members' diverse experience into play. ",
        priority: "low",
        comments: 12,
        files: 0,
        users: ["User1", "User3", "User2"],
        status: "low",
      },
      {
        id: 2,
        title: "Research",
        image: [],
        description:
          "User research helps you to create an optimal product for users.",
        priority: "high",
        comments: 10,
        files: 3,
        users: ["User4", "User5"],
        status: "low",
      },
      {
        id: 3,
        title: "Wirefreame",
        image: [],
        description:
          "Low fidelity wireframes include the most basic content and visuals.",
        priority: "high",
        comments: 11,
        files: 1,
        users: ["User1", "User5", "User2"],
        status: "low",
      }
    ],
    favColor: "#7AC555",
  },
  {
    id: 2,
    status: "wip",
    title: "Website Redesign",
    cards: [
      {
        id: 4,
        title: "Onboarding Illustrations",
        image: ["/OnboardingIllustrations.png"],
        description: "",
        priority: "low",
        comments: 14,
        files: 15,
        users: ["User3", "User2", "User1"],
        status: "high",
      },
      {
        id: 5,
        title: "Moodboard",
        image: ["/Moodboard1.png", "/Moodboard2.png"],
        description: "",
        priority: "low",
        comments: 9,
        files: 10,
        users: ["User3"],
        status: "high",
      }
    ],
    favColor: "#FFA500",
  },
  {
    id: 3,
    status: "completed",
    title: "Design System",
    cards: [
      {
        id: 6,
        title: "Mobile App Design",
        image: ["/Plant Care App.png"],
        description: "",
        priority: "low",
        comments: 14,
        files: 15,
        users: ["User5", "User3"],
        status: "completed",
      },
      {
        id: 7,
        title: "Design System",
        image: [],
        description: "It just needs to adapt the UI from what you did before",
        priority: "low",
        comments: 9,
        files: 10,
        users: ["User1", "User2", "User3"],
        status: "completed",
      }
    ],
    favColor: "#E4CCFD",
  }
];

export const activeUsers = ["User1", "User4", "User3", "User2", "User5", "User6"];