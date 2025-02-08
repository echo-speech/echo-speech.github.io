import Link from "next/link";
import "../app/globals.css";

const Custom404 = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-primary-white text-primary-black dark:bg-zinc-900 dark:text-primary-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/">
        <a className="mt-8 rounded-md bg-primary-black px-6 py-3 text-sm font-medium text-primary-white hover:bg-gray-700 dark:bg-primary-white dark:text-primary-black dark:hover:bg-gray-300">
          Back to Home
        </a>
      </Link>
    </div>
  );
};

export default Custom404;
