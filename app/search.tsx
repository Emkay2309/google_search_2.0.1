import Head from 'next/head';
import { useRouter } from 'next/router';

// Define the types for the result items
interface SearchResult {
  link: string;
  formattedUrl: string;
  title: string;
  snippet: string;
}

// Define the types for search information
interface SearchInformation {
  formattedTotalResults: string;
  formattedSearchTime: string;
}

// Define the type for the results prop
interface SearchResultsProps {
  searchInformation?: SearchInformation;
  items?: SearchResult[];
}

// Define the type for the page props
interface SearchPageProps {
  results: SearchResultsProps;
}

// The Search component with TypeScript types
const Search: React.FC<SearchPageProps> = ({ results }) => {
  const router = useRouter();
  
  return (
    <div>
      <Head>
        <title>Google 2.0</title>
        <meta
          name="description"
          content="Google 2.0 - Made by Moinul Moin - Best JavaScript Developer in Bangladesh"
        />
        <meta
          name="keywords"
          content="Best JavaScript Developer in Bangladesh, Best Web Developer in Bangladesh"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      
    </div>
  );
};

export default Search;

export async function getServerSideProps(context: { query: { term: string; start?: string } }) {
  // API from https://developers.google.com/customsearch/v1/using_rest
  // Context from https://cse.google.com/cse/create/new

  const startIndex = context.query.start || '0';

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  );

  const data = await response.json();

  return {
    props: {
      results: data,
    },
  };
}
