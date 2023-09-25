import 'dotenv/config';
import * as prismic from '@prismicio/client';

const repositoryName = process.env.PRISMIC_REPOSITORY_NAME;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export default prismic.createClient(repositoryName, { 
    accessToken
});
