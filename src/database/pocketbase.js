import Pocketbase from 'pocketbase';

const serverURL = 'https://kabir-pocketbase.fly.dev/';
const pb = new Pocketbase(serverURL);

export default pb;