interface ErrorProps {
  message: string;
}


export const Error = ({message}: ErrorProps) => {
  return (
    <p className="text-red-500 flex justify-center">
      {message}
    </p>
  )
}