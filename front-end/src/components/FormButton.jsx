import { Loader } from "lucide-react";

export default function FormButton({ isPending, children }) {
  return (
    <button
      type="submit"
      className="mt-4 inline-flex w-full items-center justify-center rounded bg-landing-turquoise p-2 outline-none hover:bg-landing-turquoise/90 focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-landing-blue-100"
    >
      {isPending ? (
        <Loader className="size-4 animate-spin text-landing-blue-100" />
      ) : (
        children
      )}
    </button>
  );
}
