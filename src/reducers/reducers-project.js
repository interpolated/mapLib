export default function(){
  //just creates a store with 2 projects
return(
[
  {
    id: 1,
    location: [-33.1, 151.1],
    name: '197 church',
    'people':[
      'Joe Agius',
      'Karin Ke',
      'Rob Asher'
    ],
    files:[
      'tower.3dm',
      'survey.dwg'  
    ],
    images:[
      'render1.png',
      'render2.png'
    ],
    insights:[
      'make balconies better - Joe',
      'more renders - Rob'
    ]
  },
  {
    id: 2,
    location: [-33.2 , 151.6],
    name: 'ferry',
    people:[
      'Andrew Butler',
      'Karin Ke',
    ],
    files:[
      'roof.3dm',
      'survey22.dwg'  
    ],
    images:[
      'persp.png',
      'time.png'
    ],
    insights:[
      'no engineers drawing',
    ]
  }
]
)
};