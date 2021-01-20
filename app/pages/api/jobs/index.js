// NOTE: Flesh this one out to add any other goodies apart from basic data access
// Know that you are free to build complex data access layers around the actual data store...but it's not necessary, especially for Junior/Associate-level Engineers...

export default (req, res) => {
    const {
      method,
    } = req

    // NOTE: You need to figure out how to get, transform, and return this data...
    // NOTE: Don't leave this the way it is...it'll be an epic fail!  
    // NOTE: This is just to help you wire up your app, K?
    const jobsData = [
      {
        "id": "0b8cea6c-980e-4017-b1c9-6678b199c53f",
        "req_num": "Tech2020-141",
        "title": "Full-Stack Engineer",
        "status": "filled",
        "active": false,
        "applicants": ["41d7c03c-3ee4-4b3a-bb41-d21906ba1db9"],
        "posted_on": "2020-11-10T23:40:03.813Z"
      }
    ] 

    switch (method) {
      case 'GET':
          res
            .status(200)
            .json(jobsData)
          break
      case 'POST':
          // NOTE: Figure out how to write a new job posting and add the code here
          break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res
          .status(405)
          .end(`Method ${method} Not Allowed`)
        break
    }
  }