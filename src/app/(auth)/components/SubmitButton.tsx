import { ArrowRight } from "lucide-react";

type Props = {
  //eslint-disable-next-line
  mutation: any;
  mainText: string;
};
const SubmitButton = ({ mutation, mainText }: Props) => {
  return (
    <button
      type="submit"
      disabled={mutation.isPending}
      className="w-full bg-linear-to-r from-primary to-[#5B2E35] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group cursor-pointer"
    >
      {mutation.isPending ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Memproses...</span>
        </>
      ) : (
        <>
          <span>{mainText}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
