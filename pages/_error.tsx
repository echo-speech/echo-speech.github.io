import "../app/globals.css";

const CustomError = ({ statusCode }: { statusCode?: number }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-primary-white text-primary-black dark:bg-zinc-900 dark:text-primary-white">
      <h1 className="text-6xl font-bold">{statusCode || "Oops!"}</h1>
      <p className="mt-4 text-lg">
        {statusCode
          ? `An error ${statusCode} occurred on the server.`
          : "An error occurred on the client."}
      </p>
      <a
        href="/"
        className="mt-8 rounded-md bg-primary-black px-6 py-3 text-sm font-medium text-primary-white hover:bg-gray-700 dark:bg-primary-white dark:text-primary-black dark:hover:bg-gray-300"
      >
        Back to Home
      </a>
    </div>
  );
};

CustomError.getInitialProps = ({ res, err }: { res?: any; err?: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
