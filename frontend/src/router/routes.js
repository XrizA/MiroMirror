import Home from "../views/Home.vue";
import Board from "../views/Board.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/board",
    name: "board",
    component: Board,
  },
];
