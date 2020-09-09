export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f58a81396ac670a2505f131',
                  title: 'Sanity Studio',
                  name: 'knoedelwirtschaft-gatsby-sanity-studio',
                  apiId: '64f309a4-e842-4760-b2ea-17d904cf5a08'
                },
                {
                  buildHookId: '5f58a81359fc2309709d929b',
                  title: 'Blog Website',
                  name: 'knoedelwirtschaft-gatsby-sanity',
                  apiId: '82fb7047-9fc9-4c4a-a6dd-0799df8fa906'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/InEchtderKnecht/knoedelwirtschaft-gatsby-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://knoedelwirtschaft-gatsby-sanity.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
