import axios from "axios";

export async function handleSubmit(e, social,flag,setFlag) {
  e.preventDefault();
  console.log(social);
  try {
    await axios.post("https://shy-puce-shrimp-yoke.cyclic.app/social", social);
    setFlag(!flag)
  } catch (e) {
    console.log(e.message);
  }
  e.target.reset();
}
