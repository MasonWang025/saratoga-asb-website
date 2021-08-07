const routes = [
  { href: "/", name: "Home" },
  {
    href: "/clubs",
    name: "Clubs",
    dropRoutes: [
      { href: "/", name: "Overview" },
      {
        href: "/club-match",
        name: "Club Match",
      },
    ],
  },
];

export default routes;
