export const post = {
  id: 1,
  author: {
    avatarUrl: 'http://github.com/yurigarrido.png',
    name: 'Yuri Garrido',
    role: 'Front end Developer'
  },
  content: [
    { type: 'paragraph', content: 'Fala galera' },
    {
      type: 'paragraph',
      content: 'Acabei de subir mais um projeto no meu portifólio'
    },
    { type: 'link', content: 'jane.desing/doctorcare' }
  ],
  publishedAt: new Date('2023-05-03 20:30:00')
}