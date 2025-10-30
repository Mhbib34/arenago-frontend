import Message from "./Message";

type FormProps = {
  message: { type: string; text: string };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
};

const Form = ({ message, handleSubmit, children }: FormProps) => {
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Message type={message.type} text={message.text} />
      {children}
    </form>
  );
};

export default Form;
