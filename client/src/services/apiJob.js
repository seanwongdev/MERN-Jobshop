const API_URL = 'http://localhost:3000/api/v1/jobs';

export async function getAllJobs () {
  try {
    const res = await fetch(API_URL)
    if (!res.ok) throw Error('Failed getting Jobs');

    const data = await res.json();
    console.log(data)
  } catch (err) { console.log(err)}
}

export async function getJob(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw Error(`Couldn't find Job #${id}`);

  const  data  = await res.json();
  console.log(data)
  } catch(err) {console.log(err)}
}



export async function createJob (newJob) {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newJob),
      headers: {
        "Content-type": "application/json",
      }
    })
    if (!res.ok) throw Error('Failed creating new Job');
    const data = res.json();
    console.log(data)

  } catch (err) {
    console.log(err)
  }
}
