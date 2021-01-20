// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const {
    method,
  } = req

  if (method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res
      .status(405)
      .end(`Method ${method} Not Allowed`)
    return;
  }

  res
    .status(200)
    .end('https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwibmlja25hbWUiOiJqZG9lMjIyIiwiaWF0IjoxNTE2MjM5MDIyLCJzY29wZSI6ImFwcDphY2Nlc3MgcG9zdGluZ3M6cmVhZCBwb3N0aW5nczp3cml0ZSBwb3N0aW5nczpjbG9zZSBhcHBsaWNhbnRzOnJlYWQgYXBwbGljYXRpb25zOndyaXRlIn0.wb_slLTOLfXXXzFtnohIUmh9Ausf5z0sHga-ym1CvWc')
}
