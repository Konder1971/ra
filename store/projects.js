export const state = () => ({
  projects: [
    {
      name: 'p1',
      id: 1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima molestiae tenetur reiciendis non ipsa quos labore iusto incidunt voluptas quis id voluptatibus tempora, nesciunt repellat doloremque. Voluptatum doloribus neque nostrum fugiat, unde porro sit iusto quasi sint laudantium repellendus numquam praesentium voluptate repellat labore expedita nam ipsa cum dolorum.'
    },
    {
      name: 'p2',
      id: 2,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima molestiae tenetur reiciendis non ipsa quos labore iusto incidunt voluptas quis id voluptatibus tempora, nesciunt repellat doloremque. Voluptatum doloribus neque nostrum fugiat, unde porro sit iusto quasi sint laudantium repellendus numquam praesentium voluptate repellat labore expedita nam ipsa cum dolorum.'
    },
    {
      name: 'p3',
      id: 3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima molestiae tenetur reiciendis non ipsa quos labore iusto incidunt voluptas quis id voluptatibus tempora, nesciunt repellat doloremque. Voluptatum doloribus neque nostrum fugiat, unde porro sit iusto quasi sint laudantium repellendus numquam praesentium voluptate repellat labore expedita nam ipsa cum dolorum.'
    },
    {
      name: 'p4',
      id: 4,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima molestiae tenetur reiciendis non ipsa quos labore iusto incidunt voluptas quis id voluptatibus tempora, nesciunt repellat doloremque. Voluptatum doloribus neque nostrum fugiat, unde porro sit iusto quasi sint laudantium repellendus numquam praesentium voluptate repellat labore expedita nam ipsa cum dolorum.'
    }
  ]
})

export const getters = {
  getProjects: state => state.projects
}
