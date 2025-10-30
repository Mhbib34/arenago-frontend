import { AlertCircle, CheckCircle } from "lucide-react";

type MessageProps = {
  type: string;
  text: string;
};

const Message = ({ type, text }: MessageProps) => {
  if (!text) return null;

  const isSuccess = type === "success";
  const Icon = isSuccess ? CheckCircle : AlertCircle;

  return (
    <div
      className={`flex items-center space-x-2 p-4 rounded-lg ${
        isSuccess
          ? "bg-green-500/30 border border-green-500/30 text-green-900"
          : "bg-red-500/30 border border-red-500/30 text-red-900"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default Message;
