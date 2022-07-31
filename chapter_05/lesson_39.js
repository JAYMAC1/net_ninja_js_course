// Object Literals

// const blogs = [
//   {
//     title: 'why mac and cheese rules',
//     likes: 30,
//   },
//   {
//     title: '10 things to make with marmite',
//     likes: 50,
//   },
// ]

// console.log(blogs)

let user = {
  name: 'James',
  age: 49,
  email: 'james@dev.com',
  location: 'Ayrshire',
  blogs: [
    {
      title: 'why mac and cheese rules',
      likes: 30,
    },
    {
      title: '10 things to make with marmite',
      likes: 50,
    },
  ],
  login() {
    console.log('the user logged in')
  },
  logout() {
    console.log('the user logged out')
  },
  logBlogs() {
    console.log('this user has written the following blogs:')
    this.blogs.forEach((blog) => console.log(blog.title, blog.likes))
  },
}

user.login(0)
user.logout(0)

user.logBlogs(0)
