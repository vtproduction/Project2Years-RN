
const SINGLE_CHOICE = 'SINGLE_CHOICE'
const RE_ARRANGE = 'RE_ARRANGE'
const OTHER = 'OTHER'

export default DataSource = [
  {
    id: 1,
    title: 'Title 1',
    type: SINGLE_CHOICE,
    content: [
      'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'
    ],
    answer: 3
  },
  {
    id: 2,
    title: 'Title 2',
    type: SINGLE_CHOICE,
    content: [
      'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'
    ],
    answer: 1
  },
  {
    id: 3,
    title: 'Title 3',
    type: SINGLE_CHOICE,
    content: [
      'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'
    ],
    answer: 0
  },
  {
    id: 4,
    title: 'Title 4',
    type: RE_ARRANGE,
    content: [
      'asset11_1.png', 'asset11_2.png', 'asset11_3.png', 'asset11_4.png',
    ],
    answer: [2, 1, 0, 3]
  },
  {
    id: 5,
    title: 'Title 5',
    type: RE_ARRANGE,
    content: [
      'asset11_1.png', 'asset11_2.png', 'asset11_3.png', 'asset11_4.png',
    ],
    answer: [2, 1, 0, 3]
  },
  {
    id: 6,
    title: 'Title 6',
    type: RE_ARRANGE,
    content: [
      'asset11_1.png', 'asset11_2.png', 'asset11_3.png', 'asset11_4.png',
    ],
    answer: [2, 1, 0, 3]
  },
  {
    id: 7,
    title: 'Title 7',
    type: RE_ARRANGE,
    content: [
      'asset11_1.png', 'asset11_2.png', 'asset11_3.png', 'asset11_4.png',
    ],
    answer: [2, 1, 0, 3]
  },
]