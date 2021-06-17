# Thread Saver

Twitter Thread Saver is an app that stores with favourite twitter threads.
This is the frontend version of the backend logic. The backend code can be found [here]().

## Screenshots

![App Screenshot](https://i.ibb.co/9t9hnRg/de49605b-7529-45d3-a7d1-5b15d73b9098.png)
![](https://i.ibb.co/jRVryPk/ad56a2c5-3767-43f5-a707-fb609350c146.png)

## Tech Stack

**Client:** Vue

**Server:** Node, Express

## Run Locally

Clone the project

```bash
  git clone https://github.com/nemo0/thread-saver-frontend.git
```

Go to the project directory

```bash
  cd thread-saver-frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run serve
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

| ENV Variable        | Description                     |
| ------------------- | ------------------------------- |
| `VUE_APP_HD_HOST`   | HarperDB Database Host          |
| `VUE_APP_HD_USER`   | HarperDB Database User          |
| `VUE_APP_HD_PASS`   | HarperDB Database User Password |
| `VUE_APP_HD_SCHEMA` | HarperDB Database Schema        |

## Acknowledgements

- [Hashnode](https://hashnode.com/)
- [HarperDB](https://harperdb.io/)
- [Vercel](http://vercel.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
